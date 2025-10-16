import { media } from "@/styles/media";
import styled from "styled-components";

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

export const ItemProduct = styled.li`
  border: 1px solid var(--custom-grayBorder);
  border-radius: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  position: relative;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  &:hover ${ProductImg} {
    transform: scale(1.2);
  }
`;

export const ProductImgWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  padding: 30px 10px 20px;
  font-size: 16px;

  ${media.desktop(`
    font-size: 14px;
  `)}
`;

export const ProductName = styled.p`
  font-weight: 600;
  /* margin-bottom: 20px; */
  font-size: 1em;
`;

export const ProductExtaContent = styled.div`
  /* margin-bottom: 15px; */
  font-size: 1em;
`;

export const ProductStar = styled.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
  object-position: center;
  margin-right: 5px;
`;

export const ProductRating = styled.span`
  margin-right: 5px;
  font-weight: 500;
  font-size: 1em;
`;

export const ProductReviews = styled.span`
  font-weight: 200;
  font-size: 1em;
`;

export const ProductPrice = styled.span`
  display: block;
  font-weight: 600;
  /* margin-bottom: 10px; */
  font-size: 1em;
`;

export const ProductAddContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductButton = styled.button`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding-block: 10px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

export const ProductButtonFavorite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: none;
  background-color: #ffffffcc;
  opacity: 80%;
  border-radius: 5px;
  padding: 0;
  z-index: 2;
  cursor: pointer;
`;

export const ProductImgFavorite = styled.img`
  width: 15px;
  height: 15px;
  object-position: center;
  object-fit: contain;
`;
