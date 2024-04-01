import React from 'react'
import '../Styles/Footer.css';
import logo from '../Assets/dypcoe.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import youtube from '../Assets/youtube.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import instagram from '../Assets/instagram.png';

const Footer = () => {

    AOS.init({

        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
    
    
    
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    
      });
      
    return (
        <div className="footer_div">
            <div className="footer_div_center">
                <div className="footer_left">
                    <img src={logo} className='footer_logo' data-aos="zoom-in" data-aos-duration="600"/>
                    <div className="footer_left_text" data-aos="zoom-in" data-aos-duration="600">
                        <p className='college_name_footer'>D Y Patil College of Engineering, Akurdi, Pune</p>
                        <p className="college_text_footer">Accredited by NAAC with 'A' Grade</p>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_right_text" data-aos="zoom-in" data-aos-duration="600">
                        <p className="footer_app_name" >Placement Portal</p>
                        <div className="social_links">
                            <a href="https://www.youtube.com/channel/UCl7EyZv0Rb3QKxgTjDQ3e-Q" target='_blank' className="footer_link"><img src={youtube} className='footer_social_icon'/></a>
                            <a href="https://www.facebook.com/dypcoeakurdipune" target='_blank' className="footer_link"><img src={facebook} className='footer_social_icon'/></a>
                            <a href="https://www.instagram.com/dypcollegeofengineering/" target='_blank' className="footer_link"><img src={instagram} className='footer_social_icon'/></a>
                            <a href="https://twitter.com/DYPCOE_AKURDI" target='_blank' className="footer_link1"><img src={twitter} className='footer_social_icon1'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;