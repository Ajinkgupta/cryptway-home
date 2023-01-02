import React from 'react';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';

// import { Line } from 'react-chartjs-2';

import {Col, Row, Typography} from 'antd';
import moment from 'moment';

const {Title: AnTitle} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName, coinColor}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        //      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
        coinTimestamp.push(moment(coinHistory.data.history[i].timestamp * 1000).format('Do MMMM, \'YY (HH:mm)'))
    }

    coinPrice.reverse()
    coinTimestamp.reverse()

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: `${coinName} Price in USD`,
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "pink",
            },
        ],
    };

    const options = {
        // responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                ticks: {
                    display: false
                }
            }
        }
    }

    // console.log(coinHistory, coinPrice, coinTimestamp)

    return (
        <>
            <div class="px-4 py-4 shadow-md max-w-[800px] m-auto border border-gray-200 cryptostatscard">
                <AnTitle level={2} className="chart-title">{coinName} Price Chart </AnTitle>
                <Col className="price-container">
                    <AnTitle level={5} className="price-change">Change: {coinHistory?.data?.change}%</AnTitle>
                    <AnTitle level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</AnTitle>
                </Col>
           
            {/* <Line data={data} /> */}
            <Chart type='line' options={options} data={data}/>
            </div>
        </>
    );
};

export default LineChart;