import './Task.css'

export default function Task({taskName, taskId, onRemove}){
    
    return(
        <li taskid={taskId} className='Task'>
            <div className='TaskName'>{taskName}</div>
            <div className='DeleteContainer'>
                {/* Onclick receives callback function that calls the handleRemove in App.js */}
                <button onClick={() => onRemove(taskId)} className='Delete'>−</button>
            </div>
            <div className='CompleteContainer'>
                <button className='Complete'>✓</button>
            </div>
        </li>
    )
}