import React, { useState } from 'react';

import Header from "./Components/Header";
<<<<<<< HEAD
import Sidebar from "./Components/Sidebar";

const App = props => {
  return (
    <div>
=======
import image1 from "./images/1.jpg";
import ImageBoard from "./Components/ImageBoard";


const App = props => {
  return (
    <div className="container">
>>>>>>> cb58c2e90e8d53f489ca3afc1815fe5aa9361748
      <Header />
      <Sidebar />
      <ImageBoard image={image1} />
    </div>
  );
};

export default App;
