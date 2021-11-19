import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';

const CrewById = () => {
  const {id} = useParams();
  const [crewMemberId, setCrewMemberId] = useState([]);

  
  
    useEffect(() => {
      axios
        .get(`https://api.spacexdata.com/v4/crew/${id}`)
        .then((response) => {
          console.log(response.data);
          setCrewMemberId(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div>
      Crew by id 
      
        {crewMemberId.name}
     
    </div>
  )
}

export default CrewById
