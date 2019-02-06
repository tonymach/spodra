/**
 * 
 * An additional virtual DOM element
 * 
 * @param no_params
 * @return createPortal(child, targetDOMElement);
 * @public
 */

import React, { Component } from "react";
import { createPortal } from "react-dom";

const rootEl = document.getElementById("portalRoot");

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount() {
    rootEl.appendChild(this.el);
  }

  componentWillUnmount() {
    rootEl.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, rootEl);
  }
}

export default Portal;
