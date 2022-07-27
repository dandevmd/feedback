import React,{useContext} from 'react'

import FeedBackContext from '../context/FeedBackContext';



const FeedBackStats = () => {
    const {feedback} = useContext(FeedBackContext)

    let average = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length;

    average = average.toFixed(1)

    return (
        <div className='feedback-stats'>
            <h4>Reviews : {feedback.length}</h4>
            <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}



export default FeedBackStats