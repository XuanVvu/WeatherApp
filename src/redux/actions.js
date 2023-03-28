import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getLatLon = createActions({
    getLatLonRequest: undefined,
    getLatLonSuccess: (payload) => payload,
    getLatLonFailure: (err) => err,
});

export const getWeatherData = createActions({
    getWeatherDataRequest: undefined,
    getWeatherDataSuccess: (payload) => payload,
    getWeatherDataFailure: (err) => err,
});
