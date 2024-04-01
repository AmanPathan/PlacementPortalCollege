import React, { useState } from 'react'
import '../Styles/Sidebar.css';
import hackathon from '../Assets/code.png';
import internship from '../Assets/internship.png';
import company from '../Assets/company1.png';
import dashboard from '../Assets/dashboard2.png';
import student from '../Assets/profile.png';
import logout from '../Assets/logout.png';
import home from '../Assets/home.png';
import logo from '../Assets/dyp_logo1.png';
import {useNavigate} from 'react-router-dom';

const Sidebar = ({param}) => {
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <div className="sidebar_name">
            {/* <p className='sidebar_college_name'>DYPCOE,  Akurdi</p> */}
            <p className='sidebar_college_name'  onClick={()=>{navigate('/dashboard')}}>
              <img src={logo} alt="" />
              {/* <span>D. Y. Patil College of Engineering, Akurdi</span> */}
              <span>DYPCOE, Akurdi</span>
            </p>
        </div>
        <div className="sidebar_menu">
            <ul className='sidebar_ul'>
                <li className={param === 'dashboard'?'active sidebar_li':'sidebar_li'} id='1' onClick={()=>{navigate('/dashboard');}}><img src={dashboard} className='icon_img'/>Dashboard</li>
                <li className={param === 'students'?'active sidebar_li':'sidebar_li'} id='2' onClick={()=>{navigate('/students');}}><img src={student} className='icon_img'/>Students</li>
                <li className={param === 'companies'?'active sidebar_li':'sidebar_li'} id='3' onClick={()=>{navigate('/companies');}}><img src={company} className='icon_img'/>Companies</li>
                <li className={param === 'hackathons'?'active sidebar_li':'sidebar_li'} id='4' onClick={()=>{navigate('/hackathons');}}><img src={hackathon} className='icon_img'/>Hackathons</li>
                <li className={param === 'internships'?'active sidebar_li':'sidebar_li'} id='5' onClick={()=>{navigate('/internships');}}><img src={internship} className='icon_img'/>Internships</li>
            </ul>
        </div>
        <div className='logout_div'>
          <button className='logout_btn' onClick={()=>{navigate('/')}}><img src={home} className='icon_img_home'/>Home</button>
        </div>
    </div>
  )
}

export default Sidebar;