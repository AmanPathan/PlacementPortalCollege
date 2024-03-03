import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import search from "../Assets/search.png";
import axios from "axios";
import "../Styles/Internship.css";
import "../Styles/InternshipList.css";
import InternshipLoader from "./InternshipLoader";
import InternshipCard from "./InternshipCard";
import check from '../Assets/check.png';
import sort from '../Assets/filter.png';

// const URL1 =
//   "https://script.google.com/macros/s/AKfycbyQQE80wVyNKq8OMRigxzicAAVHrTUsCF0jXt4NOoPItsCmR9V9KPF5M0v_mxa1qQzd/exec";

const Internship = ({internshipData}) => {
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

  const [check_flag, setCheckFlag] = useState(3);
  const [showDiv, setShowDiv] = useState(false);

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
          <div className='filter_div'>
            <p className='sort_name' onClick={() => { setShowDiv(!showDiv) }}>filter by</p>
            <img src={sort} className='sort_img' onClick={() => { setShowDiv(!showDiv) }} />
            <div className={showDiv ? 'sort_dropdown' : 'sort_dropdown_none'}>
              <ul className='sort_ul'>
                <li className='sort_li'>Latest &#42779;<img src={check} className={check_flag === 1 ? 'check_img' : "check_img_none"} /></li>
                <li className='sort_li'>Date &#42779;<img src={check} className={check_flag === 2 ? 'check_img' : "check_img_none"} /></li>
              </ul>
            </div>
          </div>
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
