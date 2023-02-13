import axios from 'axios';
import React, { Fragment, useState, useEffect, createContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentWeatherData, addLocationName, addDailyData, addHourlyData } from '../redux/actions';
import weatherData, { fetchLatLon, fetchData } from '../redux/reducer';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

const API_KEY = '84f0c05e16abc57b03ca8fa00b59f78e';

export const currentWeatherContext = createContext();

const Layout = () => {
    const [nameLocation, setNameLocation] = useState('Hanoi');
    const [location, setLocation] = useState('');
    const [errCode, setErrCode] = useState(null);

    const currentData = useSelector((state) => state.data.currentData);

    const lat = useSelector((state) => state.data.lat);
    const lon = useSelector((state) => state.data.lon);

    const dispatch = useDispatch();

    const handleChangeSearch = (name) => {
        // dispatch(weatherData.actions.addLocationName(name));
        setNameLocation(name);
    };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let resLocationData = await axios.get(
    //                 `https://api.openweathermap.org/data/2.5/weather?q=${nameLocation}&appid=${API_KEY}&units=metric`,
    //             );
    //             setLat(resLocationData.data.coord.lat);
    //             setLon(resLocationData.data.coord.lon);
    //             setLocation(resLocationData.data.name);
    //             setErrCode('');
    //         } catch (e) {
    //             setErrCode(e.response.data.cod);
    //         }
    //     };
    //     fetchData();
    // }, [nameLocation]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let resData = await axios.get(
    //             `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    //         );
    //         dispatch(weatherData.actions.addCurrentWeatherData({ ...resData.data.current }));
    //         dispatch(weatherData.actions.addDailyData([...resData.data.daily]));
    //         dispatch(weatherData.actions.addHourlyData([...resData.data.hourly]));
    //     };
    //     fetchData();
    // }, [lon, lat]);
    useEffect(() => {
        dispatch(fetchLatLon(nameLocation));
        dispatch(fetchData({ lat, lon }));
    }, [nameLocation]);

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg="3 " className=" p-0">
                        {currentData && <LeftContent onChangeSearch={handleChangeSearch} name={location} />}
                    </Col>

                    <Col lg="9" className="p-0">
                        <RightContent errCode={errCode} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Layout;
