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
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=tXsxy2-hvwS31b9L92CSnDeGZ3CQNEO1_cFYVGNdKtG1HykzKeta_lLa9mHb-85_JxKtFebIpJoA88k0vdcRRVxmI6kAp73Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDogGNI0BST8X8uIhrZnF83Ik5WQDsaGUaum2emq-uGmqccBjBlNb7s21kAJBYLaTnc6Qy88gk9KnUhosPf3J4uecRGUEjL7GQ&lib=Mu7cgZbbJR3Jsd9m20phPH86idZU4jP8o';
  const URL1 = "https://script.google.com/macros/s/AKfycbyQQE80wVyNKq8OMRigxzicAAVHrTUsCF0jXt4NOoPItsCmR9V9KPF5M0v_mxa1qQzd/exec";
  
  const [studentsData, setData] = useState([]);
  const [internshipData, setInternshipData] = useState([]);
  
  const fetchData = async () => {
    const res = await axios.get(URL);
    localStorage.setItem('data', JSON.stringify(res.data.data));
  }

  const getData = async () => {
    const response = await axios.get(URL1);
    setInternshipData(response.data.data);
  };

  useEffect(() => {
    getData();
    
    fetchData();
    const data_items = JSON.parse(localStorage.getItem('data'));
    if (data_items) {
      setData(data_items);
    }

  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dypcoe' element={<Forms/>} />
        <Route path='/dashboard' element={<Dashboard data={studentsData}/>} />
        <Route path='/students' element={<Student data={studentsData}/>} />
        <Route path='/companies' element={<Company data={studentsData}/>} />
        <Route path='/hackathons' element={<Hackathon/>} />
        <Route path='/internships' element={<Internship internshipData={internshipData}/>} />
        <Route path='/students/:ID' element={<Profile data={studentsData}/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;