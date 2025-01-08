import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CreateTask.css'
import demminiImage from '../../assets/Google-Gemini.webp'

const CreateTask = () => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://samyarth-project.vercel.app/api/create/task', { description });
      toast.success('Task created successfully!');
      setTimeout(() => navigate('/viewtask'), 1000); // Navigate after showing success message
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Error creating task');
      toast.error('Failed to create task!');
    }
  };

  return (
    <div className="container-fluid container-bg-color full-screen-height p-5" style={{ marginTop: '100px' }}>
      <ToastContainer />
      <h2>"Task Creation in the AI Task Manager with Smart Suggestions"</h2>
      <div className="container d-flex flex-column flex-md-row">
        <div className="mb-4 text-font-size">
          <h4 className='fw-bold'>👉🏻AI-Based Task Prioritization</h4>
          <p>The AI analyzes the task description and assigns a priority label</p>
          <ul className="list-unstyled">
            <li>
              <strong className="text-danger">High Priority:</strong> Urgent tasks (e.g., "Submit assignment by tomorrow").
            </li>
            <li>
              <strong className="text-warning">Medium Priority:</strong> Important but not time-sensitive tasks.
            </li>
            <li>
              <strong className="text-success">Low Priority:</strong> Non-urgent tasks.
            </li>
          </ul>
          <p>
            Tasks with deadlines or keywords like "urgent" are automatically marked high priority.
          </p>
        </div>

        {/* Priority Section */}
        <div className='text-font-size'>
          <h4 className='fw-bold'>👉🏼Priority Indication</h4>
          <ul className="list-unstyled">
            <li>
              <strong>Clear Priority Indication:</strong> Tasks are marked with colored labels:
              <ul className="list-unstyled ms-3">
                <li className="text-danger">
                  <strong>Red:</strong> High priority
                </li>
                <li className="text-warning">
                  <strong>Yellow:</strong> Medium priority
                </li>
                <li className="text-success">
                  <strong>Green:</strong> Low priority
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Row className="g-5">
        {/* Left Section with Image */}
        <Col md={6} className="text-center">
          <img
            src={demminiImage}
            alt="Create Task"
            className="img-fluid custom-img"
            style={{ height: '370px', width: 'auto' }}
          />
        </Col>

        {/* Right Section with Form */}
        <Col md={6} className='create-task-bg-color p-4'>
          {/* <p className='fw-bold'>"AI Task Manager with Smart Suggestions"</p> */}
          <div className='border border-primary p-3 form-border-design'>
            <h1 className="mb-4 text-center title-bg-color">Create New Task</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="description" className="mb-3">
                <Form.Label> <strong>Description</strong></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter task description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="warning" type="submit" className="create-btn-color w-75 fw-bold">
                  Create Task
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateTask;