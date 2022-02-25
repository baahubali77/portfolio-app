import './topbar.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaCross } from 'react-icons/fa'
import {CgClose} from 'react-icons'

const Topbar = ({barMenu , setBarMenu}) => {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left-container">
          <div className="logo">
            <a href="#contact">BAHUBAL JAIN</a>
          </div>
          <button className="hamburger" id="hamburger" onClick={()=>{setBarMenu(true)}}>
           <FaBars/>
          </button>
        {/* <button className="hamburger active" id="hamburger">
           <FaCross/>
          </button> */}
        </div>
            
       
        <div className="middle-container">
          <ul className="list-container">
            <li className="list-item">
              <a href="#intro">INTRO</a>
            </li>
            <li className="list-item">
              <a href="#portfolio">PORTFOLIO</a>
              </li>
            <li className="list-item">
              <a href="#testimonial"> TESTIMONIAL</a>
             </li>
            <li className="list-item">
              <a href="#work">WORK</a>
              </li>
            <li className="list-item">
              <a href="#contact">CONTACT</a>
              </li>
          </ul>
        </div>
        <div className="right-container">
          <ul className="social-list">
            <li className="icon">
              <a href="#"><FaFacebook/></a>
              
            </li>
            <li className="icon">
              <a href="#"><FaInstagram/></a>
              
            </li>
            <li className="icon">
              <a href="#"><FaTwitter/></a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar 
