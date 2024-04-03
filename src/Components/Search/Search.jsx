import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Search = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    //fething list fo states
    useEffect(()=>{
        axios.get("https://meddata-backend.onrender.com/states")
        .then(response => setStates(response.data))
        .catch(error => console.log("Error fetching States:",error));
    },[])

    const handleStateChange = (event) =>{
        const stateName = event.target.value;
        setSelectedState(stateName);
        // console.log(stateName);

         //fetching list of cities for selected state:
         axios.get(`https://meddata-backend.onrender.com/cities/${stateName}`)
         .then(response => setCities(response.data))
         .catch(error => console.log('Error fetching cities:',error));
    }
   
    const handleCityChange =( event ) =>{
        const cityName = event.target.value;
        setSelectedCity(cityName);
    }


  return (
    <div>
        <div className="search-options">
            <select name="" id="" onChange={handleStateChange}>
                <option value="">Select State</option>
                {states.map(state => <option key={state}>{state}</option> )}
            </select>
            <select name="" id="" onChange={handleCityChange}>
                <option value="">Select City</option>
                {cities.map(city => <option key={city}>{city}</option>)}
            </select>
        </div>
    </div>
  )
}

export default Search