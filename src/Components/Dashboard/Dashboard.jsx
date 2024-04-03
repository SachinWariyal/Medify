import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Dashboard.css";
import Button from '@mui/material/Button';
import img from "../../Assets/doctor.webp"
import Search from '../Search/Search';
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <p className='head-quote'>The health and well being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
        <Navbar/>
        <div className="Hero-section">
          <div className="left-side">
            <p className='first-line'>Skip the travel! Find Online</p><br />
            <span className='Medical-text'>Medical</span><span className='Centers-text'>Centers</span>
            <p className='last-line'>Connect instantly with a 24x7 specialist or choose to <br /> visit a particular doctor</p>
            <Button className='hero-button' variant="contained">Find Ceners</Button>
          </div>
          <div className="right-side">
            <img src={img} alt="" />
          </div>
        </div>
        <Search/>
    </div>
  )
}

export default Dashboard