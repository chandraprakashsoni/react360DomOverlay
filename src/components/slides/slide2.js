import React, { Component } from "react";
// import Fade from "react-reveal/Fade";
import downArrow from "../../assets/svgIcon/down-arrow.svg";



class Slide2 extends Component{
    render(){
        return(
            <div>
            <div className="centreText">
            <p>React-360 project - Slide 2</p>
             </div> 
             <div className="next-button-main">
            <a href="#sectionThree">
            <div className="next-button">
                <img className="next-button-img" src="../../../static_assets/down-arrow.svg" alt="Next" />
            </div>
            </a>
            </div>
            </div>

        );
    }
};

export default Slide2;