import React from 'react';
import Header from './Components/Header/Header';
import MainInfo from './Components/MainInfo/MainInfo';
import PrinciplesBlock from './Components/PrinciplesBlock/PrinciplesBlock';
import StagesBlock from './Components/StagesBlock/StagesBlock';
import ServicesBlock from './Components/ServicesBlock/ServicesBlock';
import GassWellsBlock from './Components/GassWellsBlock/GassWellsBlock';
import StructuresBlock from './Components/StructuresBlock/StructuresBlock';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <PrinciplesBlock />
      <StagesBlock />
      <ServicesBlock />
      <GassWellsBlock />
      <StructuresBlock />
      <Footer />
    </div>
  );
};
export default App;
