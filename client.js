// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import './process';
import {ReactInstance} from 'react-360-web';
import DomOverlayModule from './components/DomOverlayModule';

function init(bundle, parent, options = {}) {
  const domOverlayContainer = document.createElement('div');
  domOverlayContainer.id = 'dom-overlay';
  // Create an instance of the module, to be registered below.
  const domOverlayModule = new DomOverlayModule(domOverlayContainer);
 
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
    nativeModules: [domOverlayModule]

  });

  r360._parent.appendChild(domOverlayContainer);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('scapic_react_360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
