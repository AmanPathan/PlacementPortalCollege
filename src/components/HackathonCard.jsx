import React from "react";
import "../Styles/HackathonCard.css";
import { useState, useEffect } from "react";

const hackathon_url = 'https://script.google.com/macros/s/AKfycbwl5PJp8hDfarVc5s0hHU0Lws42aAEPtam2oedJZQX4b-fZOM7Oq0gSzzSUFpqXIMnv/exec';

const HackathonCard = (props) =>{

let hackathons = props.hackathons;

return hackathons.map((temp) => (
  <div className="card card2">
  <a href={temp.link} target="_blank">
    <h6 className="hackathon_title">{temp.title}</h6>
    <p className="para_description">{temp.description}</p>
    <p className="para_registration"> <span className="font-bold hackathon_date">Deadline :</span> {temp.deadline}</p>
    <p className="para_registration"> <span className="mode font-bold">Mode :</span> {temp.mode}</p>
    <button className="register_btn">
      <a href={temp.link}>Register Now</a>
    </button>
  </a>
  </div>
));
}

export default HackathonCard;