import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import {faGrip} from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div className='navBar'>
      <div className="navLeft">
        <div className="title">
          <p>LOVETODES </p>
        </div>
        {/* <div className="dashboard"> */}
          {/* <FontAwesomeIcon icon={faGrip} style={{color: "#999999",}} /> */}

          {/* <p>Dashboard</p> */}
        {/* </div> */}
      </div>
      <div className="navRight">
      <FontAwesomeIcon icon={faBellRegular}  />
      <div className="circle">
        <h4>J</h4>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar
