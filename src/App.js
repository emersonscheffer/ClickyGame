import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Canvas from './components/Canvas';
import AppNav from './components/AppNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppNav />
      <Canvas />
      <Footer />
    </div>
  );
}

export default App;
