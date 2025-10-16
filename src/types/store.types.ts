//типы для товаров
export type TCatogory =
  | "Все товары"
  | "Электроника"
  | "Одeжда"
  | "Дом и сад"
  | "Книги"
  | "Спорт";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  category: TCatogory;
  imageUrl: string;
  favorite: boolean;
  rating: number;
  reviews: number;
  price: number;
}

export interface ICartProduct {
  products: IProduct[];
  quantity: number;
}
