import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList({tasks, onRemove}){
    
    const taskList = tasks.map(task => {
        return <Task onRemove={onRemove} task={task} />
    })

    return(
        <ul className='tasks'>
            {taskList}
        </ul>
    )
}