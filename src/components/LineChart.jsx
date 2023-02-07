import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js/auto';
import { useSelector } from 'react-redux';

const LineChart = () => {
    const hourlyData = useSelector((state) => state.hourly);
    const convertTimeStamp = (num) => {
        let hour = new Date(num * 1000);
        return hour
            .toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            })
            .toLowerCase();
    };
    return (
        <>
            <Line
                data={{
                    labels: hourlyData.map((item) => convertTimeStamp(item.dt)),
                    datasets: [
                        {
                            label: 'Temp (°C)',
                            data: hourlyData.map((item) => item.temp),
                        },
                        {
                            label: 'Feel like(°C)',
                            data: hourlyData.map((item) => item.feels_like),
                        },
                    ],
                }}
                height={400}
                width={500}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </>
    );
};

export default LineChart;
