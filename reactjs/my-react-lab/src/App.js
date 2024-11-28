// App.js

import React from 'react';
import './App.css';  // Import global styles
import Navbar from './Component/Navbar';
import Landingpage from './Component/Landingpage';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      {/* Render the second set of components */}
      <Navbar />
      <Landingpage />
      <Footer/>
    </div>
  );
};

export default App;
