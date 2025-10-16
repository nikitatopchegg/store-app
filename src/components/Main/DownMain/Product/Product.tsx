import type { IProduct } from "@/types/store.types";
import type { FC } from "react";
import {
  ItemProduct,
  ProductImg,
  ProductContainer,
  ProductName,
  ProductStar,
  ProductRating,
  ProductReviews,
  ProductExtaContent,
  ProductPrice,
  ProductImgWrapper,
  ProductButton,
  ProductAddContent,
  ProductButtonFavorite,
  ProductImgFavorite,
} from "./Product.style";

interface IProductProps {
  item: IProduct;
}

const Product: FC<IProductProps> = ({ item }) => {
  return (
    <ItemProduct>
      <ProductButtonFavorite>
        <ProductImgFavorite src="/heart.svg" alt="Добавить в избранное" />
      </ProductButtonFavorite>
      <ProductImgWrapper>
        <ProductImg src={item.imageUrl} alt={`Изображение ${item.name}`} />
      </ProductImgWrapper>
      <ProductContainer>
        <ProductName>{item.name}</ProductName>
        <ProductExtaContent>
          <ProductStar src="/yellow-star.svg" alt="*" />
          <ProductRating>{item.rating}</ProductRating>
          <ProductReviews>({item.reviews})</ProductReviews>
        </ProductExtaContent>
        <ProductPrice>{item.price.toLocaleString("ru-RU")} ₽</ProductPrice>
        <ProductAddContent>
          <ProductButton>В корзину</ProductButton>
        </ProductAddContent>
      </ProductContainer>
    </ItemProduct>
  );
};

export default Product;
