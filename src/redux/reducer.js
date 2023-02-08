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

import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'weatherData',
    initialState: {
        locationName: 'Ha Noi',
        currentData: null,
        daily: [],
        hourly: [],
    },
    reducers: {
        addCurrentWeatherData: (state, action) => {
            state.currentData = action.payload;
        },

        addLocationName: (state, action) => {
            state.locationName = action.payload;
        },
        addDailyData: (state, action) => {
            state.daily = action.payload;
        },

        addHourlyData: (state, action) => {
            state.hourly = action.payload;
        },
    },
});
