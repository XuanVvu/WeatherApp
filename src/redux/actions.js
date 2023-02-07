export const addCurrentWeatherData = (data) => {
    return {
        type: 'ADD_CURRENT_DATA',
        payload: data,
    };
};

export const addLocationName = (name) => {
    return {
        type: 'ADD_LOCATION_NAME',
        payload: name,
    };
};

export const addDailyData = (data) => {
    return {
        type: 'ADD_DAILY_DATA',
        payload: data,
    };
};

export const addHourlyData = (data) => {
    return {
        type: 'ADD_HOURLY_DATA',
        payload: data,
    };
};
