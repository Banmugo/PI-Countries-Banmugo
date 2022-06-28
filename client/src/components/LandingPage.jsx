import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
        <h1>PI Countries</h1>
       <Link to='/home'> 
       <button> Ingresar</button>
       </Link>
    </div>
  )
}

export default LandingPage;
