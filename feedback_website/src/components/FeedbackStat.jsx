import React from 'react'
import {useContext} from 'react'
import feedbackContext from '../FeedbackContext'

function FeedbackStat() {
    const {feedLength} = useContext(feedbackContext)
    let review
    if(feedLength === 0){
        review = "No"
    }
    else{
        review = feedLength
    }
  return (
    <div className='feedback-stat'>
        <div className="no-rating">{review} Reviews</div>
    </div>
  )
}

export default FeedbackStat