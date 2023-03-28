import axios from 'axios';

const API_KEY = '84f0c05e16abc57b03ca8fa00b59f78e';

export const fetchLatLon = (payload) =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`);

export const fetchWeatherData = ({ lat, lon }) =>
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
