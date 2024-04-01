import React from "react";
import "../Styles/HackathonCard.css";

const hackathon_url = 'https://script.google.com/macros/s/AKfycbwl5PJp8hDfarVc5s0hHU0Lws42aAEPtam2oedJZQX4b-fZOM7Oq0gSzzSUFpqXIMnv/exec';

const HackathonCard = ({hackathons}) =>{
return (
  <>
  <div className="card card2">
  <a href={hackathons.link} target="_blank">
    <h6 className="hackathon_title text-xl font-bold">{hackathons.title}</h6>
    <p className="para_description">{hackathons.description}</p>
    <p className="para_registration"> <span className="font-bold hackathon_date">Deadline :</span> {hackathons.deadline}</p>
    <p className="para_registration"> <span className="mode font-bold">Mode :</span> {hackathons.mode}</p>
    {/* <button className="register_btn">
      <a href={hackathons.link}>Register Now</a>
    </button> */}
  </a>
  </div>
    </>
);
}

export default HackathonCard;