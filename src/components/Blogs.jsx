import BlogImg from "../assets/div.st4-blog-single.svg";
import { Link } from "react-router-dom";
import "./styles2.css";


export default function Blog() {
    return(
        <div className="Blog-wrapper">
            <div className="Blog-txt-wrapper">
                <p className="Blog-p">Blog & News</p>
                <h2 className="Blog-h2">Read Our Latest News</h2>
            </div>
            <div className="blog-img">
                <Link to="/blogs">
                    <img className="bl-img"src={BlogImg} alt="Blogs"/>
                </Link>
                <Link to="/blogs">
                    <img className="bl-img" src={BlogImg} alt="Blogs"/>
                </Link>
                <Link to="/blogs">
                    <img className="bl-img" src={BlogImg} alt="Blogs"/>
                </Link>                    
            </div>

        </div>
        

        
        )
}