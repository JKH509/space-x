import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const StarLinkPage = () => {

  const [starlink, setStarLink]=useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/starlink')
      .then((response) => {
        setStarLink(response.data);
        console.log(response.data);
        console.log(response.data.spaceTrack.BSTAR);
      })
      .catch((error) => {
      });
  }, []);


  return (
    <div>
      
      {starlink.map((star) => (
        <div key={star.id}>
          <h1>Starlink  {star && star.id}</h1>
          <Link rel="preconnect" to={`/starlink/${star.id}`}>check out {star.spaceTrack.OBJECT_NAME}</Link>
        </div>
      ))}
    </div>
  )
}

export default StarLinkPage
