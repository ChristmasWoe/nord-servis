import React from 'react';
import Header from '../Components/Header/Header';
import MainInfo from '../Components/MainInfo/MainInfo';
import PrinciplesBlock from '../Components/PrinciplesBlock/PrinciplesBlock';
import StagesBlock from '../Components/StagesBlock/StagesBlock';
import ServicesBlock from '../Components/ServicesBlock/ServicesBlock';
import GassWellsBlock from '../Components/RigsBlock/RigsBlock';
import StructuresBlock from '../Components/StructuresBlock/StructuresBlock';
import Footer from '../Components/Footer/Footer';
import './App.css';
import RigsBlock from '../Components/RigsBlock/RigsBlock';

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
      <Footer />
    </div>
  );
};
export default App;
