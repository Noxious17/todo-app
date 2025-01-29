import React, { useState, useEffect } from 'react';
import './TodosItem.css';

export default function TodosItem() {
  const loadTasksFromStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromStorage);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (
      newTask.trim() &&
      newDescription.trim() &&
      newTime.trim() &&
      newDate.trim()
    ) {
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        description: newDescription,
        time: newTime,
        date: newDate,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setNewDescription('');
      setNewTime('');
      setNewDate('');
    } else {
      alert('Please enter task title, description, date, and time.');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container my-4">
      <div className="header-logo">
        <h2>MY TASKS</h2>
      </div>

      <ol className="list-group list-group-numbered">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{task.title}</div>
              <div>{task.description}</div>
              <div>
                <strong>Date:</strong> {task.date}
              </div>
              <div>
                <strong>Time:</strong> {task.time}
              </div>
            </div>
            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>

      <div className="mt-4">
        <h4>Add a New Task</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="time"
            className="form-control"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
