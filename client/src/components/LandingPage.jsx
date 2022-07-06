import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LandingPage.css'

function LandingPage() {
  return (
    <div className='cajaLanding'>
      <div className='containerLanding'>
        <div className='contenitdoContainer'>
          <h1 className='h1'>welcome to the Country Website</h1>
        </div>
        <div >
          <Link to='/home'>
          <button className="ov-btn-grow-skew-reverse">Ingresar</button>
          </Link>        
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
