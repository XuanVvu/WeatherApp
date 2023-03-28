import axios from 'axios';
import React, { Fragment, useState, useEffect, createContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import weatherData from '../redux/reducer';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

import { getLatLon, getWeatherData } from '../redux/actions';

const API_KEY = '84f0c05e16abc57b03ca8fa00b59f78e';

const Layout = () => {
    const [nameLocation, setNameLocation] = useState('Hanoi');

    const currentData = useSelector((state) => state.currentData);
    const location = useSelector((state) => state.locationName);
    const lat = useSelector((state) => state.lat);
    const lon = useSelector((state) => state.lon);
    const errCode = useSelector((state) => state.errCode);

    const dispatch = useDispatch();

    const handleChangeSearch = (name) => {
        setNameLocation(name);
    };

    useEffect(() => {
        dispatch(getLatLon.getLatLonRequest(nameLocation));
    }, [nameLocation]);

    useEffect(() => {
        dispatch(getWeatherData.getWeatherDataRequest({ lat, lon }));
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
