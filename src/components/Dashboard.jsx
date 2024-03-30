import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import "../Styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";
import InternshipLoader from './InternshipLoader';
import '../Styles/InternshipLoader.css';
import { useNavigate } from "react-router-dom";
import dummy from '../Assets/dummy.jpg';

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

  const companiesList = [
    {
      "icon":'https://www.ptc.com/dist/ptc/images/ptc-favicon-512x512-gray.png',
      "name":"PTC"
    },
    {
      "icon":"https://companieslogo.com/img/orig/WLN.PA-a6cf516b.png?t=1648300217",
      "name":"WorldLine",
    },
    {
      "icon":"https://i.ibb.co/WGrJpdw/juspay.png",
      "name":"Juspay",
    },
    {
      "icon":"https://asset.brandfetch.io/idzF9a2Y93/idASzAc-NY.png",
      "name":"Cognizant",
    },
  ];

  const data1 = [
    { name: "2019", value: 10 },
    { name: "2020", value: 16.5 },
    { name: "2021", value: 28.36 },
    { name: "2022", value: 41.3 },
    { name: "2023", value: 18.74 },
  ];


  let cnt = 0;
  let totalCnt = 0;
  const [totalStudents, setTotalStudents] = useState(0);
  const [averagePackage, setAverage] = useState(0);
  // const [status, setStatus] = useState(true);

  const PreProcessing = () => {
    // sort data
    data.sort((a, b) => {
      if (a.Package > b.Package) {
        return -1;
      } else if (a.Package < b.Package) {
        return 1;
      } else {
        return 0;
      }
    });

    data.forEach(ele => {
      if (ele.Year == "2024") {
        if (ele.Package != "0") {
          cnt += parseInt(ele.Package, 10); //Parse int is used to convert stoi and 10 converts it to decimal value
          totalCnt++;
        }
      }
    });

    setAverage((cnt / totalCnt).toFixed(1));
    setTotalStudents(totalCnt);
  }

  useEffect(() => {
    if (data) {
      PreProcessing();
     
    }

  }, [data])

  const navigate = useNavigate();

  const handleClick = (data)=>{
    navigate("/students",{
      state:{
        company_selected:{data},
      }
    })
  }

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#ffffff" textAnchor="middle" dy={-6}>{`${value}`}</text>;
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
        {data.length > 0 ?
          <div className="dashboard_bottom_dashboard">
            <div className="dashboard_heading">
              <h2 className="dashboard_headingtext">Welcome To Dashboard <button className="admin_login" onClick={()=>{navigate('/login')}}><img src={user} className="admin_img"/>Login</button></h2>
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
                    <h2 id="placed_student">{totalStudents}</h2>
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
              <div className="flex_item2 ">
                <h3 className="dashboard_text">Top Recruiters</h3>
                {/* {
                  data.slice(0, 3).map((item, index) => {
                    const { Name, Package, Company, UID } = item;
                    return (
                      <div key={index} className="highest_package draw meet" onClick={() => { navigate(`/students/${UID}`) }}>
                        <h3 className="highest_packagetext1">{Name.split(" ")[0] + " " + Name.split(" ")[Name.split(" ").length - 1]}<span className="highest_packagetext2">{Company}</span></h3>
                        <h3 className="highest_packagetext2 highest_packagetext3">{Package} LPA</h3>
                      </div>
                    )
                  })
                } */}
              <div className="companies_div_dashboard">
                {companiesList.map((company,index)=>{
                  return (
                    <>
                      <div className="companies_inner" key={index} onClick={(e)=>{handleClick(company.name)}}>
                        <img src={company.icon} className="company_img_dash"/>
                        <p className="company_name">{company.name}</p>
                      </div>
                    </>
                  )
                })
                  
                }
              </div>  
              </div>
            </div>
            <div className="flex_container2">
              <div className="flex_item3">
                <h3 className="dashboard_text">Top 3 Packages</h3>
                <div className="packages_div">
                  {
                    data.slice(0, 3).map((item, index) => {
                      const { Name, Package, Company, UID,ProfileLink,Year } = item;
                      const profileImg = ProfileLink.slice(33,);

                      return (
                        <div key={index} className="highest_package" onClick={() => { navigate(`/students/${UID}`) }}>
                          {profileImg ?
                        <img src={`https://drive.google.com/thumbnail?id=${ProfileLink.slice(33,)}`}
                          className="card_img_dashboard spin circle" alt='Not Found' />
                        : <img src={dummy} alt="pic" className="card_img_dashboard spin circle" />}
                          <h3 className="highest_packagetext1"><span className="text-animation">{Name.split(" ")[0] + " " + Name.split(" ")[Name.split(" ").length - 1]}</span><span className="highest_packagetext2">{Company}</span></h3>
                          <h3 className="highest_packagetext2 highest_packagetext3">{Package} LPA <span className="year_dashboard">{Year} Batch</span> </h3>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="flex_item4" >
                <h5 className="dashboard_text">Max Packages (LPA)</h5>
                <BarChart
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
              <div className="div_for_padding"> amsn</div>
            </div>
          </div>
          :
          <div className='loading_div'>
            <InternshipLoader />
          </div>

        }
      </div>
    </div>
  );
}

export default Dashboard;

