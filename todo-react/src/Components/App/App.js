import React, {useState} from 'react';

import './App.css';
import NewTask from '../NewTask/NewTask'
import TaskList from '../TaskList/TaskList'


function App() {
  // Using hooks to set initial state and set up the next state
  const [tasks, setTasks] = useState(["learn react"]);

  // Handler for add
  const AddHandler =e=>{

  }
  
  return (
    <div className="ToDoList">
      <h1>To Do List</h1>

      {/* Adding a new task, and displays all tasks */}
      <div className="TasksContainer">
        <h2>Tasks</h2>
        <NewTask />
        <div className='Divider'></div>

        {/* Container to display tasks */}
        <div className="DisplayTasks Tasks">
          <TaskList tasks={tasks} />
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
