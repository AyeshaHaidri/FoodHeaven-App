import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.Logo}/>
                <p>Welcome to a food lover's paradise! Our restaurant is a haven for those who appreciate the art of fine dining.
                     With a menu crafted to satisfy every palate.</p>
                <div className='footer-social-icons'>
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-2121-2456-56</li>
                    <li>contactus@foodheaven.com</li>
                </ul>
                </div> 
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 foodheaven.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer