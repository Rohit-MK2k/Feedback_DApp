import React from 'react'
import Card from './Shared/Card'
// import {useContext} from 'react'
// import feedbackContext from '../FeedbackContext'

function FeedbackItems({item}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.feedback}</div>
    </Card>
  )
}

export default FeedbackItems