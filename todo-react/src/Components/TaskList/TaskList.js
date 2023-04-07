import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList({tasks}){
    return(
        <div className='tasks'>
            {/* Iterate Through tasks and pass each task prop to the task component */}
            {
                tasks.map((task) =>{
                    return <Task task={task} /> 
                })
            }
        </div>
        

    )
}