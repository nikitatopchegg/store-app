import { configureStore } from "@reduxjs/toolkit"; //основной метод RTK для создания store
import filterReducer from "../features/filter/filterSlice"; //наш слайс для поиска

export const store = configureStore({
  reducer: {
    //reducer - объект, где ключи - имена срезов, а значения - соответсвующие редьюсеры
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; //store.getState - возращает текущее состояние store
//c помощью RuturnType<typeof store.getState> - TS автоматически выводит тип всего состояния
export type AppDispatch = typeof store.dispatch; //тип dispatch может быть не только обычной функцией, но и поддерживать thunk или другие middleware
//typeof store.dispatch берет точный тип dispatch, который потом испольузется в useAppDispatch
