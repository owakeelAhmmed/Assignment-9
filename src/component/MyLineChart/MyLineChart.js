import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


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
           
      <div className="flex">
           <div>
                <LineChart width={600} height={400} data={data} margin={{ top: 5,right: 30, left: 20, bottom: 5 }}>
                    <Line type={"monotone"} dataKey={'month'} stroke="#ffff"></Line>
                    <Line type={"monotone"} dataKey={'investment'} stroke="#ffff"></Line>
                    <Line type={"monotone"} dataKey={'sell'} stroke="#ffff"></Line>
                    <Line type={"monotone"} dataKey={'sell'} stroke="#ffff"></Line>
                    <Tooltip/>
                    <YAxis/>
                    <XAxis/>
                </LineChart>
            </div>
            <div>
                <BarChart width={600} height={400} data={data}>

                    <Bar dataKey={'month'} fill="#8884d8"/>
                    <Bar dataKey={'investment'} fill="#8884d8"/>
                    <Bar dataKey={'sell'} fill="#8884d8"/>
                    <Tooltip/>
                    <XAxis/>
                    <YAxis/>
                </BarChart>
            </div>
      </div>
    );
};

export default MyLineChart;