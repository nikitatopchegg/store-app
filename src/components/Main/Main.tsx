import { useState } from "react";
import DownMain from "./DownMain/DownMain";
import { MainContent } from "./Main.style";
import UpModule from "./UpMain/UpMain";
import { products } from "@/data/products";

const Main = () => {
  const [view, setView] = useState<number>(0);
  const [arrLength, setArrLength] = useState<number>(products.length);

  return (
    <MainContent>
      <UpModule view={view} setView={setView} arrLength={arrLength}></UpModule>
      <DownMain view={view} setArrLength={setArrLength}></DownMain>
    </MainContent>
  );
};

export default Main;
