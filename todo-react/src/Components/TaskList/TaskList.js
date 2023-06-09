import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList({tasks, onRemove, onCompleted, isFinished}){
    // Assigns key with taskId
    const taskList = tasks.map(task => {
        // Destructures task object
        let {taskName, taskId} = task;
        return <Task key={taskId} taskName={taskName} taskId={taskId} onRemove={onRemove} onCompleted={onCompleted} isFinished={isFinished}/>
    })

    return(
        <ul className='tasks'>
            {taskList}
        </ul>
    )
}