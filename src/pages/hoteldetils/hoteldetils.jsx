import React, { useEffect , useState} from 'react'
import './hoteldetils.css'
import Profileimg from '../../img/7ed396bd1a68cf27ad05ced376c8ba8b.jpeg'
import img1 from '../../img/a264d9400c9b7b0a6f1040c10c866ca2.jpeg'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal/modal'
import Loder from '../../components/loder/loder'

function Hoteldetils() {
   const [loading, setLoading] = useState(true);
   const [showModal, setShowModal] = useState(false);
  
     useEffect(()=>{
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
     },[])
  return (
    <>
    {loading ? <Loder/> : 
    <div className="property-container">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      
        <header >
          <div className="navbar-left">
              <div className='profile'>
              <img
                  className="avatar"
                  src={Profileimg}
                  alt="Profile"
              />
              <span className="profile-name">Profiel</span>
              </div>
              <Link to='/home'><button className="home-button">Home</button></Link>
          </div>
        </header>

        <div className="image-section">
          <img
            src={img1}
            alt="main"
            className="main-image"
          />
          <div className="side-images">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="" />
            <img src="https://images.unsplash.com/photo-1600585154340-7586dc3c1785" alt="" />
            <img src="https://images.unsplash.com/photo-1600585154294-f22cba4a3d4c" alt="" />
            <img src="https://images.unsplash.com/photo-1600585154417-36f9cf6b9f49" alt="" />
          </div>
        </div>

        <div className="info-section">
          <div className="details">
            <h2>Paris, France</h2>
            <p className="desc">
              10 min walk to blue lake10 min walk to blue lake10 min walk to blue lake10 min walk to
              blue lake10 min walk to blue lake10 min walk to blue lake
            </p>
            <div className="features">
              <span>6 Guests</span>
              <span>2 Bedrooms</span>
              <span>6 Beds</span>
              <span>4 Baths</span>
            </div>
            <div className="reviews">★ No reviews yet</div>
          </div>
          <div className="pricing">
            <div className="pricehotel">$50 <span>night</span></div>
            <button className="tour-btn" onClick={()=>setShowModal(true)}>Request a tour</button>
          </div>
        </div>
    </div>
     }
    </>
  )
}

export default Hoteldetils