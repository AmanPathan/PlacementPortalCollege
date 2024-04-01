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

const Internship = ({ internshipData }) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["company", "location", "role"]);

  function searchItem(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }
  const currDate = new Date();

  const [check_flag, setCheckFlag] = useState(0);
  const [showDiv, setShowDiv] = useState(false);

  const SortLatest = () => {
    internshipData.sort((a, b) => {
      if (a.deadline > b.deadline) {
        return -1;
      } else if (a.deadline < b.deadline) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  const SortbyDate = () => {
    internshipData.reverse();
  }

  const handleCheck1 = (e) => {
    setCheckFlag(e);
    SortLatest();
    setShowDiv(!showDiv);
  }
  const handleCheck2 = (e) => {
    setCheckFlag(e);
    SortbyDate();
    setShowDiv(!showDiv);
  }

  return (
    <div className="student_div">
      <Sidebar param={"internships"} />
      <div className="student_div_center">
        <div className="dashboard_top student_searchbar">
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
            <div className={showDiv ? 'sort_dropdown filter_dropdown' : 'sort_dropdown_none'}>
              <ul className='sort_ul'>
                <li className='sort_li filter_li' onClick={(e) => { handleCheck1(1) }}>Latest &#42779;<img src={check} className={check_flag === 1 ? 'check_img' : "check_img_none"} /></li>
                <li className='sort_li filter_li' onClick={(e) => { handleCheck2(2) }}>Date &#42779;<img src={check} className={check_flag === 2 ? 'check_img' : "check_img_none"} /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="internship_dashboard_bottom">
          {internshipData.length > 0 ? (
            <div className="wrapper">
              <h1 className="font-bold">Upcoming Internships...</h1>
              <div className="InternshipList">
                {/* {internshipData.map((data, index) => { */}
                {searchItem(internshipData).length>0?searchItem(internshipData).map((item, i) => {
                  const deadlineDate = new Date(item.deadline);
                  const status = deadlineDate >= currDate ? "Live" : "Closed";
                  return <InternshipCard data={item} status={status} key={i} />;
                })
                :
                <div className='center_div'>
                  <h3 className='text-xl font-bold text-red-500 '>No Records Found!</h3>
                </div>}
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