import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Assets/dyp_logo1.png';
import user from '../Assets/dashboard.png';
import { useNavigate } from "react-router-dom";
import compete from '../Assets/hot.png';

const Navbar = () => {
    const navigate = useNavigate();
    const handleRedirectDashboard = ()=>{
        navigate('/dashboard');
    }
    const handleRedirectLogin = ()=>{
        navigate('/hackathons');
    }
    return (
        <div className="nav">
            <div className="nav_container">
                <img className='navbar_logo' src={logo} />
                {/* <p className='dyp_name'>Placement Portal</p> */}
                <div className='nav_div'>
                    <p className='dyp_name1' onClick={handleRedirectDashboard}><img className='navbar_user' src={user} />Dashboard</p>
                    <p className='dyp_name1' onClick={handleRedirectLogin}><img src={compete} className='compete_icon'/> Hackathons</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar