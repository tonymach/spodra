import React, { useState } from 'react';

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const App = props => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
