import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div>
      <div className="p-3 bg-color-home-banner">
        <div className="col-md-12 text-center">
          <h2 className="mt-4 text-start">What is AI Task Manager with Smart Suggestions ?</h2>
            <ul>
                <li>👉 An AI Task Manager with Smart Suggestions is a tool that uses artificial intelligence to help people manage their tasks, schedules, and priorities more easily. Its main feature is providing helpful suggestions to make task management simpler and more efficient.</li>
                <li>👉🏻 Using Gemini AI for an AI Task Manager with Smart Suggestions can enhance the application with advanced generative AI capabilities.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;