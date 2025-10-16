import Logo from "./Logo/Logo";
import Search from "../UI/Search/Search";
import Navigation from "./Navigation/Navigation";
import ExtraIcon from "./ExtraIcon/ExtraIcon";
import { HeaderPosition, HeaderShop } from "./Header.style";
import Burger from "./Burger/Burger";

const Header = () => (
  <HeaderShop>
    <div className="container">
      <HeaderPosition>
        <Logo></Logo>
        <Search variant="header"></Search>
        <nav>
          <Burger></Burger>
          <Navigation></Navigation>
        </nav>
        <ExtraIcon></ExtraIcon>
      </HeaderPosition>
    </div>
  </HeaderShop>
);

export default Header;
