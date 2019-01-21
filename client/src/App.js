import React, { useState } from 'react';
import Sidebar from './Components/Sidebar.js';

import Header from "./Components/Header";
import image1 from "./images/1.jpg";
import ImageBoard from "./Components/ImageBoard";


const App = props => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ImageBoard image={image1} />
    </div>
  );
};

export default App;
