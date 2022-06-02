import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const SourcesChart: React.FC<any> = () => {
    const data = {
        labels: ['Daraz', 'Bikroy', 'Pickaboo'],
        datasets: [
            {
                label: '# of Votes',
                data: [35, 30, 35],
                backgroundColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239',
                ],
                borderColor: [
                    '#84AF27',
                    '#0095A0',
                    '#FFC239',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie
            data={data}
            width="100%"
            height="228px"
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