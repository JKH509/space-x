import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';

const StarLinkById = () => {
  const [star, setStar]=useState('');
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/starlink/${id}`)
      .then((response) => {
        setStar(response.data);
      })
      .catch((error) => {
      });
      // console.log(launchId.payloads)
  }, [id]);



  return (
    <div>
      Starlink by id: {star.id}
    </div>
  )
}

export default StarLinkById;
