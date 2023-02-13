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

    const currentData = useSelector((state) => state.data.currentData);

    const lat = useSelector((state) => state.data.lat);
    const lon = useSelector((state) => state.data.lon);
    const location = useSelector((state) => state.data.locationName);
    const errCode = useSelector((state) => state.data.errCode);

    const dispatch = useDispatch();

    const handleChangeSearch = (name) => {
        // dispatch(weatherData.actions.addLocationName(name));
        setNameLocation(name);
    };

    useEffect(() => {
        dispatch(fetchLatLon(nameLocation));
    }, [nameLocation]);
    useEffect(() => {
        dispatch(fetchData({ lat, lon }));
    }, [lat, lon]);

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
