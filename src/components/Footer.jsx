import React from 'react'
import '../Styles/Footer.css';
import logo from '../Assets/dyplogo.png';

import youtube from '../Assets/youtube.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import instagram from '../Assets/instagram.png';

const Footer = () => {
    return (
        <div className="footer_div">
            <div className="footer_div_center">
                <div className="footer_left">
                    <img src={logo} className='footer_logo' />
                    <div className="footer_left_text">
                        <p className='college_name_footer'>D Y Patil College of Engineering, Akurdi, Pune</p>
                        <p className="college_text_footer">Accredited by NAAC with 'A' Grade</p>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_right_text">
                        <p className="footer_app_name">Placement Portal</p>
                        <div className="social_links">
                            <a href="https://www.youtube.com/channel/UCl7EyZv0Rb3QKxgTjDQ3e-Q" target='_blank' className="footer_link"><img src={youtube} className='social_icon'/></a>
                            <a href="https://www.facebook.com/dypcoeakurdipune" target='_blank' className="footer_link"><img src={facebook} className='social_icon'/></a>
                            <a href="https://www.instagram.com/dypcollegeofengineering/" target='_blank' className="footer_link"><img src={instagram} className='social_icon'/></a>
                            <a href="https://twitter.com/DYPCOE_AKURDI" target='_blank' className="footer_link1"><img src={twitter} className='social_icon1'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;