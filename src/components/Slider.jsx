import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Styles/Hero.css';
import college_img1 from '../Assets/college.jpg';
import college_img2 from '../Assets/bg_college.jpg';

const Slider = () => {
    return (
        <>
            <Carousel autoPlay={true} swipeable={true} dynamicHeight={false} showThumbs={false} emulateTouch={true} infiniteLoop={true} transitionTime='2000' interval='3000' showArrows={false} showStatus={false}>
                <div className='slider_div'>
                    <img className='slider_img' src={college_img1} />
                </div>
                <div className='slider_div'>
                    <img className='slider_img' src={college_img2} />
                </div>
                <div className='slider_div'>
                    <img className='slider_img' src={college_img1} />
                </div>
            </Carousel>
        </>
    )
}
export default Slider;