import React, { Component } from "react";
// import Fade from "react-reveal/Fade";
import ABC from '../../../components/DomOverlayModule';

class Slide3 extends Component{
    constructor() {
    super();
    // this._closeOverlay = this.closeOverlay.bind(this);
    // this._overlayContainer = overlayContainer;
    this._toggleDisplay = this.toggleDisplay.bind(this);

  }
    
  toggleDisplay() {
    ABC.DomOverlayModule.closeOverlay();
  }
    render(){
        return(
              <div className="slide3">
              <button className="user-exp" onClick={this.props.onClose}> Enter User Experience
              </button>
              </div>
        );
    }
};

export default Slide3;