// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancer = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancer);

// export default store;

//REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit';
import weatherData from './reducer';

const store = configureStore({
    reducer: {
        data: weatherData.reducer,
    },
});

export default store;
