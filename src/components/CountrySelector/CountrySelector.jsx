// import React, {useState, useEffect } from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';
// import { Button } from 'react-bootstrap';

// import styles from './CountrySelector.module.css';

// import {fetchCountries} from '../../api';

// const CountrySelector = ( { handleCountryChange} ) => {
//    const {fetchedCountries, setFetchedCountries} = useState([]);
   
  
//    {
//    useEffect( () => {

   
//    const fetchAPI = async () => {
//         setFetchedCountries(await fetchCountries());
//     }
//     fetchAPI();
// }, [setFetchedCountries]);

//     return (
//         <div class="dropdown">
//         <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         Globally
//         </button>
//         <option value="global">Global Scale</option> 
//         {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
//         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//         {/* <a class="dropdown-item" href="#">United States</a>
//         <a class="dropdown-item" href="#">India</a>
//          <a class="dropdown-item" href="#">Brazil</a> */}   /*this will be a drop down menu of all countries*/
//     </div>
//     </div>
       
            
               
            


//     )
// }
// }

// export default CountrySelector;