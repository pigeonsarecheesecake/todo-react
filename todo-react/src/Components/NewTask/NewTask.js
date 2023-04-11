import React from 'react';
import './NewTask.css'

export default function NewTask({onChange, onAdd}){
    return(
        <div className='NewTask'>
            <div className='UserInput Container'>
                <input onChange={onChange} type="text" placeholder='Add a new value'></input>
            </div>
            <div className='AddButton Container'>
                <button onClick={onAdd} className='Plus'>+</button>
            </div>
        </div>
        
    );

}