import React from 'react';
import './NewTask.css'

export default function NewTask(){
    return(
        <div className='NewTask'>
            <div className='UserInput Container'>
                <input type="text" placeholder='Add a new value'></input>
            </div>
            <div className='AddButton Container'>
                <button className='Plus'>+</button>
            </div>
            
            
        </div>
        
    );

}