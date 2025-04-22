import './logins.css'
import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



export default function Login() {
  const username = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate();


 function handelclick(){
        const params = {
          'username' : username.current.value,
          'password' : password.current.value
        }
        axios.post('https://tarmeezacademy.com/api/v1/login',params)
        .then((res)=>{
           console.log(res)
           setTimeout(()=>{
             navigate('/home')
           },1000)
        })
            
  }
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Welcome to We Rent</h2>
        <div className="tabs">
          <button className={`tab active`} >Sign in</button>
          <Link to="/register"><button className={`tab `} >New account</button></Link>
        </div>
      </div>

      <form className="form">
        <label>Email</label>
        <input type="text" ref={username}  placeholder="Entre email" />

        <label>Password</label>
        <input type="password"  ref={password}  placeholder="Entre password" />

        <div  className="submit-btn" onClick={handelclick}>sign in</div>
        
        </form>

        <div className="dividerlogin" />
        <p className="connect-label">Or connect with:</p>

        <div className="google-btn">
          <div className='circle'><FontAwesomeIcon icon={faGoogle}  style={{color: "#ff0000"}} /></div>
          <span>Continue with Google</span>
        </div>
      
    </div>
  );
}
