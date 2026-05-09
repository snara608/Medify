// import FrameOne from "../assets/SeekPng 1.svg";
// import FrameTwo from "../assets/SeekPng 2.svg";
import AppleBtn from "../assets/apple_store.png.svg";
import GoogleBtn from "../assets/google_play.png.svg";
// import Arrow from "../assets/Vector.png";
// import Mask from "../assets/Mask group.svg";
import Background from "../assets/Group 1000011073.svg";
import { Link } from "react-router-dom";
import "./styles2.css";


export default function Contact(){
    return (
        <div className="Contact-wrapper">
            <div className="contact-right">
                <h2 className="contact-title">Download the
                    <br></br>
                <span> Medify</span> App</h2>
                <Link>
                    <p className="link-txt">Get the link to download the app here</p>
                </Link>
                
                <div className="phone-input">
                    <span className="country-code">+91</span> 
                    <input type="text" placeholder="Enter phone number" />
                    <button className="sms-btn">Send SMS</button>
                </div>
                
                {/* <img src={Arrow} alt="Arrow" className="arrow"/> */}
                <div className="store-buttons">
                    <Link to="/AppleStore">
                        <img src={AppleBtn} alt="AppleBtn"/>
                    </Link>
                    <Link to="PlayStore">
                        <img src={GoogleBtn} alt="GoogleBtn"/>
                    </Link>
                </div>                
            </div>


            <div className="Photo-wrapper">
                 {/* PHONE 1
        <div className="phone-group phone1-group">
            <img src={Mask} alt="" className="mask" />
            <img src={FrameOne} alt="" className="phone" />
        </div>

            {/* PHONE 2 */}
        {/* <div className="phone-group phone2-group">
            <img src={Mask} alt="" className="mask" />
    <img src={FrameTwo} alt="" className="phone" />
  </div> */} 
                { <img src={Background} alt="Background" className="Cimg-txt"/> }
            </div>
        </div>
    )
}