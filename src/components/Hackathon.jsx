import React, { useState, useEffect } from 'react';
import '../Styles/Common.css';
import Sidebar from './Sidebar';
import HackathonCard from './HackathonCard';
import user from '../Assets/user_profile.png';
import search from '../Assets/search.png';
import '../Styles/Hackathon.css';
import HackathonLoader from './HackathonLoader';

const Hackathon = ({hackathons,loading}) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title", "description", "deadline"]);

  function searchItem(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  // const [loading, setLoading] = useState(true);

  return (
    <div className='student_div'>
      <Sidebar param={'hackathons'} />
      <div className="student_div_center">
        <div className="dashboard_top student_searchbar">
          <div className="search_bar_div">
            <input className='search_bar' type='text' value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }} placeholder='Seach Companies, Internships, Hackathons, or Students...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>

        </div>
        <div className="dashboard_bottom hackthon_div">
          <div className='hackathon_title_up'>
            <h3 className='heading_ text-white font-extrabold text-3xl'>Upcoming Hackathons...</h3>
          </div>
          <div className="hackthon_class card-container flex flex-wrap">
            {loading || hackathons.length === 0 ?
              <HackathonLoader /> :
              searchItem(hackathons).length>0?searchItem(hackathons).map((item, i) => {
                return <HackathonCard hackathons={item} key={i} />;
              })
              :
              // <div className='center_div'>
                <h3 className='text-xl font-bold text-red-500'>No Records Found!</h3>
              // </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hackathon;