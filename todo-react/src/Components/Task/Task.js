import './Task.css'

export default function Task({task, onRemove}){
    return(
        <li className='Task'>
            <div className='TaskName'>{task}</div>
            <div className='DeleteContainer'>
                <button onClick={onRemove} className='Delete'>−</button>
            </div>
            <div className='CompleteContainer'>
                <button className='Complete'>✓</button>
            </div>
        </li>
    )
}