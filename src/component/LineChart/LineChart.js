import React from 'react';
import { Area, AreaChart, Line, LineChart } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div></div>
    //     <LineChart width={730} height={250} data={data}
    //     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    //     <Line  dataKey="month" stroke="#8884d8" />
    //     <Line  dataKey="uv" stroke="#82ca9d" />
    //   </LineChart>
    );
};

export default LineChart;