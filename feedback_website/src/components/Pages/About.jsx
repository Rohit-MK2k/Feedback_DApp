import React from 'react'
import Card from '../Shared/Card'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {
  return (
    <Card>
        <div className="about">
            <p>This is about page</p>
            <Link to = "/">Home</Link>
        </div>
    </Card>
  )
}

export default About