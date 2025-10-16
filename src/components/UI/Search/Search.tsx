import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeSearchInput } from "@/features/filter/filterSlice";
import { SearchWrapper, SearchInput, Icon } from "./Search.style";
import loupe from "@assets/icons/loupa.svg";
import type { TSearchProps } from "@typings/ui.types";

const Search = ({ variant }: TSearchProps) => {
  const placeholder = variant === "header" ? "Поиск по товарам..." : "Email...";
  const dispatch = useAppDispatch(); //диспатч теперь знает все action creators
  const value = useAppSelector((state) => state.filter.search); //текущее значение из state
  return (
    <SearchWrapper $variant={variant}>
      {variant === "header" && <Icon src={loupe} />}
      <SearchInput
        $variant={variant}
        placeholder={placeholder}
        value={value} //значение из стора
        onChange={(e) => dispatch(changeSearchInput(e.target.value))} //диспатчит action changeSearchInput с новым значением поля
      />
    </SearchWrapper>
  );
};

export default Search;
