import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import add_task from '../../assets/add-tasks.avif'
import Home_SecondSection from '../HomeSection/SecondSection/SecondSection'
import Home_ThirdSecond from '../HomeSection/ThirdSecond/ThirdSecond';
import './FirstSection.css'

const FirstSection = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '100px' }}>
      <div className="p-3 row bg-color-home-2nd-section d-flex justify-content-center align-items-center">
        <span className='moving-text'>Welcome to the my AI Task Manager 🙏🏻</span>
        {/* Main content area */}
        <div className="col-md-8 text-center">
          <h1 className="mt-4">Let's Create New Task</h1>
          <h5>AI Task Manager with Smart Suggestions</h5>
          {/* Create New Task Button */}
          <Link to="/create" className="btn btn-primary mt-3 create-btn">
            Create New Task
          </Link>
        </div>

        {/* Right-side image */}
        <div className="col-md-4 add-task-image">
          <img
            src={add_task}
            alt="add task image"
            className="img-fluid mt-4"
          />
        </div>
      </div>
      <Home_SecondSection />
      <Home_ThirdSecond />
    </div>
  );
};

export default FirstSection;