import type { TCatogory } from "@/types/store.types";
import type { TOptions } from "@/types/ui.types";
import { createSlice } from "@reduxjs/toolkit"; //основаня функция, которая создает слайс (состояние + редьюсер + экшены)
import type { PayloadAction } from "@reduxjs/toolkit"; //Payload<T> (дженерик тип) - тип, который принимает тип данных, передаваемых в payload

type TPrice = { minValue: number; maxValue: number };

interface IFilterState {
  search: string;
  category: TCatogory;
  price: TPrice;
  sort: TOptions;
}

const initialState: IFilterState = {
  search: "",
  category: "Все товары",
  price: {
    minValue: 0,
    maxValue: 190000,
  },
  sort: "По популярности",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSearchInput: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    changeCategory: (state, action: PayloadAction<TCatogory>) => {
      state.category = action.payload;
    },
    changeMinPrice: (state, action: PayloadAction<number>) => {
      const minValue = action.payload;
      if (minValue < state.price.maxValue) {
        state.price.minValue = minValue;
      }
    },
    changeMaxPrice: (state, action: PayloadAction<number>) => {
      const maxValue = action.payload;
      if (maxValue > state.price.minValue) {
        state.price.maxValue = maxValue;
      }
    },
    changeSort: (state, action: PayloadAction<TOptions>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  changeSearchInput,
  changeCategory,
  changeMinPrice,
  changeMaxPrice,
  changeSort,
} = filterSlice.actions;

export default filterSlice.reducer;
