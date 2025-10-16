import { media } from "@/styles/media";
import { css } from "styled-components";
import styled from "styled-components";

interface FilteredItem {
  $active?: boolean;
}

export const FiltredContent = styled.aside<{ $isModal?: boolean }>`
  width: 100%;
  max-width: 100%;
  border: 1px solid var(--custom-grayBorder);
  position: sticky;
  top: 115px;
  border-radius: 20px;
  margin-top: 10px;

  ${({ $isModal }) =>
    !$isModal &&
    css`
      ${media.bigPhone("display: none")};
      max-width: 20%;
    `}
`;

export const FiltredOffset = styled.div`
  padding: 20px;
  font-size: 16px;
  ${media.desktop(`font-size: 14px`)}
  ${media.table(`font-size: 12px`)}
`;

export const FiltredSpan = styled.span`
  margin-bottom: 30px;
  font-size: 1em;
  display: block;
`;

export const FiltredPar = styled.h2`
  margin-bottom: 10px;
  font-size: 1em;
`;

export const RangePriceWrapper = styled.div`
  //контейнер для range
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
`;

export const Thumb = styled.div<{ $isDragged?: boolean }>`
  //линия range
  height: 19px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  outline: ${({ $isDragged }) =>
    $isDragged ? "5px solid rgba(204, 203, 203, 0.5)" : "#fff"};

  &:hover {
    outline: 5px solid rgba(204, 203, 203, 0.5);
  }
`;

export const Track = styled.div<{ background: string }>`
  //ползунок
  height: 20px;
  width: 100%;
  border-radius: 10px;
  background: ${({ background }) => background};
`;

export const ExtraInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 200;
  font-size: 1em;
`;

export const FiltredList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const FiltredItem = styled.li<FilteredItem>`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#000" : "transporent")};
  border-radius: 5px;
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};

  font-size: 1.125em;
  ${({ $active }) =>
    !$active &&
    css`
      &:hover {
        background-color: var(--custom-gray);
        border-radius: 5px;
      }
    `}
`;

export const FilteredText = styled.span`
  font-weight: 500;
`;

export const FilteredCount = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--custom-gray);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;

  ${media.table(`display: none`)}
`;
