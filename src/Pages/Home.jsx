import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import '../Styles/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import logo1 from '../Assets/juspay.png';
import logo2 from '../Assets/virtusa.png';
import logo3 from '../Assets/accenture.png';
import logo4 from '../Assets/capgemini.png';
import logo5 from '../Assets/emerson.png';
// import logo6 from '../Assets/godrej.png';
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
import Slider from '../components/Slider';
import college_img from '../Assets/college.jpg';

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
    navigate('/dashboard');
  }
  return (
    <>
    {<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5164424016159245"
     crossorigin="anonymous"></script>}
      <div className="home_container">
        <Navbar />
        <div className="container_home_center">

          {/* <h2 className='placement_name'>Placement Portal</h2> */}
          {/* <Slider/> */}

          <div className="home_text_div">
            <h1><a href='https://www.dypcoeakurdi.ac.in/' target='_blank' className='college_name'  >D Y Patil College of Engineering, Akurdi, Pune</a></h1>
            <h2 className='dept_name'>Department of Information Technology</h2>
          </div>

          <div className='college_img_div'>
            <img src={college_img} className='college_div_img' />
          </div>

          {/* <button className='nav_btn_home' onClick={handleRedirectDashboard}  >Explore <img className='rocket' src={rocket} /> </button> */}
        </div>
      </div>
      <div className='home_container_center1'>
        <div className="home_center1">
          <h2 className='recruiters_text' data-aos="slide-up" data-aos-duration="600"> Our Major Recruiters</h2>
          <Marquee gradient gradientColor='#f3f4f5' gradientWidth={100} className='marquee' pauseOnHover>
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

            {/* <div className='image_wrapper'><img src={logo6} className='slider_img' /></div>
            <img src={logo_dots} className='slider_img1' /> */}

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
      <Footer />
    </>

  )
}

export default Home