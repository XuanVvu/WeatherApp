import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../scss/index.scss';

const ForecastDay = ({ className, index, data, onClick }) => {
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const dateBuilder = (d) => {
        let days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let m = d.getMonth() + 1;

        return ` ${day}, ${date}/${m}`;
    };
    return (
        <Col lg="3" className="p-1">
            <div className={className} key={index} onClick={onClick}>
                <p className="fs-6 text-black-50">{dateBuilder(new Date(data.dt * 1000))}</p>
                <div className="week__item__content text-center">
                    <img src={icon} alt="" />
                    <p className="fs-6 fw-bold text-muted">
                        {data.temp.min.toFixed(0)}° - {data.temp.max.toFixed(0)}°
                    </p>
                </div>
            </div>
        </Col>
    );
};

export default ForecastDay;
