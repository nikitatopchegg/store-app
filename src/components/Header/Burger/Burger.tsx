import { useState } from "react";
import {
  BurgerLine,
  BurgerButton,
  BurgerContainer,
  BurgerContent,
  BurgerItem,
  BurgerList,
} from "./Burger.style";

const Burger = () => {
  const [burgerShow, setBurgerShow] = useState<boolean>(false);
  return (
    <>
      <BurgerButton onClick={() => setBurgerShow(!burgerShow)}>
        <BurgerContainer>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
        </BurgerContainer>
      </BurgerButton>
      {burgerShow && (
        <BurgerContent>
          <BurgerList>
            <BurgerItem>Каталог</BurgerItem>
            <BurgerItem>О нас</BurgerItem>
            <BurgerItem>Контакты</BurgerItem>
            <BurgerItem>Избранное</BurgerItem>
            <BurgerItem>Корзина</BurgerItem>
            <BurgerItem>Настройки</BurgerItem>
          </BurgerList>
        </BurgerContent>
      )}
    </>
  );
};

export default Burger;
