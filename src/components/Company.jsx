import React from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";
import "../Styles/Company.css";
// import dummy from "../Assets/dummy.png";

const Company = () => {
  const cardsData = [
    {
      title: "Google",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
    {
      title: "Uber",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
    {
      title: "Amazon",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
    {
      title: "Flipkart",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
    {
      title: "Myntra",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
    {
      title: "ola",
      content:
        "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    },
  ];
  return (
    <div className="student_div">
      <Sidebar param={"companies"} />
      <div className="student_div_center">
        <div className="dashboard_top">
          <div className="search_bar_div">
            <input
              className="search_bar"
              type="text"
              placeholder="Seach Companies, Internships, Hackathons, or Students..."
            />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
          {/* <div className="profile_div">
            <img src={user} alt="pic" className="profile_img" />
            <p className="profile_name">Aman</p>
          </div> */}
        </div>
        <div className="dashboard_bottom">
          <div className="card-container1">
            <div className="cards1">
              {cardsData.map((card, index) => (
                <div key={index} className="card1">
                  {/* <img src={dummy} alt="pic" className="card_img" /> */}
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
