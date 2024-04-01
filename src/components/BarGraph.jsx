import React,{useState,useEffect} from 'react';
import '../Styles/Home.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip,Line, ResponsiveContainer} from "recharts";
import toast, { Toaster } from 'react-hot-toast';

import { database } from '../firebaseConfig';
import { get, ref } from 'firebase/database';

const BarGraph = () => {

    const initialValues = [
        {"name":0,"value":0},
        {"name":0,"value":0},
        {"name":0,"value":0},
        {"name":0,"value":0},
        {"name":0,"value":0},
    ]
    const [percentageGraph, setPercentageGraphData] = useState(initialValues);
    const [companiesGraph, setCompaniesGraphData] = useState(initialValues);
    const [medianGraph, setMedianGraphData] = useState(initialValues);
    const [packageGraph, setPackageGraphData] = useState(initialValues);
  
    const getPercentage = async () => {
      const studentsRef = ref(database, 'dashboard/placementPercentage');
      const snapshot = await get(studentsRef);
      if (snapshot.exists()) {
        const res_data = Object.values(snapshot.val());
        const date = new Date();
        let obj = [
          {"name":date.getFullYear()-5, "value":res_data[0].value1},
          {"name":date.getFullYear()-4, "value":res_data[0].value2},
          {"name":date.getFullYear()-3, "value":res_data[0].value3},
          {"name":date.getFullYear()-2, "value":res_data[0].value4},
          {"name":date.getFullYear()-1, "value":res_data[0].value5},
        ]
        setPercentageGraphData(obj);
      }
      else {
        toast.error('Error Fecthing Percentage Data!');
      }
    }
    const getCompanies = async () => {
      const studentsRef = ref(database, 'dashboard/companiesVisited');
      const snapshot = await get(studentsRef);
      if (snapshot.exists()) {
        const res_data = Object.values(snapshot.val());
        const date = new Date();
        let obj = [
          {"name":date.getFullYear()-5, "value":res_data[0].value1},
          {"name":date.getFullYear()-4, "value":res_data[0].value2},
          {"name":date.getFullYear()-3, "value":res_data[0].value3},
          {"name":date.getFullYear()-2, "value":res_data[0].value4},
          {"name":date.getFullYear()-1, "value":res_data[0].value5},
        ]
        setCompaniesGraphData(obj);
      }
      else {
        toast.error('Error Fecthing Companies Data!');
      }
    }
    const getMedian = async () => {
      const studentsRef = ref(database, 'dashboard/medianSalary');
      const snapshot = await get(studentsRef);
      if (snapshot.exists()) {
        const res_data = Object.values(snapshot.val());
        const date = new Date();
        let obj = [
          {"name":date.getFullYear()-5, "value":res_data[0].value1},
          {"name":date.getFullYear()-4, "value":res_data[0].value2},
          {"name":date.getFullYear()-3, "value":res_data[0].value3},
          {"name":date.getFullYear()-2, "value":res_data[0].value4},
          {"name":date.getFullYear()-1, "value":res_data[0].value5},
        ]
        setMedianGraphData(obj);
      }
      else {
        toast.error('Error Fecthing Median Data!');
      }
    }
    const getPackages = async () => {
      const studentsRef = ref(database, 'dashboard/maxPackages');
      const snapshot = await get(studentsRef);
      if (snapshot.exists()) {
        const res_data = Object.values(snapshot.val());
        const date = new Date();
        let obj = [
          {"name":date.getFullYear()-5, "value":res_data[0].value1},
          {"name":date.getFullYear()-4, "value":res_data[0].value2},
          {"name":date.getFullYear()-3, "value":res_data[0].value3},
          {"name":date.getFullYear()-2, "value":res_data[0].value4},
          {"name":date.getFullYear()-1, "value":res_data[0].value5},
        ]
        setPackageGraphData(obj);
      }
      else {
        toast.error('Error Fecthing Packages Data!');
      }
    }
  
    useEffect(() => {
      getPercentage();
      getCompanies();
      getMedian();
      getPackages();
    },[])

    const CustomTooltip1 = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip1">
              <p className="custom-label">{`Year : ${label} `}</p>
              <p className="custom-label">{`Percentage : ${payload[0].value} %`}</p>
            </div>
          );
        }
      
        return null;
      };
    const CustomTooltip2 = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip1">
              <p className="custom-label">{`Year : ${label} `}</p>
              <p className="custom-label">{`Companies Visited : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
    const CustomTooltip3 = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="custom-label">{`Year : ${label} `}</p>
              <p className="custom-label">{`Median Salary : ${payload[0].value} LPA`}</p>
            </div>
          );
        }
      
        return null;
      };
    const CustomTooltip4 = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="custom-label">{`Year : ${label} `}</p>
              <p className="custom-label">{`Max Package : ${payload[0].value} LPA`}</p>
            </div>
          );
        }
      
        return null;
      };

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} stroke="#444444" textAnchor="middle" dy={-6}>{`${value}`}</text>;
    };
    return (
        <>
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <div className='graph_row'>

                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>
                        <h4 className='chart_title'>Placement Percentage</h4>

                        <BarChart
                            width={300}
                            height={200}
                            data={percentageGraph}
                            margin={{
                                top: 30,
                                bottom: 25,
                                right: 5,
                            }}
                        >
                            <Tooltip content={<CustomTooltip1/>}/>
                            <XAxis  dataKey="name" stroke='#000' label={{offset: 5 , value:"Academic Years",position: "bottom",stroke:"#222222"}} />
                            <YAxis stroke='#000'  label={{ value: 'Percentage %', angle: -90,position: "insideCenter",stroke:"#222222", dx: -25}}/>
                            <Bar dataKey="value" fill="#91c95a" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>

                        <h4 className='chart_title'>No. of Companies visited</h4>

                        <BarChart
                           
                            data={companiesGraph}
                            margin={{
                                top: 35,
                                bottom: 25,
                                right: 5,
                            }}
                        >
                            <Tooltip content={<CustomTooltip2/>}/>
                            <XAxis dataKey="name" stroke='#000' label={{ offset:5 ,value:"Academic Years",position: "bottom",stroke:"#222222"}} />
                            <YAxis stroke='#000' label={{ value: 'Number of Companies', angle: -90,position: "insideCenter",stroke:"#222222", dx: -30}}/>
                            <Bar dataKey="value" fill="#4a71fc" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
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
                            data={medianGraph}
                            margin={{
                                top: 30,
                                bottom: 25,
                                right: 5,
                            }}
                        >
                            <Tooltip content={<CustomTooltip3/>}/>
                            <XAxis dataKey="name" stroke='#000' label={{offset:5 ,value:"Academic Years",position: "bottom",stroke:"#222222"}} />
                            <YAxis stroke='#000' label={{ value: 'Salary (LPA)', angle: -90,position: "insideCenter",stroke:"#222222", dx: -25}}/>
                            <Bar dataKey="value" fill="#fe7a36" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart_container' data-aos="zoom-in" data-aos-duration="600">
                    <ResponsiveContainer>

                        <h4 className='chart_title'>Maximum Salary (LPA)</h4>

                        <BarChart
                            width={500}
                            height={300}
                            data={packageGraph}
                            margin={{
                                top: 30,
                                bottom: 25,
                                right: 5,
                            }}
                        >
                            <Tooltip content={<CustomTooltip4/>}/>
                            <XAxis dataKey="name" stroke='#000' label={{offset:5 ,value:"Academic Years",position: "bottom",stroke:"#222222"}} />
                            <YAxis stroke='#000' label={{ value: 'Salary (LPA)', angle: -90,position: "insideCenter",stroke:"#222222", dx: -25}}/>
                            <Bar dataKey="value" fill="#f8b117" barSize={60} label={renderCustomBarLabel} />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>

        </>
    )
}

export default BarGraph;