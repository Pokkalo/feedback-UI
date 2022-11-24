import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
// import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './page/AboutPage'

function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) // set the feedback with the new one AND current feedback in the past
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id)) // to delete the feedback window by using id and filter function
        }
    }
    return (
        <Router>
            <Header /> 
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        
                        <>
                            <FeedbackForm handleAdd ={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback}
                            handleDelete={deleteFeedback} />
                        </>
                    }>

                    </Route>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App