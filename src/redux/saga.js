import { takeLatest, call, put } from 'redux-saga/effects';
import { getLatLon, getWeatherData } from './actions';
import { fetchLatLon, fetchWeatherData } from '../api';

function* fetchLatLonSaga(action) {
    try {
        const res = yield call(fetchLatLon, action.payload);
        yield put(getLatLon.getLatLonSuccess(res.data));
    } catch (e) {
        yield put(getLatLon.getLatLonFailure(e));
    }
}

function* fetchWeatherDataSaga(action) {
    try {
        const res = yield call(fetchWeatherData, action.payload);
        yield put(getWeatherData.getWeatherDataSuccess(res.data));
    } catch (e) {
        yield put(getWeatherData.getWeatherDataFailure(e));
    }
}

function* mySaga() {
    yield takeLatest(getLatLon.getLatLonRequest, fetchLatLonSaga);
    yield takeLatest(getWeatherData.getWeatherDataRequest, fetchWeatherDataSaga);
}

export default mySaga;
