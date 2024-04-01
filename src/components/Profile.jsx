import React, { useEffect, useState } from "react";
import "../Styles/Profile.css";
import profile_img from "../Assets/avatar.jpg";
import leetcode from "../Assets/leetcode.png";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import gmail from "../Assets/gmail1.png";
import achievement from "../Assets/achievement.png";
import certificate from "../Assets/certificate.png";
import { useNavigate } from "react-router-dom";
import "../Styles/InternshipLoader.css";
import arrow from '../Assets/arrow1.png';
import { useParams } from "react-router-dom";
import axios from "axios";
import InternshipLoader from "./InternshipLoader";

const Profile = ({ data }) => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const filteredData = data.filter((item) => {
    return item.UID === ID;
  });
  let UID,
    Email1,
    Name,
    Email2,
    Linkedin,
    Year,
    Company,
    Jobprofile,
    Package,
    Skills,
    InternshipName,
    InternshipRole,
    InternshipDuration,
    Leetcode,
    Github,
    CertificateName,
    CertificateProvider,
    CertificateYear,
    Rounds,
    Duration,
    Difficulty,
    Fundamental,
    Experience,
    Coding,
    Topics,
    Advice,
    Mistakes,
    ProfileLink;

  if (filteredData.length > 0) {
    ({
      UID,
      Email1,
      Name,
      Email2,
      Linkedin,
      Year,
      Company,
      Jobprofile,
      Package,
      Skills,
      InternshipName,
      InternshipRole,
      InternshipDuration,
      Leetcode,
      Github,
      CertificateName,
      CertificateProvider,
      CertificateYear,
      Rounds,
      Duration,
      Difficulty,
      Fundamental,
      Experience,
      Coding,
      Topics,
      Advice,
      Mistakes,
      ProfileLink,
    } = filteredData[0]);
    Skills = Skills.split(",");
  }

  const [isAbout, setIsAbout] = useState(true);
  const [isExperience, setIsExperience] = useState(false);
  const [isInterview, setIsInterview] = useState(false);
  const [isAdvice, setIsAdvice] = useState(false);
  const [isActive, setIsActive] = useState("1");

  const handleClickAbout = () => {
    setIsAbout(true);
    setIsAdvice(false);
    setIsExperience(false);
    setIsInterview(false);
    setIsActive("1");
    console.log("1");
  };
  const handleClickExperience = () => {
    setIsAbout(false);
    setIsAdvice(false);
    setIsExperience(true);
    setIsInterview(false);
    setIsActive("2");
  };
  const handleClickInterview = () => {
    setIsAbout(false);
    setIsAdvice(false);
    setIsExperience(false);
    setIsInterview(true);
    setIsActive("3");
  };
  const handleClickAdvice = () => {
    setIsAbout(false);
    setIsAdvice(true);
    setIsExperience(false);
    setIsInterview(false);
    setIsActive("4");
  };
  console.log(InternshipName);
  return (
    <>
      {filteredData.length > 0 ? (
        <div className="profile_div">
          <div className="profile_menu_div">
            <div className="profile_menu">
              <div className="return_student"
                  onClick={() => {
                    navigate("/students");
                  }}>
                <img src={arrow} alt="" />
              </div>
              <div className="student_img_div">
                <img src={`https://drive.google.com/thumbnail?id=${ProfileLink.slice(33)}`}
                  alt=""
                  className="profile_image"
                />
              </div>
              <div className="profile_intro">
                <div className="helper_menu">
                  <p className="profile_name_student">{Name}</p>
                  <p className="profile_branch">B.E - IT</p>
                  <p className="profile_batch">
                    {Number(Year) - 4} - {Year} Batch
                  </p>
                </div>
                <ul className="helper_menu_ul">
                  <li
                    onClick={() => handleClickAbout()}
                    className={
                      isActive === "1"
                        ? "helper_menu_li helper_menu_li_active"
                        : "helper_menu_li"
                    }
                  >
                    About
                  </li>
                  <li
                    onClick={() => handleClickExperience()}
                    className={
                      isActive === "2"
                        ? "helper_menu_li helper_menu_li_active"
                        : "helper_menu_li"
                    }
                  >
                    Experience
                  </li>
                  <li
                    onClick={() => handleClickInterview()}
                    className={
                      isActive === "3"
                        ? "helper_menu_li helper_menu_li_active"
                        : "helper_menu_li"
                    }
                  >
                    Interview Details
                  </li>
                  <li
                    onClick={() => handleClickAdvice()}
                    className={
                      isActive === "4"
                        ? "helper_menu_li helper_menu_li_active"
                        : "helper_menu_li"
                    }
                  >
                    Advice
                  </li>
                </ul>
              </div>
              <div className="social_links_div">
                <a
                  href={Linkedin.length > 5 ? Linkedin : "/students"}
                  rel="noreferrer"
                  target="_blank"
                  className="social_link"
                >
                  <img src={linkedin} alt="" className="social_icon" />
                </a>
                <a
                  href={Leetcode.length > 5 ? Leetcode : "/students"}
                  rel="noreferrer"
                  target="_blank"
                  className="social_link"
                >
                  <img src={leetcode} alt="" className="social_icon" />
                </a>
                <a
                  href={Github.length > 5 ? Github : "/students"}
                  rel="noreferrer"
                  target="_blank"
                  className="social_link"
                >
                  <img src={github} alt="" className="social_icon" />
                </a>
                <a
                  href="https://mail.google.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="social_link"
                >
                  <img src={gmail} alt="" className="social_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile_div_center">
            <div className="profile_content">
              {isAbout ? (
                <div className="about">
                  <h2 className="about_title">About</h2>
                  <div className="about_skills">
                    <div className="about_div_title">
                      Company : <p className="profile_job">{Company}</p>
                    </div>
                  </div>
                  <div className="about_skills">
                    <div className="about_div_title">
                      Job Description :{" "}
                      <p className="profile_job">{Jobprofile}</p>
                    </div>
                  </div>
                  <div className="about_skills">
                    <div className="about_div_title">
                      Package : <p className="profile_job">{Package} LPA</p>
                    </div>
                  </div>
                  <div className="about_skills">
                    <div className="about_div_title">Skills</div>
                    <div className="skill_div">
                      {Skills.map((skill, ind) => {
                        return (
                          <div className="skill_items" key={ind}>
                            {skill}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="about_certifications">
                    <div className="about_div_title">Certifications</div>
                    <div className="internships_div1">
                      <div className="certification_card">
                        <div className="certification_text">
                          Certification Name :{" "}
                          <p className="internship_name1"> {CertificateName}</p>
                        </div>
                        <div className="certification_text">
                          Certification Provider :{" "}
                          <p className="internship_company1">
                            {" "}
                            {CertificateProvider}
                          </p>
                        </div>
                        <div className="certification_text">
                          Issued In :{" "}
                          <p className="internship_name1"> {CertificateYear}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {isExperience ? (
                <div className="about_skills">
                  <div className="about_title experience_title">
                    Internships
                  </div>
                  {/* <div className="internships_div internships_div1">
                                        <div className="experience_card1">
                                            <div className="company_img_div">
                                                <img src={achievement} alt="" className="company_img" />
                                            </div>
                                            <div className='experience_div_right'>
                                                <p className="internship_name">{InternshipName}</p>
                                                <p className="internship_company">{InternshipRole}</p>
                                                <p className="job_time">Stipend : {InternshipStipend} ₹</p>
                                                <p className="internship_duration">Duration : {InternshipDuration} Months</p>
                                                <p className="internship_location">Location: Pune</p>
                                            </div>
                                        </div>
                                    </div> */}
                  <div className="internships_div1">
                    <div className="certification_card">
                      <div className="certification_text">
                        Internship Name :{" "}
                        <p className="internship_name1"> {InternshipName}</p>
                      </div>
                      <div className="certification_text">
                        Company :
                        <p className="internship_company1"> {InternshipRole}</p>
                      </div>
                      <div className="certification_text">
                        Duration :{" "}
                        <p className="internship_name1">
                          {" "}
                          {InternshipDuration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {isInterview ? (
                <div className="interview">
                  <div className="about_title interview_title">
                    Interview Experience
                  </div>

                  <div className="interview_center">
                    <div className="interview_section">
                      <p className="interview_format">Interview Format</p>
                      <p className="interview_format_details">
                        <span className="sub_heading">Rounds : </span>
                        {Rounds}
                      </p>
                      <p className="interview_format_details">
                        <span className="sub_heading">Duration : </span>{" "}
                        {Duration} Hours
                      </p>
                      <p className="interview_format_details">
                        <span className="sub_heading">
                          Difficulty of Technical Questions :{" "}
                        </span>{" "}
                        {Difficulty}{" "}
                      </p>
                      <p className="interview_format_details">
                        <span className="sub_heading">
                          CS Fundamentals Asked :{" "}
                        </span>{" "}
                        {Fundamental}
                      </p>
                    </div>
                    <div className="interview_section">
                      <p className="interview_format">Experience</p>
                      <p className="interview_format_details text-justify">{Experience}</p>
                    </div>
                    <div className="interview_section">
                      <p className="interview_format">Coding Round</p>
                      <p className="interview_format_details">
                        <span className="sub_heading">Questions Asked : </span>
                        {Coding}
                      </p>
                      <p className="interview_format_details">
                        <span className="sub_heading">
                          Topics of Coding Questions :{" "}
                        </span>{" "}
                        {Topics}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {isAdvice ? (
                <div className="interview">
                  <div className="about_title">Bonus Information</div>
                  <div className="interview_center">
                    <div className="interview_section bonus_section">
                      <p className="interview_format">Advice for Juniors</p>
                      <p className="interview_format_details text-justify">{Advice}</p>
                    </div>
                    <div className="interview_section bonus_section">
                      <p className="interview_format">
                        Mistakes I could have Avoided
                      </p>
                      <p className="interview_format_details text-justify">{Mistakes}</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loading_div">
          <InternshipLoader />
        </div>
      )}
    </>
  );
};

export default Profile;
