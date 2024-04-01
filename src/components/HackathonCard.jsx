import React from "react";
import "../Styles/HackathonCard.css";

const hackathons_list = [
  {
    title: "KSP Datathon 2024",
    description:
      "Just a few steps away from shaping a crime-free society at the Karnataka State Police Datathon 2024. Unleash your coding brilliance, and join the coding revolution to build a safer future.",
    registration: "Sun Mar 03 2024",
    link: "https://hack2skill.com/hack/kspdatathon2024?utm_source=homepage&utm_medium=promotional",
    mode:"offline",
  },
  {
    title: "Harvesting Hackathon 2024 ",
    description:
      "The Harvesting Innovations 2024 Hackathon is designed to find new ideas and technologies to help farmers in rural India deal with climate change and related difficulties.",
    registration: "Wed Mar 06 2024",
    link: "https://hack2skill.com/hack/hih2024?utm_source=h2shomepage&utm_medium=h2shomepage",
    mode:"offline",
  },
  {
    title: "GenAI Hackathon APAC Edition",
    description:
      "Imagine unleashing the combined power of Google Cloud's GenAI tools and your own ingenuity! The GenAI Hackathon APAC Edition is your chance to revolutionise AI solutions for your region.",
    registration: "Fri Mar 08 2024",
    link: "https://hack2skill.com/genai_hackathon_apac_edition?utm_medium=h2s_listing&utm_source=h2s_homepage",
    mode:"offline",
  },
  {
    title: "Data Engineering Hackathon 2024",
    description:
      "It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology. It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology.",
    registration: "Mon Mar 11 2024",
    link: "https://hack2skill.com/hack/informatica-deh-2024?utm_source=h2shomepage&utm_medium=h2shomepage",
    mode:"offline",
  },
  {
    title: "Scale +91 Hackathon 2024",
    description:
      "Embark on a transformative journey with us at Scale +91, an exhilarating hackathon presented by Constellar under the umbrella of FinTech Festival India 2024, and powered by Hack2skill as the Innovation Partner",
    registration: "Sun Feb 04 2024",
    link: "https://hack2skill.com/hack/scale91-hack-ffi2024?utm_source=homepage&utm_medium=promotional",
    mode:"offline",
  },
  {
    title: "AlgoUtsav 2024",
    description:
    "Get ready to embark on an exhilarating coding adventure at AlgoUtsav 2024! This thrilling contest will challenge teams of 2-3 members each to showcase their programming prowess.This will be a ICPC style team coding contest.",
    registration: "Fri Mar 15 2024",
    link: "https://unstop.com/hackathons/algoutsav-2024-nit-rourkela-905708",
    mode:"online",
  },

];

const HackathonCard = () => {
  return hackathons_list.map((temp) => (
      <div className="card card2">
        <h4 className="hackathon_title text-xl font-bold">{temp.title}</h4>
        <p className="para_description">{temp.description}</p>
        <p className="para_registration"> <span className="font-bold hackathon_date">Deadline :</span> {temp.registration}</p>
        <p className="para_registration"> <span className="mode font-bold">Mode :</span> {temp.mode}</p>
        <button className="register_btn">
          <a href={temp.link}>Register Now</a>
        </button>
      </div>
  ));
};

export default HackathonCard;
