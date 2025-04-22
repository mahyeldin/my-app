import './register.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function NewAccountForm() {

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Welcome to We Rent</h2>
        <div className="tabs">
          <Link to="/login"><button className={`tab `} >Sign in</button></Link>
          <button className={`tab active`} >New account</button>
        </div>
      </div>

      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Entre email" />

        <label>Password</label>
        <input type="password" placeholder="Entre password" />
        <ul className="password-hints">
          <li>At least 8 characters</li>
          <li>Mix of letters and numbers</li>
          <li>At least 1 special character</li>
          <li>At least 1 lowercase letter and 1 uppercase letter</li>
        </ul>

        <label>Professional type</label>
        <input type="text" placeholder="Professional type" />

        <div className="row">
          <div className="col">
            <label>First name</label>
            <input type="text" placeholder="Fist name" />
          </div>
          <div className="col">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>

        <label>Zip / postal</label>
        <input type="text" placeholder="Zip / postal" />

        <label>Phone number</label>
        <input type="text" placeholder="Phone number" />

        <div  className="submit-btn" >Register</div>

        <div className="dividerregister" />
        <p className="connect-label">Or connect with:</p>

        <div className="google-btn">
         <div className='circle'><FontAwesomeIcon icon={faGoogle}  style={{color: "#ff0000"}} /></div>
          <span>Continue with Google</span>
        </div>
      </form>
    </div>
  );
}
