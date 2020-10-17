import React, {useState, useEffect } from 'react';
import { InputGroup, FormControl, BootstrapSelect } from 'react-bootstrap'; 

import styles from './CountrySelector.module.css';

import {fetchCountries} from '../../api';

const CountrySelector = ( { handleCountryChange} ) => {
   const {fetchedCountries, setFetchedCountries} = useState([]);
   
  
   {
   useEffect( () => {

   
   const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
}, [setFetchedCountries]);

    return (
     <div>
        <InputGroup classname="mb-3">
        <InputGroup.Prepend>
        <div class="dropdown-menu">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Country</button>
    <FormControl className={styles.formControl}  
    placeholder="Country name" 
     aria-label="Input country name here">
        <BootstrapSelect>
        <option value="global">Global Scale</option> 
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </BootstrapSelect>
        </FormControl>
    
    {/* no longer needed
      <a class="dropdown-item" href="#">United States</a>
      <a class="dropdown-item" href="#">India</a>
      <a class="dropdown-item" href="#">Brazil</a>   */}

    </div>
  </InputGroup.Prepend>
</InputGroup>
</div>
    
    )
    }

}
export default CountrySelector;
