import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTask from './Components/ViewTask/ViewTask';
import Home from './Components/Home/FirstSection'
import CreateTask from './Components/CreateTask/CreateTask';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className='fixed-top'>
        <Header />
        <Navbar />
      </div>
      <div className='moargin-top-mobile-size'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewtask" element={<ViewTask />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;