import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Assets/dyp.png';
import user from '../Assets/user1.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleRedirectDashboard = ()=>{
        navigate('/');
    }
    const handleRedirectLogin = ()=>{
        navigate('/login');
    }
    return (
        <div className="nav">
            <div className="nav_container">
                {/* <img className='navbar_logo' src={logo} /> */}
                <p className='dyp_name'>Placement Portal</p>
                <img className='navbar_user' onClick={handleRedirectLogin} src={user} />
            </div>
        </div>
    )
}

export default Navbar