import React from "react";
import "../Styles/HackathonCard.css";

const hackathons_list = [
  {
    title: " KSP Datathon 2024",
    description:
      "Just a few steps away from shaping a crime-free society at the Karnataka State Police Datathon 2024 – a stellar collaboration with Hack2skill! Unleash your coding brilliance, tackle real-world challenges, and join the coding revolution to build a safer, smarter future.",
    registration: "Sun Mar 03 2024",
    link: "https://hack2skill.com/hack/kspdatathon2024?utm_source=homepage&utm_medium=promotional",
  },
  {
    title: "Harvesting Hackathon 2024 ",
    description:
      "The Harvesting Innovations Hackathon is designed to find new ideas and technologies to help farmers in rural India deal with climate change.",
    registration: "Wed Mar 06 2024",
    link: "https://hack2skill.com/hack/hih2024?utm_source=h2shomepage&utm_medium=h2shomepage",
  },
  {
    title: "GenAI Hackathon | APAC Edition",
    description:
      "Imagine unleashing the combined power of Google Cloud's GenAI tools and your own ingenuity! The GenAI Hackathon APAC Edition is your chance to revolutionise AI solutions for your region.",
    registration: "Fri Mar 08 2024",
    link: "https://hack2skill.com/genai_hackathon_apac_edition?utm_medium=h2s_listing&utm_source=h2s_homepage",
  },
  {
    title: "Data Engineering Hackathon 2024",
    description:
      "It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology. It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology.",
    registration: "Mon Mar 11 2024",
    link: "https://hack2skill.com/hack/informatica-deh-2024?utm_source=h2shomepage&utm_medium=h2shomepage",
  }, 
  {
    title: "Scale +91 Hackathon | FFI 2024",
    description:
      "Embark on a transformative journey with us at Scale +91, an exhilarating hackathon presented by Constellar under the umbrella of FinTech Festival India 2024, and powered by Hack2skill as the Innovation Partner",
    registration: "Sun Feb 04 2024",
    link: "https://hack2skill.com/hack/scale91-hack-ffi2024?utm_source=homepage&utm_medium=promotional",
  },
  {
    title: "Data Engineering Hackathon 2024",
    description:
      "It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology. It is your platform to dive into the world of innovation, problem-solving, and cutting-edge technology.",
    registration: "Mon Mar 11 2024",
    link: "https://hack2skill.com/hack/informatica-deh-2024?utm_source=h2shomepage&utm_medium=h2shomepage",
  }, 
  {
    title: "Scale +91 Hackathon | FFI 2024",
    description:
      "Embark on a transformative journey with us at Scale +91, an exhilarating hackathon presented by Constellar under the umbrella of FinTech Festival India 2024, and powered by Hack2skill as the Innovation Partner",
    registration: "Sun Feb 04 2024",
    link: "https://hack2skill.com/hack/scale91-hack-ffi2024?utm_source=homepage&utm_medium=promotional",
  }, 
];

const HackathonCard = () => {
  return hackathons_list.map((temp) => (
    <div className="card card2">
      <h4>{temp.title}</h4>
      <p className="para_description">{temp.description}</p>
      <p className="para_registration"> <span className="font-bold">Deadline :</span> {temp.registration}</p>
      <button className="register_btn">
        <a href={temp.link}>Register Now</a>
      </button>
    </div>
  ));
};

export default HackathonCard;
