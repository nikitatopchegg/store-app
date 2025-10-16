import { useDispatch, useSelector } from "react-redux"; //стандартные хуки React-Redux
import type { RootState, AppDispatch } from "./store";
//RootStore - тип глабального состояния (все, что у нас в store)
//AppDispatch - тип доя функции диспатч для стора
import type { TypedUseSelectorHook } from "react-redux";
//TypedUseSelectHook - вспомогательный тип для типизированного useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>(); //создаем обертку над обычным useDispatch, который знает, как тип action можно достичь
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //useSelector стандратно не знает тип сосотояния, поэтому TS не может подсказать поля
//С TypedUseSelectorHook говорим: "Этот useSelector работает с нашим RootState"
