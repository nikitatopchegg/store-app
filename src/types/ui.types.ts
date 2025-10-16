import type { TCatogory } from "./store.types";

//типы для UI элементов
export type TSearchProps = {
  variant: "header" | "footer";
};

export type TOptions =
  | "По популярности"
  | "Цена: По возрастанию"
  | "Цена: По убыванию"
  | "По рейтингу"
  | "По алфавиту";

export interface IOptions {
  id: number;
  title: TOptions;
}

export interface IFilter {
  id: number;
  title: TCatogory;
}
