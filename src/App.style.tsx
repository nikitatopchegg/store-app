import styled from "styled-components";
import { media } from "./styles/media";

export const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  ${media.desktop(`padding-inline: 10px !important`)}
`;
