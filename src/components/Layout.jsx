import axios from 'axios';
import React, { Fragment, useState, useEffect, createContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentWeatherData, addLocationName, addDailyData, addHourlyData } from '../redux/actions';

import LeftContent from './LeftContent';
import RightContent from './RightContent';

const API_KEY = '84f0c05e16abc57b03ca8fa00b59f78e';

export const currentWeatherContext = createContext();

const Layout = () => {
    const [nameLocation, setNameLocation] = useState('Hanoi');
    const [lat, setLat] = useState('21.0245');
    const [lon, setLon] = useState('105.8412');

    const currentData = useSelector((state) => state.currentData);

    const dispatch = useDispatch();

    const handleChangeSearch = (name) => {
        dispatch(addLocationName(name));
        setNameLocation(name);
    };
    useEffect(() => {
        const fetchData = async () => {
            let resLocationData = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${nameLocation}&appid=${API_KEY}&units=metric`,
            );
            setLat(resLocationData.data.coord.lat);
            setLon(resLocationData.data.coord.lon);
        };
        fetchData();
    }, [nameLocation]);

    useEffect(() => {
        const fetchData = async () => {
            let resData = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
            );
            dispatch(addCurrentWeatherData({ ...resData.data.current }));
            dispatch(addDailyData([...resData.data.daily]));
            dispatch(addHourlyData([...resData.data.hourly]));
        };
        fetchData();
    }, [lon, lat]);

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg="3 " className=" p-0">
                        {currentData && <LeftContent onChangeSearch={handleChangeSearch} />}
                    </Col>

                    <Col lg="9" className="p-0">
                        <RightContent />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Layout;
