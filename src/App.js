import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
//import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
const [countries, setCountries] = useState([])
useEffect(() => {
      axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
          setCountries(response.data)
        })
}, [])

  
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries}/>
          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
