import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList({tasks, onRemove}){
    // Assigns key with taskId
    const taskList = tasks.map(task => {
        let {taskName, taskId} = task;
        return <Task key={taskId} taskName={taskName} taskId={taskId} onRemove={onRemove} />
    })

    return(
        <ul className='tasks'>
            {taskList}
        </ul>
    )
}