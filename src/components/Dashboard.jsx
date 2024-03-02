import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import "../Styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";

import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Colors } from "chart.js";


function Dashboard({ data }) {
  const data1 = [
    { name: "2019", value: 10 },
    { name: "2020", value: 16.5 },
    { name: "2021", value: 28.36 },
    { name: "2022", value: 41.3 },
    { name: "2023", value: 18.74 },
  ];

  const navigate = useNavigate();

  let cnt = 0;
  let totalCnt = 0;
  const [averagePackage,setAverage] = useState(0);

  const PreProcessing = ()=>{
    // sort data
    data.sort((a, b) => {
      if (a.Package > b.Package && (a.Year == "2024" && b.Year == "2024")) {
        return -1;
      } else if (a.Package < b.Package && (a.Year == "2024" && b.Year == "2024")) {
        return 1;
      } else {
        return 0;
      }
    });

    data.forEach(ele => {
      if (ele.Year == "2024") {
        if (parseInt(ele.Package, 10)!= 0) {
          cnt += parseInt(ele.Package, 10);
          totalCnt++;
        }
      }
    });

    setAverage((cnt / totalCnt).toFixed(1));
  }

  useEffect(()=>{
    PreProcessing();
  })


  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#fff" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  return (
    <div className="student_div">
      <Sidebar param={"dashboard"} />
      <div className="student_div_center">
        {/* <div className="dashboard_top">
          <div className="search_bar_div">
            <input className='search_bar' type='text' placeholder='Seach Companies, Internships, Hackathons, or Students...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
        </div> */}
        <div className="dashboard_bottom_dashboard">
          <div className="dashboard_heading">
            <h2 className="dashboard_headingtext">Welcome To Dashboard</h2>
            {/* <button className="admin"><img src={user} className="user_img"/> Login</button> */}
          </div>
          <div className="flex_container1">
            <div className="flex_item1">
              <div className="flex_item1-1">
                <div className="flex_item">
                  <h3 className="dashboard_text">Total Students</h3>
                  <h2 id="total_student">150</h2>
                </div>
                <div className="flex_item">
                  <h3 className="dashboard_text">Placed Students</h3>
                  <h2 id="placed_student">{data.length}</h2>
                </div>
              </div>
              <div className="flex_item1-2">
                <div className="flex_item">
                  <h3 className="dashboard_text">Total Companies</h3>
                  <h2 id="total_company">58</h2>
                </div>
                <div className="flex_item">
                  <h3 className="dashboard_text">Average Package</h3>
                  <h2 id="avg_salary">{averagePackage} LPA</h2>
                </div>
              </div>
            </div>
            <div className="flex_item2">
              <h3 className="dashboard_text">Top 3 Packages (2024)</h3>
              {
                data.slice(0, 3).map((item, index) => {
                  const { Name, Package, Company, UID } = item;
                  return (
                    <div key={index} className="highest_package" onClick={() => { navigate(`/students/${UID}`) }}>
                      <h3 className="highest_packagetext1">{Name.split(" ")[0] + " " + Name.split(" ")[2]}<span className="highest_packagetext2">{Company}</span></h3>
                      <h3 className="highest_packagetext2 highest_packagetext3">{Package} LPA</h3>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex_container2">
            <div className="flex_item3">

            </div>
            <div className="flex_item4" >
              <h5 className="dashboard_text">Max Packages (LPA)</h5>
              <BarChart
                stroke="white"
                width={600}
                height={280}
                data={data1}
                
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Bar dataKey="value" fill="#4971FC" barSize={60} label={renderCustomBarLabel} />
              </BarChart>
              <h5 className="dashboard_subtext">Academic Year</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

