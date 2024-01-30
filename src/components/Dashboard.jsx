import React from 'react'
import '../Styles/Common.css';
import Sidebar from '../components/Sidebar';
import user from '../Assets/user_profile.png';
import search from '../Assets/search.png';

function Dashboard() {
  return (
    <div className='student_div'>
      <Sidebar param={'dashboard'} />
      <div className="student_div_center">
        {/* <div className="dashboard_top">
          <div className="search_bar_div">
            <input className='search_bar' type='text' placeholder='Seach Companies, Internships, Hackathons, or Students...' />
            <div className="search_icon_div">
              <img src={search} alt="pic" className="search_icon" />
            </div>
          </div>
        </div> */}
        <div className="dashboard_bottom">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

          {/* <div className="profile_div">
            <img src={user} alt="pic" className="profile_img" />
            <p className="profile_name">Aman</p>
          </div> */}