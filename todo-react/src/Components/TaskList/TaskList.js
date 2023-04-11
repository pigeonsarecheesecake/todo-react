import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList({tasks, onRemove}){
    // Assigns key with taskId
    const taskList = tasks.map(task => {
        return <Task key={task.taskId} taskName={task.taskName} taskId={task.taskId} onRemove={onRemove}/>
    })

    return(
        <ul className='tasks'>
            {taskList}
        </ul>
    )
}