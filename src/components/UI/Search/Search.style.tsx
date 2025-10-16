import styled from "styled-components";

import { media } from "@/styles/media";

export const SearchWrapper = styled.div<{ $variant: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ $variant }) => ($variant === "header" ? "400px" : "100px")};
  ${media.table(`max-width: 250px`)}
  ${media.smallPhone(`max-width: 200px`)}
`;

export const SearchInput = styled.input<{ $variant: string }>`
  width: 100%;
  padding: 10px 8px;
  padding-left: ${({ $variant }) => ($variant === "header" ? "32px" : "8px")};
  background-color: var(--custom-gray);
  border-radius: 8px;
  font-size: 14px;

  ${media.smallPhone(`font-size: 12px;`)}

  &:focus {
    border: 1px solid var(--custom-grayBorder);
    outline: 2px solid #b8b8b8;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 16px;
  height: 16px;
`;
