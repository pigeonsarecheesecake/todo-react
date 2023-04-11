import './Task.css'

export default function Task({taskName, taskId, onRemove}){
    return(
        <li taskID={taskId}className='Task'>
            <div className='TaskName'>{taskName}</div>
            <div className='DeleteContainer'>
                <button onClick={() => onRemove(taskId)} className='Delete'>−</button>
            </div>
            <div className='CompleteContainer'>
                <button className='Complete'>✓</button>
            </div>
        </li>
    )
}