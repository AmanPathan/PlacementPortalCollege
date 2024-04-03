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
import toast, { Toaster } from 'react-hot-toast';


import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, database } from '../firebaseConfig';
import { get, set, ref } from 'firebase/database';


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


function Dashboard({ data }) {
  const [authUser, setAuthUser] = useState(null);
  const [username, setUsername] = useState('');
  const [maxpackages, setPackages] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setUsername(user.email);
      }
      else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    }
  }, []);

  // console.log("User:",authUser);
  // const companiesList = [
  //   {
  //     "icon": 'https://www.ptc.com/dist/ptc/images/ptc-favicon-512x512-gray.png',
  //     "name": "PTC"
  //   },
  //   {
  //     "icon": "https://companieslogo.com/img/orig/WLN.PA-a6cf516b.png?t=1648300217",
  //     "name": "WorldLine",
  //   },
  //   {
  //     "icon": "https://i.ibb.co/WGrJpdw/juspay.png",
  //     "name": "Juspay",
  //   },
  //   {
  //     "icon": "https://asset.brandfetch.io/idzF9a2Y93/idASzAc-NY.png",
  //     "name": "Cognizant",
  //   },
  // ];


  const [graphData, setGraphData] = useState({});
  const [stats, setStats] = useState([]);


  let jd_data = data.map((item) => {
    let jd = item['Jobprofile'];
    return (jd.trim());
  })
  let unique_data = new Set(jd_data);
  const jdData = Array.from(unique_data);

  console.log(unique_data);

  const SortStudents = () => {
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
  }

  const get_graph_data = async () => {
    const studentsRef = ref(database, 'dashboard/maxPackages');
    const snapshot = await get(studentsRef);
    if (snapshot.exists()) {
      const packages_data = Object.values(snapshot.val());
      const date = new Date();
      let obj = [
        { "name": date.getFullYear() - 5, "value": packages_data[0].value1 },
        { "name": date.getFullYear() - 4, "value": packages_data[0].value2 },
        { "name": date.getFullYear() - 3, "value": packages_data[0].value3 },
        { "name": date.getFullYear() - 2, "value": packages_data[0].value4 },
        { "name": date.getFullYear() - 1, "value": packages_data[0].value5 },
      ]
      setGraphData(obj);
    }
    else {
      toast.error('Error Fecthing Graph Data!');
    }
  }
  const get_stats = async () => {
    const studentsRef = ref(database, 'dashboard/statistics');
    const snapshot = await get(studentsRef);
    if (snapshot.exists()) {
      const res_data = Object.values(snapshot.val());
      setStats(res_data[0]);
    }
    else {
      toast.error('Error Fecthing Stats Data!');
    }
  }

  useEffect(() => {
    get_graph_data();
    get_stats();
  }, [])

  useEffect(()=>{
    SortStudents();
  },[data])
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/students", {
      state: {
        company_selected: { data },
      }
    })
  }

  const date = new Date();
  const CustomTooltip = ({ active, payload, label }) => {
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
    return <text x={x + width / 2} y={y} fill="#ffffff" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  return (
    <div className="student_div">
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
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
              <h2 className="dashboard_headingtext">Welcome To Dashboard <span className="text font-normal text-3xl">(2023)</span></h2>
              {authUser ?
                <button className="admin_profile" onClick={() => { navigate('/admin') }}>
                  <p className="admin_div">
                    <span className="admin_email text-sm text-[#f8b217] font-bold">{username.slice(0, username.indexOf('@'))}</span>
                    <a href="/admin" className="admin_role">Go to Dashboard</a>
                  </p>
                  <img src={user} className="admin_img" />
                </button>
                : <button className="w-fit flex justify-content-center items-center text-lg font-bold bg-[#373737] p-1 rounded-full ps-2 pe-2 hover:bg-[#4a71fc]" onClick={() => { navigate('/login') }}><img src={user} className="admin_img" />Login</button>}
              {/* <button className="admin"><img src={user} className="user_img"/> Login</button> */}
            </div>
            <div className="flex_container1">
              <div className="flex_item1">
                <div className="flex_item1-1">
                  <div className="flex_item">
                    <h3 className="dashboard_text">Total Students</h3>
                    <h2 id="total_student">{stats.totalStudents}</h2>
                  </div>
                  <div className="flex_item">
                    <h3 className="dashboard_text">Placed Students</h3>
                    <h2 id="placed_student">{stats.placedStudents}</h2>
                  </div>
                </div>
                <div className="flex_item1-2">
                  <div className="flex_item">
                    <h3 className="dashboard_text">Total Companies</h3>
                    <h2 id="total_company">{stats.totalCompanies}</h2>
                  </div>
                  <div className="flex_item">
                    <h3 className="dashboard_text">Average Package</h3>
                    <h2 id="avg_salary">{stats.averagePackage} LPA</h2>
                  </div>
                </div>
              </div>
              <div className="flex_item2 ">
                <h3 className="dashboard_text">Job Profiles</h3>
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
                  {/* {companiesList.map((company, index) => {
                    return (
                      <>
                        <div className="companies_inner" key={index} onClick={(e) => { handleClick(company.name) }}>
                          <img src={company.icon} className="company_img_dash" />
                          <p className="company_name">{company.name}</p>
                        </div>
                      </>
                    )
                  })

                  } */}

                  {
                    jdData.filter((word) => word.length <= 20).map((item, index) => {
                      return (
                        <>
                          <div className="flex align-items-center justify-content-center p-1 bg-[#373737] hover:bg-[#444444] rounded-lg cursor-pointer" key={index}>
                            <p className="text text-gray font-bold" onClick={()=>{navigate('/students')}}>{item}</p>
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
                <h3 className="dashboard_text">Top 5 Packages</h3>
                <div className="packages_div">
                  {
                    data.slice(0, 5).map((item, index) => {
                      const { Name, Package, Company, UID, ProfileLink, Year } = item;
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
                  width={550}
                  height={300}
                  data={graphData}

                  margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 30,
                  }}
                >
                  <Tooltip content={<CustomTooltip />} />
                  <XAxis dataKey="name" label={{ offset: 15, value: "Academic Years", position: "bottom", fill: "#ffffff" }} stroke="white" />
                  <YAxis stroke="white" label={{ value: 'Salary (LPA)', angle: -90, position: "insideCenter", fill: "#ffffff", dx: -25 }} />
                  <Bar dataKey="value" fill="#4971FC" barSize={60} label={renderCustomBarLabel} />
                </BarChart>
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

