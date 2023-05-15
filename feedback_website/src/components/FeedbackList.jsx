import FeedbackItems from './FeedbackItems'
import {useContext} from 'react'
import feedbackContext from '../FeedbackContext'

function FeedbackList() {
    const {feedbackDisplay} = useContext(feedbackContext)
    return (
        feedbackDisplay.map((item) =>(
            <FeedbackItems  item={item}/>
        ))
    )
}

export default FeedbackList