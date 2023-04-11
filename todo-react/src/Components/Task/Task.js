import './Task.css'

export default function Task({taskName, taskId, onRemove, onCompleted, isFinished}){
    const renderTask = () => {
        if (!isFinished){
            return (
                <div className='buttons'>
                    <div className='TaskName'>{taskName}</div>
                    <div className='DeleteContainer'>
                        {/* Onclick receives callback function that calls the handleRemove in App.js */}
                        <button onClick={() => onRemove(taskId)} className='Delete'>−</button>
                    </div>
                    <div className='CompleteContainer'>
                        <button onClick={() => onCompleted(taskId)} className='Complete'>✓</button>
                    </div>
                </div>
                )
        } else{
            return(
            <div className='TaskName' style={{color:'rgb(90, 122, 90)', textDecoration:'line-through'}}>
                {taskName}</div>)
        }
    }
    
    return(
        <li taskid={taskId} className='Task'>
            {renderTask()}
        </li>
    )
}