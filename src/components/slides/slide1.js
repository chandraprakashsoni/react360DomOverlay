import React, { Component } from "react";
import ScrollReveal from 'scrollreveal';


// import Fade from "react-reveal/Fade";
// import posed from 'react-pose';
// import RCTG from 'react-addons-css-transition-group';

class Slide1 extends Component{
    componentDidMount(){  
        this.scroll();
    }
    scroll = () => {
        var slideUp = {
            distance: '130%',
            origin: 'bottom',
            opacity: null
        };
        console.log("Called");
        ScrollReveal().reveal('.test', slideUp);
    }
    render(){
        
        return(
            <div>
            <div className="test" onScroll={this.scroll.bind(this)}>
                <p>It's Scapic's React-360 project - Slide1</p>
             </div> 
             <div>
             <p className="text-animated-one">Hello welcome to scapic lets together change the world</p>
             <p className="text-animated-two">Second Text Scapic</p>                 
            </div>
            <div className="next-button-main">
            <a href="#sectionTwo" className="slide1-next">
                <div className="next-button">
                    <img className="next-button-img" src="../../../static_assets/down-arrow.svg" alt="Next" />
                </div> 
            </a>
            </div>  
            </div>
        );
    }
};

export default Slide1;