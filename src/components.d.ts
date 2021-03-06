/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  Compass as WrCompass
} from './components/compass/compass';

declare global {
  interface HTMLWrCompassElement extends WrCompass, HTMLElement {
  }
  var HTMLWrCompassElement: {
    prototype: HTMLWrCompassElement;
    new (): HTMLWrCompassElement;
  };
  interface HTMLElementTagNameMap {
    "wr-compass": HTMLWrCompassElement;
  }
  interface ElementTagNameMap {
    "wr-compass": HTMLWrCompassElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wr-compass": JSXElements.WrCompassAttributes;
    }
  }
  namespace JSXElements {
    export interface WrCompassAttributes extends HTMLAttributes {
      
        bearing?: number,
        heading?: number,
        showValues?: boolean
    }
  }
}

