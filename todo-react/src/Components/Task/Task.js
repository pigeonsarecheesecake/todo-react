import './Task.css'

export default function Task(){
    return(
        <div className='Task'>
            <div className='TaskName'>Learn React</div>
            <div className='DeleteContainer'>
                <button className='Delete'></button>
            </div>
            <div className='CompleteContainer'>
                <button className='Complete'></button>
            </div>
        </div>
    )
}