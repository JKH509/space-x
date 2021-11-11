import React, { useState, useEffect } from "react";
// import Axios from 'axios';
import Modal from "../shared/modal/Modal";

const Rockets = ({ id, name, success }) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    // Asks for data using a fetch wich is a request for information from an an api url
    //if its a good Request, then a Response is recived.
    //After that you set the Response as a jaason so we can store the info as an accesable
    // prop

    // Also hi James lol this is so fun coding with somone.
    // lemme know what you think of the lil changes i've made.

    let url = "https://api.spacexdata.com/v4/rockets";
    fetch(url)
      .then((res) => res.json())
      .then((rockets) => setRockets(rockets));
  }, []);

  return (
    <div className="mt-5">
      {rockets.map((rocket) => (
        <div key={id}>
          <h1>
            {rocket.name} {id}
          </h1>
          <p>{success}</p>
          {/* <p><img src={rocket.flickr_images[1]} alt="..." /></p> */}
          <Modal id={rocket.id} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
