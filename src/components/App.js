import React from 'react';
import{  Route, Routes} from "react-router-dom";
import HomePage from './home/HomePage';
import Header from './shared/header/Header';
import Launches from './launches/Launches';
import LaunchById from './launches/LaunchById';
import Rockets from './rockets/Rockets';
import RocketById from './rockets/RocketById';
import ErrorPage from './shared/err/ErrorPage';

import MainViewProp from './search/MainViewProp';
import Crew from './crew/Crew';
import CrewById from './crew/CrewById';
import CrewByLaunch from './crew/CrewByLaunch';





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<Launches />} />
        <Route path='/launch/:id' element={<LaunchById />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rocket/:id" element={<RocketById />} />
        <Route path='/crew-members' element={<Crew />} />
        <Route path='/crew-member/:id' element={<CrewById />} />

                    {/* To Be Figured Out */}
        {/* <Route path='/crew/:id' element={<CrewByLaunch />} /> */}

        <Route path='/props' element={<MainViewProp />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
