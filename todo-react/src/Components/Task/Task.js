import './Task.css'

export default function Task({task}){
    return(
        <div className='Task'>
            <div className='TaskName'>{task}</div>
            <div className='DeleteContainer'>
                <button className='Delete'>−</button>
            </div>
            <div className='CompleteContainer'>
                <button className='Complete'>✓</button>
            </div>
        </div>
    )
}