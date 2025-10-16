import { Products } from "./DownMain.style";
import { products } from "@/data/products";
import Product from "./Product/Product";

import { useAppSelector } from "@/app/hooks";
import type { FC } from "react";

interface DownMainProps {
  view: number;
  setArrLength: (length: number) => void;
}

const DownMain: FC<DownMainProps> = ({ view, setArrLength }) => {
  const { category, price, search, sort } = useAppSelector(
    (state) => state.filter
  );

  const filteredProducts = products
    .filter((p) => (category === "Все товары" ? true : p.category === category))
    .filter((p) => p.price >= price.minValue && p.price <= price.maxValue)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "По рейтингу") return b.rating - a.rating;
      if (sort === "По популярности") return b.reviews - a.reviews;
      if (sort === "Цена: По возрастанию") return a.price - b.price;
      if (sort === "Цена: По убыванию") return b.price - a.price;
      if (sort === "По алфавиту")
        return a.name.localeCompare(b.name, "eng", { sensitivity: "base" });
      return 0;
    });

  setArrLength(filteredProducts.length);

  return (
    <Products $view={view}>
      {filteredProducts.map((product) => (
        <Product key={product.id} item={product}></Product>
      ))}
    </Products>
  );
};

export default DownMain;
