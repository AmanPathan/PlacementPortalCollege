import React, {  useState } from "react";
import "../Styles/Common.css";
import Sidebar from "../components/Sidebar";
import user from "../Assets/user_profile.png";
import search from "../Assets/search.png";
import "../Styles/Company.css";
// import dummy from "../Assets/dummy.png";
import company_logo from '../Assets/company_logo.png';
import {useNavigate} from 'react-router-dom';

const Company = () => {

  const companiesList = [
    // {
    //   "icon":'https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l21001dd759eb5d7858b23ee949eb5025f16f6fa1.png',
    //   "name":"PTC"
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l1076fa6e58cb921b147ffa24f087314a07213cb8.png",
    //   "name":"WorldLine",
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lefdcf6b7527c4c70f2d6e76adb9ce6efab9dbe8c.png",
    //   "name":"Persistent Systems",
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l4cd51f4447b27c293e273d6bb112bcd252268711.png",
    //   "name":"Dassault Systems",
    // },
    // {
    //   "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sify.png/330px-Sify.png",
    //   "name":"SIFY Technologies",
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l198bdb4a2a090923662d32b6c6152cfee12df3c3.png",
    //   "name":"Cognizant",
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lc0156f6bd3d26d5bb3b974372d2e2da4d5351034.png",
    //   "name":"Cimpress",
    // },
    // {
    //   "icon":"https://upload.wikimedia.org/wikipedia/commons/c/c1/Rockwell_Automation_Logo.png",
    //   "name":"Rockwell Automation",
    // },
    // {
    //   "icon":"https://download.logo.wine/logo/Xperi/Xperi-Logo.wine.png",
    //   "name":"XPERI",
    // },
    // {
    //   "icon":"https://seeklogo.com/images/T/tata-communications-logo-3EBEF394B3-seeklogo.com.png",
    //   "name":"TATA Communications",
    // },
    // {
    //   "icon":"https://imgee.s3.amazonaws.com/imgee/a0baca393d534736b152750c7bde97f1.png",
    //   "name":"Juspay",
    // },
    // {
    //   "icon":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9PzqQVHGTTUYINRfySFqN4Ceshmw3LvJF9RcSCoq5YI4RTvRyO2AccHS5Cl3mRk-0Kc&usqp=CAU",
    //   "name":"Zensoft Services",
    // },
    // {
    //   "icon":"https://1000logos.net/wp-content/uploads/2022/06/Johnson-Controls-logo.png",
    //   "name":"Johnson Controls",
    // },
    // {
    //   "icon":"https://1000logos.net/wp-content/uploads/2023/04/Bank-of-New-York-Mellon-Logo.jpg",
    //   "name":"BNY Mellon",
    // },
    // {
    //   "icon":"https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png",
    //   "name":"Accenture",
    // },
    // {
    //   "icon":"https://www.csodbrand.com/wp-content/uploads/2021/10/Cornerstone-Logo-Horizontal.png",
    //   "name":"Cornerstone",
    // },
    // {
    //   "icon":"https://jobs.vibhaga.com/wp-content/uploads/2018/08/Virtusa-Logo-2.jpg",
    //   "name":"Virtusa",
    // },
    // {
    //   "icon":"https://www.datanami.com/wp-content/uploads/2014/05/couchbase_Logo.png",
    //   "name":"Couchbase",
    // },
    // {
    //   "icon":"https://asset.brandfetch.io/idKqBXb52x/idcZMhBFzK.png",
    //   "name":"Accolite Digital",
    // },
    // {
    //   "icon":"https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo.png",
    //   "name":"JIO",
    // },
    // {
    //   "icon":"https://seekvectorlogo.net/wp-content/uploads/2018/11/springer-nature-vector-logo.png",
    //   "name":"Springer Nature",
    // },
    // {
    //   "icon":"https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l319f2de047c5d0998fcfcb29dfe08ee0e17fb90c.png",
    //   "name":"TCS",
    // },
    {
      "icon":'https://www.ptc.com/dist/ptc/images/ptc-favicon-512x512-gray.png',
      "name":"PTC"
    },
    {
      "icon":"https://companieslogo.com/img/orig/WLN.PA-a6cf516b.png?t=1648300217",
      "name":"WorldLine",
    },
    {
      "icon":"https://i.ibb.co/SVywcvq/persistent.png",
      "name":"Persistent Systems",
    },
    {
      "icon":"https://companieslogo.com/img/orig/DSY.PA-35ee07a0.png?t=1634121774",
      "name":"Dassault Systems",
    },
    {
      "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sify.png/330px-Sify.png",
      "name":"SIFY Technologies",
    },
    {
      "icon":"https://asset.brandfetch.io/idzF9a2Y93/idASzAc-NY.png",
      "name":"Cognizant",
    },
    {
      "icon":"https://companieslogo.com/img/orig/CMPR-7ba38252.png?t=1670228023",
      "name":"Cimpress",
    },
    {
      "icon":"https://companieslogo.com/img/orig/ROK-331842c1.png?t=1596262923",
      "name":"Rockwell Automation",
    },
    {
      "icon":"https://companieslogo.com/img/orig/XPER-cf520cd1.png?t=1660024381",
      "name":"XPERI",
    },
    {
      "icon":"https://cdn.iconscout.com/icon/free/png-256/free-tata-3441644-2874413.png",
      "name":"TATA Comm.",
    },
    {
      "icon":"https://i.ibb.co/WGrJpdw/juspay.png",
      "name":"Juspay",
    },
    {
      "icon":"https://i.ibb.co/pb73c0r/zensoft.png",
      "name":"Zensoft Services",
    },
    {
      "icon":"https://www.marketscreener.com/static/private-issuer-squared-8AMPU.png",
      "name":"Johnson Controls",
    },
    {
      "icon":"https://companieslogo.com/img/orig/BK-9173126b.png?t=1651421395",
      "name":"BNY Mellon",
    },
    {
      "icon":"https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
      "name":"Accenture",
    },
    {
      "icon":"https://i.ibb.co/vc0gJ5L/cornerstone.png",
      "name":"Cornerstone",
    },
    {
      "icon":"https://cdn.zonebourse.com/static/instruments-logo-57307",
      "name":"Virtusa",
    },
    {
      "icon":"https://seeklogo.com/images/C/couchbase-logo-B45A39E17D-seeklogo.com.png?v=637908922850000000",
      "name":"Couchbase",
    },
    {
      "icon":"https://asset.brandfetch.io/idKqBXb52x/id28A5Zdaq.png",
      "name":"Accolite Digital",
    },
    {
      "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/768px-Reliance_Jio_Logo.svg.png",
      "name":"JIO",
    },
    {
      "icon":"https://avatars.githubusercontent.com/u/13002186?s=200&v=4",
      "name":"Springer Nature",
    },
    {
      "icon":"https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
      "name":"TCS",
    },
  ]
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  function searchItem(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const navigate = useNavigate();

  const handleClick = (data)=>{
    navigate("/students",{
      state:{
        company_selected:{data},
      }
    })
  }
  return (
    <div className="student_div">
      <Sidebar param={"companies"} />
      <div className="student_div_center">
        <div className="dashboard_top student_searchbar">
          <div className="search_bar_div">
            <input
              className="search_bar"
              type="text"
              placeholder="Seach Companies, Internships, Hackathons, or Students..."
              onChange={(e) => setQ(e.target.value)} value={q}
            />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
        </div>
        <div className="dashboard_bottom">
          <div className="card-container1">
          <h1 className="companies_title font-bold text-3xl">List of companies that visit our campus</h1>
            <div className="cards1">
              {searchItem(companiesList).length>0?searchItem(companiesList).map((item, index) => {
                return (
                  <div key={index} className="card1" onClick={(e)=>{handleClick(item.name)}}>
                    <div className="company_logo_div">
                      <img src={item.icon} alt="pic" className="company_logo" />
                    </div>
                      <p className="company_logo_name">{item.name}</p>
                  </div>
                )
              })
              :
              <div className='center_div'>
                <h3 className='no_Records no_records_company text-2xl'>No Records Found!</h3>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
