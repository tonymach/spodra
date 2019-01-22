/* Toggle component */
import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false); // Set the default state of toggler to false
  const toggle = _ => setOn(prevOn => !prevOn); // Handles the toggling

  return children({ on, toggle });
};

export default Toggle;
