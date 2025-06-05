import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './WeatherCard.css'; // Ensure this CSS file is created and imported

function WeatherCard({ info }) {
  if (!info) {
    return <Typography variant="body1">Loading weather data...</Typography>;
  }

  const { temp, temp_min, temp_max, humidity, feels_like, country, city } = info;

  return (
    <Box className="weather-card-container">
      <Card className="weather-card">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Weather Information
          </Typography>
          <Box>
            <Typography variant="body1">City: {city}</Typography>
            <Typography variant="body1">Temperature: {temp}°C</Typography>
            <Typography variant="body1">Feels Like: {feels_like}°C</Typography>
            <Typography variant="body1">Min: {temp_min}°C</Typography>
            <Typography variant="body1">Max: {temp_max}°C</Typography>
            <Typography variant="body1">Humidity: {humidity}%</Typography>
            <Typography variant="body1">Country: {country}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WeatherCard;
