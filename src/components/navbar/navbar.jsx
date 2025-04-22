import React from 'react'
import './navbar.css' 
import Profileimg from '../../img/7ed396bd1a68cf27ad05ced376c8ba8b.jpeg'

function navbar() {
  return (
    <div className="navbar-com">
      <div className="navbar-com-left">
        <div className='profile'>
          <img
            className="avatar"
            src={Profileimg}
            alt="Profile"
          />
          <span className="profile-name">Profiel</span>
        </div>
        <button className="home-button">Home</button>
      </div>

      <div className="search-bar">
        <div className="search-item">
          <div className="search-title">Where</div>
          <div className="search-subtitle">Search destinations</div>
        </div>
        <div className="divider" />
        <div className="search-item">
          <div className="search-title">Check in</div>
          <div className="search-subtitle">Add dates</div>
        </div>
        <div className="divider" />
        <div className="search-item">
          <div className="search-title">Check out</div>
          <div className="search-subtitle">Add dates</div>
        </div>
        <div className="divider" />
        <div className="search-item">
          <div className="search-title">Who</div>
          <div className="search-subtitle">Add dates</div>
        </div>
        <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </button>

      </div>
    </div>
  )
}

export default navbar