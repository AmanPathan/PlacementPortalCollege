import React from 'react';
import '../Styles/Common.css';
import Sidebar from './Sidebar';
import HackathonCard from './HackathonCard';
import user from '../Assets/user_profile.png';
import search from '../Assets/search.png';
import '../Styles/Hackathon.css';



const Hackathon = () => {

  return (
    <div className='student_div'>
      <Sidebar param={'hackathons'} />
      <div className="student_div_center">
        <div className="dashboard_top student_searchbar">
          <div className="search_bar_div">
            <input className='search_bar' type='text' placeholder='Seach Companies, Internships, Hackathons, or Students...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>

        </div>
        <div className="dashboard_bottom">
          <div className='hackathon_title_up'>
            <h3 className='heading_ text-white font-extrabold'>Upcoming Hackathons...</h3>
          </div>
          <div className="hackthon_class card-container flex flex-col flex-wrap">
            <HackathonCard />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hackathon;