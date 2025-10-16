import type { IOptions, TOptions } from "@/types/ui.types";
import {
  ContentButton,
  ContentPosition,
  ContentSpan,
  ButtonView,
  ButtonSelect,
  ButtonOption,
  SelectWrapper,
  ContainerView,
  ContentFilter,
} from "./UpMain.style";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeSort } from "@/features/filter/filterSlice";
import List from "@/components/UI/Icons/List";
import Grid from "@/components/UI/Icons/Grid";
import { useState, type FC, type JSX } from "react";
import { FilterIcon } from "@/components/UI/Icons/FilterIcon";
import ModalFilter from "@/components/ModalFilter/ModalFilter";
import AsideFilter from "@/components/AsideFilter/AsideFilter";

const optionsList: IOptions[] = [
  { id: 0, title: "По популярности" },
  { id: 1, title: "Цена: По возрастанию" },
  { id: 2, title: "Цена: По убыванию" },
  { id: 3, title: "По рейтингу" },
  { id: 4, title: "По алфавиту" },
];

const viewList: { id: number; imgLink: () => JSX.Element }[] = [
  { id: 0, imgLink: Grid },
  { id: 1, imgLink: List },
];

interface UpMainProps {
  view: number;
  setView: (id: number) => void;
  arrLength: number;
}

const UpModule: FC<UpMainProps> = ({ view, setView, arrLength }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.filter.sort);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ContentPosition>
      <ContentSpan>{arrLength}</ContentSpan>
      <ContentFilter onClick={() => setIsOpen(true)}>
        <FilterIcon size={18} color="white"></FilterIcon>
        <ModalFilter isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <AsideFilter isModal={true}></AsideFilter>
        </ModalFilter>
      </ContentFilter>
      <ContentButton>
        <ContainerView>
          {viewList.map((viewItem) => (
            <ButtonView
              key={viewItem.id}
              $active={view === viewItem.id}
              onClick={() => setView(viewItem.id)}
            >
              <viewItem.imgLink />
            </ButtonView>
          ))}
        </ContainerView>
        <SelectWrapper>
          <ButtonSelect
            value={value}
            onChange={(e) => dispatch(changeSort(e.target.value as TOptions))}
          >
            {optionsList.map((option) => (
              <ButtonOption key={option.id} value={option.title}>
                {option.title}
              </ButtonOption>
            ))}
          </ButtonSelect>
        </SelectWrapper>
      </ContentButton>
    </ContentPosition>
  );
};

export default UpModule;
