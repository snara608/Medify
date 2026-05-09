import ZeroImg from "../assets/Frame 1000011412.svg";
import OneImg from "../assets/Frame 1000011413.svg";
import SecondImg from "../assets/Frame 1000011414.svg";
import ThirdImg from "../assets/Frame 1000011415.svg";
import FourthImg from "../assets/Frame 1000011416.svg";
import FifthImg from "../assets/Frame 1000011417.svg";
import SixthImg from "../assets/Frame 1000011418.svg";
import SeventhImg from "../assets/Frame 1000011419.svg";

const categories = [
    { img: ZeroImg, name: "Dentistry" },
    { img: OneImg, name: "Primary Care" },
    { img: SecondImg, name: "Cardiology" },
    { img: ThirdImg, name: "MRI Resonance" },
    { img: FourthImg, name: "Blood Test" },
    { img: FifthImg, name: "Psychologist" },
    { img: SixthImg, name: "Laboratory" },
    { img: SeventhImg, name: "X-Ray" },
]


export default function Specialists(){
    return(
        <div className="Special-box">
            <h2 className="Special-txt">Find by Specialisation</h2>
            <div className="special-items">
                {categories.map((item, i) => (
                    <div key={i} className="special-card">
                        <img src={item.img} alt={item.name}/>
                    </div>
                ))}
                
            </div>
            <div className="btn-wrapper">
                <button className="special-btn">View All</button>
            </div>
            
        </div>
    )
}