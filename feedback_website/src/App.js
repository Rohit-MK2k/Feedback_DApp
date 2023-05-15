
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
import FeedbackForm from "./components/FeedbackForm"
import Footer from './components/Footer'
import About from './components/Pages/About'
import {FeedbackProvider} from './FeedbackContext'

function App(){ 
    return(
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="body-content">
                    <Routes>
                        <Route path='/' 
                        element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStat/>
                            <FeedbackList/>
                        </>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </FeedbackProvider>
    )
}
export default App