import { media } from "@/styles/media";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  ${media.table(`font-size: 14px; gap: 10px`)}
  ${media.bigPhone(`display: none`)}
`;
export const NavItem = styled.li``;
export const NavLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;
