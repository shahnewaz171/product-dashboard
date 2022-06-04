import React from 'react';
import { Bar } from 'react-chartjs-2';
import useGlobalContext from '../../../context/useGlobalContext';

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: false,
                text: 'BDT',
                color: '#444444',
            },
            ticks: {
                stepSize: 100000
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};


const ConditionsChart: React.FC = () => {
    const { phoneConditions } = useGlobalContext();
    const keys = phoneConditions && Object.keys(phoneConditions)?.map(item => {
        const title = item.split('_').join(' ');
        return (title.substring(0, 1).toUpperCase()) + (title.substring(1))
    });

    const labels = keys;
    const data = {
        labels,
        datasets: [
            {
                data: phoneConditions && Object.values(phoneConditions),
                backgroundColor: '#0095A0',
                barThickness: 30,
                maxBarThickness: 100,
            }
        ],
        textTransform: 'capitalize'
    };

    return (

        <Bar options={options} data={data} />
    );
};

export default ConditionsChart;