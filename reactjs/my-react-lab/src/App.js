import React from 'react';
import Greeting from './Component/Greeting.js';
import Header from './Component/Header.js';
import Content from './Component/Content.js';
import './App.css';
import Footer from './Component/Footer.js';
const App = () => {
  return (
    <div>
      <Greeting />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
