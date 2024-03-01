import React from "react";
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


function Dashboard() {
  const data1 = [
    { name: "2018", value: 254 },
    { name: "2019", value: 299 },
    { name: "2020", value: 304 },
    { name: "2021", value: 370 },
    { name: "2022", value: 273 },
  ];
  
  const navigate = useNavigate();
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
                  <h2 id="placed_student">15</h2>
                </div>
              </div>
              <div className="flex_item1-2">
                <div className="flex_item">
                  <h3 className="dashboard_text">Total Companies</h3>
                  <h2 id="total_company">58</h2>
                </div>
                <div className="flex_item">
                  <h3 className="dashboard_text">Average Package</h3>
                  <h2 id="avg_salary">7 LPA</h2>
                </div>
              </div>
            </div>
            <div className="flex_item2">
              <h3 className="dashboard_text">Top 3 Highest Package</h3>
              <div className="highest_package" onClick={()=>{navigate("/students/")}}>
                    <h3 className="highest_packagetext1">1.Shwetal Shete</h3>
                    <h3 className="highest_packagetext2">Johnson controls - 8.5LPA</h3>
              </div>
              <div className="highest_package">
                    <h3 className="highest_packagetext1">2.Rasika Ghadge</h3>
                    <h3 className="highest_packagetext2">PTC Software - 8.5LPA</h3>
              </div>
              <div className="highest_package">
                    <h3 className="highest_packagetext1">3.Prerana Kale</h3>
                    <h3 className="highest_packagetext2">PTC Software- 8.23LPA</h3>
              </div>
            </div>
          </div>
          <div className="flex_container2">
            <div className="flex_item3">

            </div>
            <div className="flex_item4">
              <h5 className="dashboard_text">No of Company Visited</h5>
              <BarChart
                width={800}
                height={400}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white"/>
                <Bar dataKey="value" fill="#4971FC" barSize={60} />
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

{
  /* <div className="profile_div">
            <img src={user} alt="pic" className="profile_img" />
            <p className="profile_name">Aman</p>
          </div> */
}
