import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useGlobalContext from '../../../context/useGlobalContext';

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


const SourcesChart: React.FC = () => {
    const { percentage } = useGlobalContext();

    const data = {
        labels: percentage && Object.keys(percentage),
        datasets: [
            {
                data: percentage && Object.values(percentage),
                backgroundColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239'
                ],
                borderColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239'
                ],
                borderWidth: 1
            },
        ],
    };

    return (
        <Pie
            data={data}
            width="248px"
            height="248px"
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "right",
                        display: false,
                    },
                },
            }}
        />
    );
};

export default SourcesChart;