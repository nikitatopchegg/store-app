import { media } from "@/styles/media";
import styled from "styled-components";
import { css } from "styled-components";

export const Products = styled.ul<{ $view: number }>`
  display: grid;

  ${({ $view }) =>
    $view === 0
      ? css`
          grid-template-columns: repeat(4, 1fr);
          ${media.table(`
    grid-template-columns: repeat(3, 1fr);
  `)}

          ${media.bigPhone(`grid-template-columns: repeat(2, 1fr);`)}
          ${media.smallPhone(`grid-template-columns: 1fr;`)}
        `
      : css`
          grid-template-columns: 1fr;
        `}

  gap: 20px;
`;
