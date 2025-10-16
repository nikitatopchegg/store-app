import { media } from "@/styles/media";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  ${media.table(`gap: 10px`)}
  ${media.bigPhone(`display: none`)}
`;
export const NavItem = styled.li``;
export const NavButton = styled.button`
  all: unset;
  padding: 10px;
  ${media.table(`padding: 5px`)}
  &:hover {
    border-radius: 5px;
    background-color: var(--custom-gray);
  }
  & svg {
    ${media.table(`width: 15px; height: 15px`)}
  }
`;
