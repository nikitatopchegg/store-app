import { media } from "@/styles/media";
import styled from "styled-components";

export const ContentPosition = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContentFilter = styled.button`
  display: none;

  ${media.bigPhone(
    `display: inline-flex; justify-content: center; align-items: center; padding: 8px; background-color: black; border: none; border-radius: 5px`
  )}
`;

export const ContentSpan = styled.span`
  font-weight: 200;

  &::after {
    content: " товаров";
  }

  &::before {
    content: "Найдено ";
  }

  ${media.smallPhone(`font-size: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-weight: 500;

    &::after, &::before {
    content: ""
    }
  `)}
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerView = styled.ul`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--custom-grayBorder);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.bigPhone(`display:none`)}
`;

export const ButtonView = styled.li<{ $active: boolean }>`
  width: 50%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  background-color: ${({ $active }) => ($active ? "#000" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
`;

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background-image: url("/public/arrow-down.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    pointer-events: none;
  }
`;

export const ButtonSelect = styled.select`
  width: 200px;
  height: 100%;
  background-color: var(--custom-gray);
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 10px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  overflow: hidden;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: none;
  }

  ${media.smallPhone(`width: 180px`)}
`;

export const ButtonOption = styled.option`
  padding: 5px;
  width: 100%;
  background-color: var(--custom-grayBorder);
  border-radius: 10px;
`;
