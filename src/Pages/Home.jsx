import React from 'react';
import '../Styles/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import logo1 from '../Assets/juspay.png';
import logo2 from '../Assets/virtusa.png';
import logo3 from '../Assets/accenture.png';
import logo4 from '../Assets/capgemini.png';
import logo5 from '../Assets/emerson.png';
import logo6 from '../Assets/godrej.png';
import logo7 from '../Assets/mahindra.png';
import logo8 from '../Assets/ptc.png';
import logo9 from '../Assets/tcs.png';
import logo10 from '../Assets/veritas.png';
import logo11 from '../Assets/ubisoft.png';
import logo12 from '../Assets/dassult.png';
import logo_dots from '../Assets/div.framer-1b5c06m.png';
import rocket from '../Assets/shuttle.png';
import Navbar from '../components/Navbar';
import BarGraph from '../components/BarGraph';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

const Home = () => {

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

  const navigate = useNavigate();
  const handleRedirectDashboard = () => {
    navigate('/login');
  }
  return (
    <>
      <div className="home_container">
        <Navbar />
        <div className="home_container_center">
          <div className="college_name">
            <h1 data-aos="zoom-in"><a href='https://www.dypcoeakurdi.ac.in/' target='_blank' className='collee_link'  >D Y Patil College of Engineering, Akurdi, Pune</a></h1>
            <h2 className='welcome_text' data-aos="zoom-in">Your Gateway to Career Success!</h2>
          </div>
          <button className='nav_btn_home' onClick={handleRedirectDashboard}>Get Started <img className='rocket' src={rocket} /> </button>
          {/* <div className="home_div" data-aos="fade-in">
            <p className="welcome_text">Unlocking Your Professional Journey Starts Here</p>
            <p className='about_text'>Are you ready to take the next big step in your career? Look no further! This is your comprehensive college placement support portal designed to empower you with the tools, resources, and guidance needed to navigate the exciting world of job placement.</p>
          </div> */}

        </div>
      </div>
      <div className='home_container_center1'>
        <div className="home_center1">
          <h2 className='recruiters_text' data-aos="slide-up" data-aos-duration="600"> Our Major Recruiters</h2>
          <Marquee gradient gradientColor='#fff' gradientWidth={100} className='marquee' pauseOnHover>
            <div className='image_wrapper'><img src={logo1} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo2} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo3} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo4} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo5} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo6} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo7} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo8} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo9} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo10} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo11} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' />

            <div className='image_wrapper'><img src={logo12} className='slider_img' /></div>
          </Marquee>
        </div>
      </div>
      <div className='placement_text'>
        <h1 className='h1_text' data-aos="slide-up" data-aos-duration="600">Placement Statistics</h1>
      </div>
      <div className='graph_container'>
        <BarGraph />
      </div>
      <Footer/>
    </>

  )
}

export default Home