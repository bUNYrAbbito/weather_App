import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';

function SearchBox({updateInfo}) {
    const [city, setCity] = useState('');
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="7025438619affe382f1281074053c6b5";


    let GetWeatherInfo = async ()=>{
        let Response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let GetRes = await Response.json();
        // console.log(GetRes);
        let Result = {
            city:city,
            temp : GetRes.main.temp,
            temp_min : GetRes.main.temp_min,
            temp_max: GetRes.main.temp_max,
            humidity: GetRes.main.humidity,
            feels_like: GetRes.main.feels_like,
            country: GetRes.sys.country,   
        };
        return Result;
    }



const handleChange = (evt) => {
    setCity(evt.target.value);
};

const handleSubmit =  async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity('');
    let newInfo = await GetWeatherInfo();
    updateInfo(newInfo)
};

return (
    <div className='SearchBox'>
      
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}

export default SearchBox;
