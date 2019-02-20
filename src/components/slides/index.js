import React, { Component } from "react";
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';

// Used react-fullpage module to implement scrolling Have some features from fullpage.js
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";

class Slides extends Component {
  render() {
    let options = {
      sectionClassName: "section",
      anchors: ["sectionOne", "sectionTwo", "sectionThree"],
      navigation: true,
      verticalAlign: true,
      sectionPaddingTop: "0px",
      sectionPaddingBottom: "0px",
      arrowNavigation: true,
      fadingEffect: true
    };

    return (
      <div className="container-main">
        <Header>
          <h1>Scapic React-360</h1>
        </Header>
        <SectionsContainer {...options}>
          <Section className="slide1">
           <Slide1/>
            
          </Section>
          <Section className="slide2">
            <Slide2/>
          </Section>
          <Section className="slide3">
            <Slide3 onClose={this.props.onClose}/>
          </Section>
        </SectionsContainer>
        <Footer>
         
        </Footer>
      </div>
    );
  }
}

export default Slides;
