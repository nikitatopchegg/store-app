import styled from "styled-components";

import { media } from "@/styles/media";

export const HeaderPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderShop = styled.header`
  border-bottom: 1px solid var(--custom-grayBorder);
  padding-block: 20px;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;

  ${media.desktop(`
    padding-inline: 10px;
  `)}
`;
