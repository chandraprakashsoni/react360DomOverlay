import React from 'react';
import ReactDOM from 'react-dom';
import { Module } from 'react-360-web';

import SlidesOverlay from '../src/components/slides/index';

// Example implementation of a dom overlay. This is useful on web and mobile,
// whenever a regular, 2D interaction makes more sense than dealing with a 360 scene.
// The key in this module is having a dom element (created in client.js) where our overlay will be rendered.
// What you render is up to you, and you could render as many different overlays as you want from a single module,
// or have multiple native modules, each taking care of a single overlay.
export default class DomOverlayModule extends Module {
  constructor(overlayContainer) {
    super('DomOverlayModule');

    this._closeOverlay = this.closeOverlay.bind(this);
    this._overlayContainer = overlayContainer;
  }

  // This method call opens up the overlay for display.
  openOverlay(props) {
    ReactDOM.render(
      <SlidesOverlay {...props} onClose={this._closeOverlay} />,
      this._overlayContainer
    );
  }

  closeOverlay() {
    ReactDOM.unmountComponentAtNode(this._overlayContainer);
  }
}