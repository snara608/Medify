import SearchBar from "./SearchBar";
import "./styles2.css";
import LabsImg from "../assets/card_service (1).svg";
import HosiptalsImg from "../assets/card_service (2).svg";
import MedicineImg from "../assets/card_service (3).svg";
import AmbulanceImg from "../assets/card_service (4).svg";
import DoctorsImg from "../assets/card_service.svg";
import "./styles2.css";
import { Link } from "react-router-dom";


const categories = [
    {name: "Doctors", icon: DoctorsImg},
    {name: "Labs", icon: LabsImg},
    {name: "Hospitals", icon: HosiptalsImg},
    {name: "Medical Store", icon: MedicineImg},
    {name: "Ambulance", icon: AmbulanceImg}
]
export default function SearchBox() {

    return(

<div className="search-container">
{/* 🔽 SEARCH + CATEGORY CARD */}
<SearchBar />

<h2 className="Search-txt">You may be looking for</h2>

{/* 🔥 FIXED HORIZONTAL CARDS */}
<div className="Items-list">
  {categories.map(
    (item, i) => (
      <div
        key={i}
        className={`category-card ${
          item.name === "Hospitals" ? "active" : ""
        }`}
      >
        <Link to="/">
        <img
        src={item.icon}
        alt={item.name}
        className="category-icon"
        />
        
        </Link>
        <p className="category-text">{item.name}</p>
      </div>
    )
  )}
</div>
</div>
    )
}

