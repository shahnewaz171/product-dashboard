import React from 'react';
import { Bar } from 'react-chartjs-2';

const ConditionsChart = () => {
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
                    stepSize: 10000
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const labels = ['Official', 'Unofficial', 'Without warranty', 'Used'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: [30000, 32000, 28000, 11000],
                backgroundColor: '#0095A0',
                barThickness: 40,
                maxBarThickness: 100,
            }
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
};

export default ConditionsChart;