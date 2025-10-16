import { media } from "@/styles/media";
import styled from "styled-components";

export const BurgerButton = styled.button`
  display: none;

  padding: 5px;

  color: black;
  border: 1px solid black;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${media.bigPhone(`display: block`)}
`;

export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

export const BurgerLine = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
  border-radius: 2px;
`;

export const BurgerContent = styled.div`
  position: fixed;
  top: 70px;
  right: 20px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
`;

export const BurgerList = styled.ul`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BurgerItem = styled.li`
  list-style: square;
  color: black;
  margin-left: 10px;
  &:hover {
    background-color: var(--customGrey);
  }
`;
