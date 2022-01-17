import React from 'react';
import{  Route, Routes} from "react-router-dom";
import HomePage from './home/HomePage';
import Header from './shared/header/Header';
import Launches from './launches/Launches';
import LaunchById from './launches/LaunchById';
import Rockets from './rockets/Rockets';
import RocketById from './rockets/RocketById';
import ErrorPage from './shared/err/ErrorPage';


import Crew from './crew/Crew';
import CrewById from './crew/CrewById';
import StarLinkPage from './starlink/StarLinkPage';
import StarLinkById from './starlink/StarLinkById';
import ScratchPage from './launches/ScratchPage';


// {todo}
// import CrewByLaunch from './crew/CrewByLaunch';
// import MainViewProp from './search/MainViewProp';





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/launches" element={<Launches />} />

        <Route path="/launchdesign" element={<ScratchPage />} />
        
        <Route path='/launch/:id' element={<LaunchById />} />

        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rocket/:id" element={<RocketById />} />
        {/* <Route path="/rocket/:name" element={<RocketById />} /> */}

        <Route path='/crew-members' element={<Crew />} />
        <Route path='/crew-member/:id' element={<CrewById />} />

        <Route path='/starlink' element={<StarLinkPage />} />
        <Route path='/starlink/:id' element={<StarLinkById />} />
        {/* <Route path='/starlink/:name' element={<StarLinkById />} /> */}

                    {/* To Be Figured Out */}
        {/* <Route path='/crew/:id' element={<CrewByLaunch />} /> */}
        {/* <Route path='/props' element={<MainViewProp />} /> */}

        {/* ToDo */}
        {/* <Route path='/landing-pad' element={<StarLinkPage />} /> */}
        {/* <Route path='/landing-pad/:id' element={<StarLinkById />} /> */}

        {/* <Route path='/launch-pad' element={<StarLinkPage />} /> */}
        {/* <Route path='/launch-pad/:id' element={<StarLinkById />} /> */}



        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
