import './Task.css'

export default function Task({taskName, taskId, onRemove, onCompleted}){
    
    return(
        <li taskid={taskId} className='Task'>
            <div className='TaskName'>{taskName}</div>
            <div className='DeleteContainer'>
                {/* Onclick receives callback function that calls the handleRemove in App.js */}
                <button onClick={() => onRemove(taskId)} className='Delete'>−</button>
            </div>
            <div className='CompleteContainer'>
                <button onClick={() => onCompleted(taskId)} className='Complete'>✓</button>
            </div>
        </li>
    )
}