import { MainContent } from "./App.style";
import AsideFilter from "./components/AsideFilter/AsideFilter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent className="container">
        <AsideFilter></AsideFilter>
        <Main></Main>
      </MainContent>
    </>
  );
}

export default App;
