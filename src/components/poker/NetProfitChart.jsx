import React, { useEffect, useImperativeHandle, useState, forwardRef } from 'react';
import { Chart } from 'primereact/chart';
import { retrieveGamesUser } from './api/ApiService';
import { useAuth } from './security/AuthContext';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const NetProfitChart = forwardRef((props, ref) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const authContext = useAuth();
    const username = authContext.username;

    const fetchData = async () => {
        try {
            const response = await retrieveGamesUser(username);
            const data = response.data;

            data.sort((a, b) => new Date(a.date) - new Date(b.date));

            const dates = data.map(item => item.date);
            const cumulativeNetProfits = [];
            let cumulativeTotal = 0;

            data.forEach(item => {
                cumulativeTotal += item.netNight;
                cumulativeNetProfits.push(cumulativeTotal);
            });

            const dataForChart = {
                labels: dates,
                datasets: [
                    {
                        label: 'Cumulative Net Profit Over Time',
                        data: cumulativeNetProfits,
                        fill: false,
                        borderColor: cumulativeNetProfits.map(value => value >= 0 ? 'green' : 'red'),
                        tension: 0.4,
                        pointBackgroundColor: cumulativeNetProfits.map(value => value >= 0 ? 'green' : 'red'),
                        borderJoinStyle: 'round',
                    },
                ],
            };

            const options = {
                maintainAspectRatio: false,
                aspectRatio: 2.5,
                plugins: {
                    legend: {
                        labels: {
                            color: '#FFFFFF',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#FFFFFF',
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        ticks: {
                            color: '#FFFFFF',
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
                elements: {
                    line: {
                        borderWidth: 2,
                        segment: {
                            borderColor: ctx => {
                                return ctx.p1.parsed.y >= 0 ? 'green' : 'red';
                            },
                        },
                    },
                    point: {
                        radius: 4,
                        hoverRadius: 6,
                    },
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 20,
                        bottom: 20,
                    },
                },
            };

            setChartData(dataForChart);
            setChartOptions(options);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    useImperativeHandle(ref, () => ({
        fetchData,
    }));

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="card" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <h5>Cumulative Net Profit Over Time</h5>
            <Chart type="line" data={chartData} options={chartOptions} style={{ height: '400px' }} />
        </div>
    );
});

export default NetProfitChart;