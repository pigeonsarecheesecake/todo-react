import React, {useState} from 'react';

import './App.css';
import NewTask from '../NewTask/NewTask'
import TaskList from '../TaskList/TaskList'


function App() {
  // Using hooks to set initial state for current Task and taskList
  const [task, setNewTask] = useState("");
  const [taskList, setTasks] = useState([]);

  // Handler for inputting current task
  const handleChange = e =>{
    // Grabs new task from input form and sets it as current state
    setNewTask(e.target.value);
  }

  // Handler for click to add task to the tasklist
  const handleAdd = () =>{
    if (!task){
      return
    }
    setTasks(
      (prev) => {
        return [task, ...prev]
      }
    )
  }

  // Handler for click to remove task from the tasklist
  const handleRemove = e =>{
    setTasks(
      
    )
  }

  return (
    <div className="ToDoList">
      <h1>To Do List</h1>

      {/* Adding a new task, and displays all tasks */}
      <div className="TasksContainer">
        <h2>Tasks</h2>
        <NewTask onAdd={handleAdd} onChange={handleChange} />
        <div className='Divider'></div>

        {/* Container to display tasks */}
        <div className="DisplayTasks Tasks">
          <TaskList onRemove={handleRemove} tasks={taskList} />
        </div>

        {/* Displays completed tasks */}
        <h2>Finished</h2>
        <div className='CompletedTasks Tasks'>

        </div>
      </div>

    </div>
  );
}

export default App;
