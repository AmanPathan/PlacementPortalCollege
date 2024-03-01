import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import search from "../Assets/search.png";
import axios from "axios";
import "../Styles/Internship.css";
import "../Styles/InternshipList.css";
import InternshipLoader from "./InternshipLoader";
import InternshipCard from "./InternshipCard";

// const URL1 =
//   "https://script.google.com/macros/s/AKfycbyQQE80wVyNKq8OMRigxzicAAVHrTUsCF0jXt4NOoPItsCmR9V9KPF5M0v_mxa1qQzd/exec";

const Internship = ({internshipData}) => {
  console.log(internshipData);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["company","location","role"]);

  function searchItem(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="student_div">
      <Sidebar param={"internships"} />
      <div className="student_div_center">
        <div className="dashboard_top">
          <div className="search_bar_div">
            <input
              className="search_bar"
              type="text"
              placeholder="Search Companies, Internships, Locations, or Role ..."
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
            <div className="search_icon_div">
              <img
                src={search}
                alt="pic"
                className="search_icon"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          {/* <div className="profile_div">
                        <img src={user} alt="pic" className="profile_img" />
                        <p className="profile_name">Aman</p>
                    </div> */}
        </div>
        <div className="internship_dashboard_bottom">
          {internshipData.length > 0 ? (
            <div className="wrapper">
              <h1>Upcoming Internships...</h1>
              <div className="InternshipList">
                {/* {internshipData.map((data, index) => { */}
                {searchItem(internshipData).map((item, i) => {
                  return <InternshipCard data={item} key={i} />;
                })}
              </div>
            </div>
          ) : (
            // <InternshipList internshipData={internshipData} />
            <InternshipLoader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Internship;
