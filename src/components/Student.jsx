import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Styles/Common.css';
import '../Styles/Student.css';
import Sidebar from '../components/Sidebar';
import user from '../Assets/user_profile.png';
import search from '../Assets/search.png';
import icon1 from '../Assets/avatar.jpg';
import dummy from '../Assets/dummy.jpg';
import InternshipLoader from './InternshipLoader';
import '../Styles/InternshipLoader.css';
import { useLocation } from 'react-router-dom'

const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=J4YbeO4oJvIIZuxRal7VD349eP0phxSaaTmrPTMu4mqIz3ZbYFx93F9YiXBuiaFBL2yYPiu5UcihxZh54imjzKiMZaA2b5zVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCm_1kVhFXvHREi5EbChZ8bP0owEZxE-0PS3iwwP25utDTAz1RiYZaqp_4rA5QWQaSbggJk4C1L2JL1Hb041VPOQ7kzyZdT-5Q&lib=Mu7cgZbbJR3Jsd9m20phPH86idZU4jP8o';


const Student = (props) => {
  // const [data, setData] = useState([]);
  // const [imageLoadError, setImageLoadError] = useState(true);

  // const fetchData = async () => {
  //   const res = await axios.get(URL);
  //   // setData(res.data.data);
  //   localStorage.setItem('data', JSON.stringify(res.data.data));
  // }

  // useEffect(() => {
  //   fetchData();
  //   const data_items = JSON.parse(localStorage.getItem('data'));
  //   if (data_items) {
  //     setData(data_items);
  //     // console.log(data_items);
  //   }
  // }, [])
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const [q, setQ] = useState("");
  
  useEffect(()=>{
    setQ(location.state?location.state.company_selected.data:"");
  },[])


  let user_data = [];

  const [searchParam] = useState(["Name", "Company", "Skills","Year"]);

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

  return (
    <div className='student_div'>
      <Sidebar param={'students'} />
      <div className="student_div_center">
        <div className="dashboard_top">
          <div className="search_bar_div">
            <input className='search_bar' onChange={(e) => setQ(e.target.value)} value={q} type='text' placeholder='Seach Companies, Students, or Skills ...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
          {/* <div className="profile_div">
            <img src={user} alt="pic" className="profile_img" />
            <p className="profile_name">Aman</p>
          </div> */}
        </div>
        <div className="dashboard_bottom_student">
          <div className='center_div'>

            {props.data.length > 0 ?
              <div className="cards">
                {searchItem(props.data).map((item, i) => {
                  // data.map((item, i) => {
                  const { UID, Name, Company, Jobprofile, Package, ProfileLink } = item;
                  const ID = UID;
                  const profileImg = ProfileLink.slice(33,);
                  // console.log(Name,profileImg);
                  return (
                    // <div className="card" key={i} onClick={()=>{navigate(`/students/${item.name}`)}}>
                    <a href={`/students/${ID}`} className="card" key={i}>
                      {profileImg ? 
                        <img src={`https://drive.google.com/thumbnail?id=${ProfileLink.slice(33,)}`}
                          className="card_img"  alt='Not Found'/>
                        :  <img src={dummy} alt="pic" className="card_img" />}
                      <div className='card-details'>
                        <p className="card_student_name">{Name}</p>
                        <p className="card_company_name">{Company}</p>
                        <p className="card_company_role"><span className='card_span'>Role:</span> {Jobprofile}</p>
                        <p className="card_student_skills"><span className='card_span'>Package:</span> {Package} LPA</p>
                      </div>
                    </a>
                  )
                })
                }
              </div>
              :
              <div className='loading_div'>
                <InternshipLoader/>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student