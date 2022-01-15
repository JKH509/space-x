import axios from 'axios';
import React,{ useState, useEffect} from 'react';

import './home.css'

const HomeHero = () => {
  const [roadster, setRoadster]=useState('');

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/roadster')
      .then((response) => {
        setRoadster(response.data);
      })
      .catch((error) => {
      });
  }, []);


  return (
    <div className="spaceBG">
      <div
        className="heroBackground center"
        style={{
          backgroundImage: `url('${roadster && roadster.flickr_images[1]}')`,
        }}
      ></div>
    </div>
  );
}

export default HomeHero
