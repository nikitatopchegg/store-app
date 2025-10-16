import { NavButton, NavItem, NavList } from "./ExtraIcon.style";
import CartIcon from "@UI/Icons/CartIcon";
import UserIcon from "@UI/Icons/UserIcon";
import HeartIcon from "@UI/Icons/HeartIcon";
import type { SVGProps, FC } from "react";

type TNav = {
  id: number;
  linkImage: FC<SVGProps<SVGSVGElement>>;
};

const nav: TNav[] = [
  { id: 0, linkImage: HeartIcon },
  { id: 1, linkImage: CartIcon },
  { id: 2, linkImage: UserIcon },
];

const ExtraIcon = () => (
  <NavList>
    {nav.map((item) => (
      <NavItem key={item.id}>
        <NavButton>
          <item.linkImage width={"20px"} height={"20px"} />
        </NavButton>
      </NavItem>
    ))}
  </NavList>
);

export default ExtraIcon;
