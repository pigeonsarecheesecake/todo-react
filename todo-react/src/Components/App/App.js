import React, {useState} from 'react';

import './App.css';
import NewTask from '../NewTask/NewTask'
import TaskList from '../TaskList/TaskList'


function App() {
  // Using hooks to set initial state for current Task and taskList
  const [task, setNewTask] = useState({taskId:0, taskName:""});
  const [taskList, setTasks] = useState([]);

  // Handler for inputting current task
  const handleChange = e =>{
    // Grabs new task from input form and sets it as current state
    const newTask = e.target.value;
    // Copies previous task state and keep other props that are not being replaced by setNewTask
    setNewTask({...task,taskName:newTask});

  }

  // Handler for click to add task to the tasklist
  const handleAdd = () =>{
    // If input is empty, exits function
    if (!task){
      return;
    }

  // When user clicks add, it updates task's taskId using a callback function, this merges previous state and new one
  setNewTask(prevTask => 
    ({taskId: prevTask.taskId +1 }))
  
  // Updates tasklist by copying previous state and adds new task in the taskList
  setTasks(
    (prev) => {
      return [task, ...prev]
    }
  )
  }

  // Handler for click to remove task from the tasklist
  const handleRemove = taskId =>{
    let newTaskList = taskList.filter(task => task.taskId !== taskId)
    setTasks(newTaskList)
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
