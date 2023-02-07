import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import LineChart from '../components/LineChart';

const Hour = () => {
    const hourlyData = useSelector((state) => state.hourly);

    return <div>{hourlyData && <LineChart />}</div>;
};

export default Hour;
