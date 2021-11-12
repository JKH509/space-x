import React from 'react';
import{  Route, Routes} from "react-router-dom";
import HomePage from './home/HomePage';
import Header from './shared/header/Header';
import Launches from './launches/Launches';
import Rockets from './rockets/Rockets';
import ErrorPage from './shared/err/ErrorPage';
import MainViewProp from './search/MainViewProp';
import Launched from './launches/Launched';
import FalconOne from './rockets/FalconOne';

// import Axios from 'axios'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:id" element={<Rockets />} />
        <Route path="/rockets/falcon-one" element={<FalconOne />} />
        <Route path='/props' element={<MainViewProp />} />
        <Route path='/launched' element={<Launched />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
