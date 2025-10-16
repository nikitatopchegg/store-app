import { NavLink, NavItem, NavList } from "./Navigation.style";

type TNav = {
  id: number;
  title: string;
};

const nav: TNav[] = [
  { id: 0, title: "Каталог" },
  { id: 1, title: "О нас" },
  { id: 2, title: "Контакты" },
];

const Navigation = () => (
  <NavList>
    {nav.map((item) => (
      <NavItem key={item.id}>
        <NavLink href="#">{item.title}</NavLink>
      </NavItem>
    ))}
  </NavList>
);

export default Navigation;
