import React, { useEffect, useState } from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";
import "../Styles/Company.css";
import axios from 'axios';

const Company = () => {
  const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=vdLM88G_zIfPvuBh8cRHqQNt0TnC6P2afRnkpftFUMSSikomMrSsk2xQMqm96iV9bZ9sArtpNHHhQBqTahA5ySrHtvRiUKawm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNLg6C-wdWxIelZenqpq7d5PFu_vr4atKzLsIkgp9cdS4qjz2vPx2oRgfYe-be4lhXsaQYTbxVRJTHlF2Z9JUb5pjHEk4Kml1w&lib=Mu7cgZbbJR3Jsd9m20phPH86idZU4jP8o';

  // API to retrive brand logo
  let companiesList = [];
  const [companyLogos, setCompanyLogos] = useState([{}]);
  const [companyData ,setCompanyData ] =useState([]);

  const fetchCompanyData = async () => {
    const response = await axios.get(URL);
    const data = response.data.data;
    setCompanyData(data);
  }

  
  const fecthCompanyList = ()=>{
    if(companyData){
      companyData.map(async (item) => {
        const res = await axios.get(`https://api.brandfetch.io/v2/search/${item.Company}`);
        const companyName = res.data[0].name;
        const companyIcon = res.data[0].icon;
        setCompanyLogos([...companyLogos, {
          "name": companyName,
          "icon": companyIcon
        }]);
      })
    }
  }
  useEffect(() => {
    fetchCompanyData();
  }, [])
  console.log(companyData);

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

        </div>
      </div>
    </div>
  );
};

export default Company;
