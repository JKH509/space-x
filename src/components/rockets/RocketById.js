import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const RocketById = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then((response) => {
        setRocket(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h1></h1>
      <p>{rocket.name}</p>
    </div>
  );
};

export default RocketById;
