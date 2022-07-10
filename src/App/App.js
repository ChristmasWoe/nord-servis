import React from "react";
import Header from "../Components/Header/Header";
import MainInfo from "../Components/MainInfo/MainInfo";
import PrinciplesBlock from "../Components/PrinciplesBlock/PrinciplesBlock";
import StagesBlock from "../Components/StagesBlock/StagesBlock";
import ServicesBlock from "../Components/ServicesBlock/ServicesBlock";
import GassWellsBlock from "../Components/RigsBlock/RigsBlock";
import StructuresBlock from "../Components/StructuresBlock/StructuresBlock";
import Footer from "../Components/Footer/Footer";
import "./App.css";
import RigsBlock from "../Components/RigsBlock/RigsBlock";
import DrillingLiquorsBlock from "../Components/DrillingLiquorsBlock/DrillingLiquorsBlock";
import Osushka from "../Components/OsushkaAndOsvetlenie/Osushka";
import Osvetlenie from "../Components/OsushkaAndOsvetlenie/Osvetlenie.js";
import DolotoAndVZD from "../Components/DolotoVZDBlock/DolotoVZDBlock";
import Supervising from "../Components/SupervisingBlock/Supervising";
import GeoNavigation from "../Components/GeoNavigation/GeoNavigation";
import PresentationsBlock from "../Components/PresentationsBlock/PresentationsBlock";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainInfo />
      <PrinciplesBlock />
      <StagesBlock />
      <ServicesBlock />
      <RigsBlock />
      <StructuresBlock />
      <DrillingLiquorsBlock />
      <Osushka />
      <Osvetlenie />
      <DolotoAndVZD />
      <Supervising />
      <GeoNavigation />
      <PresentationsBlock />
      <Footer />
    </div>
  );
};
export default App;
