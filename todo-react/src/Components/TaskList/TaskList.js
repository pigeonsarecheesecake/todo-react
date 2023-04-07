import React from 'react';
import Task from '../Task/Task'
import './TaskList.css'

export default function TaskList(){
    return(
        <div className='tasks'>
            <Task />
            <Task />
        </div>
        

    )
}