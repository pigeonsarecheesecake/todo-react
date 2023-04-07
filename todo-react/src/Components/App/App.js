import React from 'react';
import './App.css';
import NewTask from '../NewTask/NewTask'
import Tasks from '../TaskList/TaskList'


function App() {
  return (
    <div className="ToDoList">

      <h1>To Do List</h1>
      <div className="TasksContainer">
        <h2>Tasks</h2>
        <NewTask />
        <div className='Divider'></div>

        {/* Container to display tasks */}
        <div className="DisplayTasks Tasks">
          <Tasks />
        </div>

        <h2>Finished</h2>
        <div className='FinishedTasks Tasks'>

        </div>
        
        
      </div>

    </div>
  );
}

export default App;
