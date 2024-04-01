import Home from './Pages/Home';
import Forms from './Pages/Forms';
import Main from './Pages/Main';
import './App.css';
import { Routes, Route, Form } from 'react-router-dom'
import Student from './components/Student';
import Dashboard from './components/Dashboard';
import Company from './components/Company';
import Internship from './components/Internship';
import Hackathon from './components/Hackathon';
import Profile from './components/Profile';
import Login from './components/Login';
import axios from 'axios';
import { Analytics } from "@vercel/analytics/react";
import Demo from './components/Demo';

import { get, ref, set, push, getDatabase } from 'firebase/database';
import { useState, useEffect } from 'react';
import { database,auth } from '../src/firebaseConfig.js';
import Admin from './components/Admin.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';

function App() {
  // const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=tXsxy2-hvwS31b9L92CSnDeGZ3CQNEO1_cFYVGNdKtG1HykzKeta_lLa9mHb-85_JxKtFebIpJoA88k0vdcRRVxmI6kAp73Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDogGNI0BST8X8uIhrZnF83Ik5WQDsaGUaum2emq-uGmqccBjBlNb7s21kAJBYLaTnc6Qy88gk9KnUhosPf3J4uecRGUEjL7GQ&lib=Mu7cgZbbJR3Jsd9m20phPH86idZU4jP8o';
  const URL1 = "https://script.google.com/macros/s/AKfycbyQQE80wVyNKq8OMRigxzicAAVHrTUsCF0jXt4NOoPItsCmR9V9KPF5M0v_mxa1qQzd/exec";

  const [studentsData, setStudents] = useState([]);
  const [internshipData, setInternshipData] = useState([]);

  //internship
  const getInternshipData = async () => {
    const response = await axios.get(URL1);
    setInternshipData(response.data.data);
  };

  let authUser = localStorage.getItem('user');

  const AddData = async ()=>{
    const dataRef = push(ref(database,"Analytics"));
    set(dataRef,{
      total_students:100,
      total_companies:50,
      placd_students:10,
    }).then(()=>{
      console.log("data saved");
    }).catch((err)=>{
      console.log(err.message);
    })
  }

  const fetchData = async () => {
    const studentsRef = ref(database, 'Students');
    get(studentsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const studentsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id, ...data,
        }));
        setStudents(studentsArray);
      }
      else {
        console.log("No Data Available!");
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getInternshipData();
    fetchData();
  }, []);


   //Hackathon
   const hackathon_url = 'https://script.google.com/macros/s/AKfycbwl5PJp8hDfarVc5s0hHU0Lws42aAEPtam2oedJZQX4b-fZOM7Oq0gSzzSUFpqXIMnv/exec';
   const [hackathons, setHackathons] = useState([]);
   const [loading, setLoading] = useState(true);
 
   async function fetchHackathonData() {
     setLoading(true);
     let response = await fetch(hackathon_url);
     let data = await response.json();
     setHackathons(data.data);
     setLoading(false);
   }
 
   useEffect(() => {
     fetchHackathonData();
   }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard data={studentsData} />} />
        <Route path='/students' element={<Student data={studentsData} />} />
        <Route path='/companies' element={<Company data={studentsData} />} />
        <Route path="/hackathons" element={<Hackathon hackathons = {hackathons} loading = {loading} setLoading = {setLoading} />} />
        <Route path='/resetpassword' element={<ForgotPassword />} />
        <Route path='/internships' element={<Internship internshipData={internshipData} />} />
        <Route path='/students/:ID' element={<Profile data={studentsData} />} />
        <Route path='*' element={<Home />} />

        {authUser?
        <Route path='/admin' element={<Admin />} />
        :
        <Route path='/login' element={<Login/>} />
        }
      </Routes>
      <Analytics />
    </>
  );
}

export default App;