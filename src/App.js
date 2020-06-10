import React from 'react';
import inventory from './inventory.json'
import './App.css';
import Navbar from './components/Navbar'
import MainPage from './components/MainPage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Footer />

      HERE {inventory.person.age}

    </div>
  );
}

export default App;
