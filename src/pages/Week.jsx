import React, { Fragment, useState } from 'react';
import { Row, Col } from 'reactstrap';
import ForecastDay from '../components/ForecastDay';

import { useSelector } from 'react-redux';

import '../scss/index.scss';

const Week = () => {
    const dailyData = useSelector((state) => state.daily);

    const dateBuilder = (d) => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let m = d.getMonth() + 1;

        return ` ${day}, ${date}/${m}`;
    };

    const [appState, ChangeState] = useState({
        activeObject: null,
        objects: [...dailyData],
    });
    const [dataItem, setDataItem] = useState(null);

    const toggleActive = (index, item) => {
        ChangeState({ ...appState, activeObject: appState.objects[index] });
        setDataItem(item);
    };

    const toggleActiveStyles = (index) => {
        if (appState.objects[index] === appState.activeObject) {
            return 'week__item p-2 active__week';
        } else {
            return 'week__item p-2 inactive__week';
        }
    };
    let sunriseTime;
    let sunsetTime;
    if (dataItem) {
        sunriseTime = new Date(dataItem.sunrise * 1000);
        sunsetTime = new Date(dataItem.sunset * 1000);
    }
    return (
        <Fragment>
            <div className="week__wrapper">
                <Row>
                    <div className="week__inner d-flex flex-wrap">
                        {dailyData.map((item, index) => (
                            <ForecastDay
                                key={index}
                                className={toggleActiveStyles(index)}
                                index={index}
                                data={item}
                                onClick={() => toggleActive(index, item)}
                            />
                        ))}
                    </div>
                </Row>
                {dataItem && (
                    <div className="week__infor h-100 p-2 my-5">
                        <p className="title fs-5 text-muted">{dateBuilder(new Date(dataItem.dt * 1000))}</p>
                        <Row>
                            <Col lg="6">
                                <p className="fs-6 text-muted">Temp current : {dataItem.temp.day}</p>
                                <p className="fs-6 text-muted">
                                    Temp : {dataItem.temp.min} °C - {dataItem.temp.max}°C{' '}
                                </p>
                                <p className="fs-6 text-muted">Humidity : {dataItem.humidity} %</p>
                                <p className="fs-6 text-muted">
                                    Wind speed : {(dataItem.wind_speed * 3.6).toFixed(2)} km/h
                                </p>
                            </Col>

                            <Col lg="6">
                                <p className="fs-6 text-muted">
                                    Sunrise :{' '}
                                    {sunriseTime
                                        .toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })
                                        .toLowerCase()}
                                </p>
                                <p className="fs-6 text-muted">
                                    Sunset :{' '}
                                    {sunsetTime
                                        .toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })
                                        .toLowerCase()}
                                </p>
                                <p className="fs-6 text-muted">Description : {dataItem.weather[0].description}</p>
                                <p className="fs-6 text-muted">Atmospheric pressure : {dataItem.pressure} hPa</p>
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Week;
