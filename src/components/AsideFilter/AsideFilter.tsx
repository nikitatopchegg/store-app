import {
  FilteredCount,
  FilteredText,
  FiltredContent,
  FiltredItem,
  FiltredList,
  FiltredOffset,
  FiltredSpan,
  FiltredPar,
  ExtraInfoContent,
  Thumb,
  Track,
  RangePriceWrapper,
} from "./AsideFilter.style";
import type { IFilter } from "@/types/ui.types";
import { products } from "@/data/products";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  changeCategory,
  changeMinPrice,
  changeMaxPrice,
} from "@/features/filter/filterSlice";

import { Range, getTrackBackground } from "react-range";
import type { FC } from "react";

const filterList: IFilter[] = [
  { id: 0, title: "Все товары" },
  { id: 1, title: "Электроника" },
  { id: 3, title: "Одeжда" },
  { id: 4, title: "Дом и сад" },
  { id: 5, title: "Книги" },
  { id: 6, title: "Спорт" },
];

const STEP = 1000; //шаг слайдера
const MIN = 0; //минимальное число
const MAX = 190000; //максимальное число

interface AsideFilterProp {
  isModal?: boolean;
}

const AsideFilter: FC<AsideFilterProp> = ({ isModal }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filter.category);
  const price = useAppSelector((state) => state.filter.price);
  const values = [price.minValue, price.maxValue];

  return (
    <FiltredContent $isModal={isModal}>
      <FiltredOffset>
        <FiltredSpan>Фильтры</FiltredSpan>
        <FiltredPar>Категории</FiltredPar>
        <FiltredList>
          {filterList.map((filterItem) => (
            <FiltredItem
              key={filterItem.id}
              $active={filterItem.title === category} //передача динамического пропса
              onClick={() => dispatch(changeCategory(filterItem.title))}
            >
              <FilteredText>{filterItem.title}</FilteredText>
              <FilteredCount>
                {filterItem.title === "Все товары"
                  ? products.length
                  : products.filter(
                      (product) => product.category === filterItem.title
                    ).length}
              </FilteredCount>
            </FiltredItem>
          ))}
        </FiltredList>
        <FiltredPar>
          Цена: {values[0]} - {values[1].toLocaleString("ru-RU")} ₽
        </FiltredPar>

        <RangePriceWrapper>
          <Range
            step={STEP}
            min={MIN}
            max={MAX}
            values={values}
            onChange={(vals) => {
              dispatch(changeMinPrice(vals[0]));
              dispatch(changeMaxPrice(vals[1]));
            }}
            renderTrack={(
              { props, children } //функия для кастомного трека (линия под ползунком)
            ) => (
              <Track
                {...props}
                background={getTrackBackground({
                  //утилита, которая градиент фона трека, чтобы выделить активный диапозон между ползунками
                  values,
                  colors: ["#ececf0", "#000", "#ececf0"],
                  min: MIN,
                  max: MAX,
                })}
              >
                {children}
              </Track>
            )}
            renderThumb={({ props, isDragged }) => (
              <Thumb {...props} $isDragged={isDragged} />
            )} //функция для кастомной ручки (круга, которые двигается)
          />
          <ExtraInfoContent>
            <p>{MIN} ₽</p>
            <p>{MAX.toLocaleString("ru-RU")} ₽</p>
          </ExtraInfoContent>
        </RangePriceWrapper>
      </FiltredOffset>
    </FiltredContent>
  );
};

export default AsideFilter;
