import { getLatLon, getWeatherData, getType } from './actions';

const initState = {
    locationName: 'Ha Noi',
    lat: '21.0245',
    lon: '105.8412',
    currentData: null,
    daily: [],
    hourly: [],
    isLoading: false,
    errCode: '',
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case getType(getLatLon.getLatLonRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getLatLon.getLatLonSuccess):
            return {
                ...state,
                isLoading: false,
                lat: action.payload.coord.lat,
                lon: action.payload.coord.lon,
                locationName: action.payload.name,
                errCode: '',
            };
        case getType(getLatLon.getLatLonFailure):
            return {
                ...state,
                isLoading: false,
                errCode: action.payload.code,
            };
        case getType(getWeatherData.getWeatherDataRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getWeatherData.getWeatherDataSuccess):
            return {
                ...state,
                currentData: action.payload.current,
                daily: action.payload.daily,
                hourly: action.payload.hourly,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default rootReducer;

// import { createSlice } from '@reduxjs/toolkit';

// export default createSlice({
//     name: 'weatherData',
//     initialState: {
//         locationName: 'Ha Noi',
//         currentData: null,
//         daily: [],
//         hourly: [],
//     },
//     reducers: {
//         addCurrentWeatherData: (state, action) => {
//             state.currentData = action.payload;
//         },

//         addLocationName: (state, action) => {
//             state.locationName = action.payload;
//         },
//         addDailyData: (state, action) => {
//             state.daily = action.payload;
//         },

//         addHourlyData: (state, action) => {
//             state.hourly = action.payload;
//         },
//     },
// });
