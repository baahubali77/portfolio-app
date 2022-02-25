import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const Intro = () => {
  const testRef = useRef();
  useEffect(() => {
    init(testRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1000,
      strings: ["DEVELOPER", "CONTENT CREATOR", "OR ADD HONGE ABHI"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left-container">
        <div className="image">
          <img src="assests/manImage.png" alt="" />
        </div>
      </div>
      <div className="right-container">
        <div className="text">
          <h2>Hi! There</h2>
          <h1>I'm Bahubal Jain</h1>
          <h3>
            Freelance <span ref={testRef}></span>
          </h3>
        </div>
        <div className="down">
          <a href="#portfolio" className="down">
            <FaAngleDoubleDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
