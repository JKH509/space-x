import axios from 'axios';
import React, {useState, useEffect, } from 'react'
// import PropsPage from './PropsPage'

const FalconOne = () => {
  // const [rockets, setRockets] = useState({});
  // const [path, setPath] =([]);

  useEffect(() => {
    const result =  axios.get("https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee")
  .then(result => result.json())
  console.log(result)
        // .then(res => res.json())
        // .then(rockets => setRockets(rockets))
        // console.log(url)
    }, []);

  return (
    <div>
       <div >
       {/* <h1>{result.name} </h1> */}
       {/* <p>{rockets.success}</p> */}
       {/* <p><img src={rockets.flickr_images[1]} alt="..." /></p> */}
       </div>
     </div>
  );
}

export default FalconOne
