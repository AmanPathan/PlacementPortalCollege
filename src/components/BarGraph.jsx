import React from 'react';
import '../Styles/Home.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarGraph = () => {

    const data1 = [
        { name: "2018", value: 71 },
        { name: "2019", value: 77 },
        { name: "2020", value: 77 },
        { name: "2021", value: 84 },
        { name: "2022", value: 86 },
    ];

    const data2 = [
        { name: "2018", value: 254 },
        { name: "2019", value: 299 },
        { name: "2020", value: 305 },
        { name: "2021", value: 370 },
        { name: "2022", value: 273 },
    ];
    const data3 = [
        { name: "2018", value: 3.3 },
        { name: "2019", value: 3.25 },
        { name: "2020", value: 4 },
        { name: "2021", value: 4.2 },
        { name: "2022", value: 4.8 },
    ];
    const data4 = [
        { name: "2018", value: 7 },
        { name: "2019", value: 16 },
        { name: "2020", value: 16.5 },
        { name: "2021", value: 28.39 },
        { name: "2022", value: 41.3 },
    ];

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
    };
    return (
        <>
            <div className='graph_row'>

                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>
                        <h4 className='chart_title'>Placement Percentage</h4>

                        <BarChart
                            width={500}
                            height={300}
                            data={data1}
                            margin={{
                                top: 5,
                                right: 30,
                                bottom: 5
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="value" fill="#91c95a" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                        <h5>Academic Year</h5>
                    </ResponsiveContainer>
                </div>
                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>

                        <h4 className='chart_title'>No. of Companies visited</h4>

                        <BarChart
                            width={500}
                            height={300}
                            data={data2}
                            margin={{
                                top: 20,
                                right: 30,
                                bottom: 5
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="value" fill="#4a71fc" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                        <h5>Academic Year</h5>
                    </ResponsiveContainer>

                </div>
            </div>
            <div className='graph_row'>

                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>

                        <h4 className='chart_title'>Median Salary (LPA)</h4>

                        <BarChart
                            width={500}
                            height={300}
                            data={data3}
                            margin={{
                                top: 20,
                                right: 30,
                                bottom: 5
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="value" fill="#fe7a36" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                        <h5>Academic Year</h5>
                    </ResponsiveContainer>
                </div>
                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>

                        <h4 className='chart_title'>Maximum Salary (LPA)</h4>

                        <BarChart
                            width={500}
                            height={300}
                            data={data4}
                            margin={{
                                top: 20,
                                right: 30,
                                bottom: 5
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="value" fill="#f8b117" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                        <h5>Academic Year</h5>
                    </ResponsiveContainer>

                </div>
            </div>

        </>
    )
}

export default BarGraph;