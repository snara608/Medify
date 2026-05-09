import { useState } from "react";
import Smiley from "../assets/div.elementor-widget-container.svg";
import Heart from "../assets/div.stylish-shape-icon.svg";
import Photo from "../assets/Image-21-1.png.svg";
import "./styles2.css";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Why choose our medical for your family?",
    answer: "We provide top-quality healthcare with trusted doctors."
  },
  {
    question: "Why we are different from others?",
    answer: "We focus on patient-first experience and fast service."
  },
  {
    question: "Trusted & experienced senior care & love",
    answer: "Our staff is highly trained and compassionate."
  },
  {
    question: "How to get appointment for emergency cases?",
    answer: "You can instantly book through our platform."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Faq-wrapper">
      
      {/* TEXT */}
      <div className="Faq-txt-wrapper">
        <p className="FaqP">Get Your Answer</p>
        <h2 className="FaqH2">Frequently Asked Questions</h2>
      </div>

      {/* MAIN SECTION */}
      <div className="faq-section">

        {/* LEFT IMAGE */}
        <div className="faq-left">
          <img src={Photo} alt="Doctor" className="Photo" />
            <Link to="/feedback">
                <img src={Smiley} alt="smiley" className="Smiley" />
            </Link>
         
          <img src={Heart} alt="heart" className="Heart" />
        </div>

        {/* RIGHT FAQ */}
        <div className="faq-right">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <p>{item.question}</p>
                <span className="plus">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}