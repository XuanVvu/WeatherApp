// const initState = {
//     locationName: 'Ha Noi',
//     currentData: null,
//     daily: [],
//     hourly: [],
// };

// const rootReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'ADD_CURRENT_DATA':
//             return {
//                 ...state,
//                 currentData: action.payload,
//             };

//         case 'ADD_LOCATION_NAME':
//             return {
//                 ...state,
//                 locationName: action.payload,
//             };

//         case 'ADD_DAILY_DATA':
//             return {
//                 ...state,
//                 daily: action.payload,
//             };

//         case 'ADD_HOURLY_DATA':
//             return {
//                 ...state,
//                 hourly: action.payload,
//             };

//         default:
//             return state;
//     }
// };

// export default rootReducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../api';

const weatherData = createSlice({
    name: 'weatherData',
    initialState: {
        locationName: 'Ha Noi',
        lat: '21.0245',
        lon: '105.8412',
        currentData: null,
        daily: [],
        hourly: [],
        status: 'ilde',
    },
    // reducers: {
    //     addCurrentWeatherData: (state, action) => {
    //         state.currentData = action.payload;
    //     },

    //     addLocationName: (state, action) => {
    //         state.locationName = action.payload;
    //     },
    //     addDailyData: (state, action) => {
    //         state.daily = action.payload;
    //     },

    //     addHourlyData: (state, action) => {
    //         state.hourly = action.payload;
    //     },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLatLon.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchLatLon.fulfilled, (state, action) => {
                console.log(' fetchLatLon- action.payload', action.payload);
                state.lat = action.payload.lat;
                state.lon = action.payload.lon;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log('fetchData-action.payload', action.payload);
                state.currentData = action.payload.current;
                state.daily = action.payload.daily;
                state.hourly = action.payload.hourly;
            });
    },
});
export default weatherData;

export const fetchLatLon = createAsyncThunk('fetchLatLon', async (name) => {
    let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`,
    );
    return res.data.coord;
});
export const fetchData = createAsyncThunk('fetchData', async ({ lat, lon }) => {
    let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );
    return res.data;
});
