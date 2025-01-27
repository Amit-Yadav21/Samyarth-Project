import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import HorizontalLine from '../Horizontalline/HorizontalLine';
import 'react-toastify/dist/ReactToastify.css';
import './ViewTask.css';

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTasksCalled = useRef(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-danger text-white';
      case 'medium':
        return 'bg-warning text-dark';
      case 'low':
        return 'bg-success text-white';
      default:
        return 'bg-secondary text-white';
    }
  };

  useEffect(() => {
    if (!fetchTasksCalled.current) {
      fetchTasksCalled.current = true;

      const fetchTasks = async () => {
        try {
          const response = await axios.get('https://samyarth-project.vercel.app/api/find/all/task');
          setTasks(response.data);
          toast.success('Tasks loaded successfully!');
        } catch (error) {
          toast.error('Error fetching tasks.');
          console.error('Error fetching tasks:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchTasks();
    }
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://samyarth-project.vercel.app/api/delete/task/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success('Task deleted successfully!');
    } catch (error) {
      toast.error('Error deleting task.');
      console.error('Error deleting task:', error);
    }
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleUpdateTask = async () => {
    try {
      await axios.put(`https://samyarth-project.vercel.app/api/update/task/${selectedTask._id}`, selectedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === selectedTask._id ? { ...task, ...selectedTask } : task
        )
      );
      toast.success('Task updated successfully!');
      setShowModal(false);
    } catch (error) {
      toast.error('Error updating task.');
      console.error('Error updating task:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <div className='container-fluid container-color' style={{ marginTop: '100px' }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
      <div className='d-flex justify-content-center p-5'>
        <h1 className="text-center view-title-bg-color">All Task List</h1>
      </div>
      <div className='d-flex align-items-center justify-content-center' style={{ marginTop: '-50px' }}>
        <HorizontalLine />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-grow" style={{ width: '5rem', height: '5rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Row className='mt-5'>
          {tasks.map((task) => (
            <Col key={task._id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-auto">
                    <Card.Text>
                      <strong>Description:</strong> {task.description}
                    </Card.Text>
                    <Card.Text>
                      <strong>Priority:</strong>
                      <span
                        className={`badge ${getPriorityClass(task.priority)} ms-2 mx-3 text-wrap text-start`}>
                        {task.priority}
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <strong>Created At:</strong> {task.createdAt}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-end edit-delete-btn mt-2">
                    <Button variant="" className='edit-btn' title='Edit' onClick={() => handleEditClick(task)}>✏️</Button>
                    {/* <Button variant="" className='delete-btn' title='Delete' onClick={() => deleteTask(task._id)}>🗑️</Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Modal for editing task */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTask && (
            <Form>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={selectedTask.description}
                  onChange={handleChange}
                />
              </Form.Group>

            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateTask}>
            Update it
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewTask;