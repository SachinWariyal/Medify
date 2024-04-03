import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="Medify-heading">
            <a className='main-heading' href="#">Medify</a>
        </div>
        <div className="Medify-links">
            <a className='nav-links' href="#">Find Doctors</a>
            <a className='nav-links' href="#">Hospitals</a>
            <a className='nav-links' href="#">Medicines</a>
            <a className='nav-links' href="#">Surgeries</a>
            <a className='nav-links' href="#">Software for Provider</a>
            <a className='nav-links' href="#">Facilities</a>
        </div>
        <button className='booking-button'>My Bookings</button>
    </div>
  )
}

export default Navbar