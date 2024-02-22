import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Assets/dyp.png';
import user from '../Assets/dashboard1.png';
import { useNavigate } from "react-router-dom";
import compete from '../Assets/hot.png';

const Navbar = () => {
    const navigate = useNavigate();
    const handleRedirectDashboard = ()=>{
        navigate('/');
    }
    const handleRedirectLogin = ()=>{
        navigate('/internships');
    }
    return (
        <div className="nav">
            <div className="nav_container">
                {/* <img className='navbar_logo' src={logo} /> */}
                <p className='dyp_name'>Placement Portal</p>
                <p className='dyp_name1' onClick={handleRedirectLogin}><img src={compete} className='compete_icon'/> Hackathons</p>
                {/* <img className='navbar_user' onClick={handleRedirectLogin} src={user} /> */}
            </div>
        </div>
    )
}

export default Navbar