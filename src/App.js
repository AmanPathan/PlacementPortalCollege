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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dypcoe' element={<Forms/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/students' element={<Student/>} />
        <Route path='/companies' element={<Company/>} />
        <Route path='/hackathons' element={<Hackathon/>} />
        <Route path='/internships' element={<Internship/>} />
        <Route path='/students/:ID' element={<Profile/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;