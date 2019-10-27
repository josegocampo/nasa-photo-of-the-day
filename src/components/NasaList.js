import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard"


export default function NasaList (){

const [nasa, setNasa] = useState ([]);

useEffect(() => {

  axios
  .get(`https://api.nasa.gov/planetary/apod?api_key=NDRHriWHmW1rcf8aMx1xS7nASIks6A2kOZ6F8dQw`)
  .then(response => {
    console.log(response);
    setNasa(response.data);
    
  })
  .catch(error => {
   console.log(`The error was: ${error}`) 
  })
  
  }, []);

  return (
    <div className="nasaData">
    
          <div>
            <NasaCard
              tittle={nasa.copyright}
              date={nasa.date}
              explanation={nasa.explanation}
              picture={nasa.hdurl}

            />
          </div>
      
    
    </div>
  );





}