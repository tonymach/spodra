import React, { Fragment } from 'react';

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import image1 from "./images/1.jpg";
import ImageBoard from "./Components/ImageBoard";

const App = props => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <ImageBoard image={image1} />
    </Fragment>
  );
};

export default App;
