import Header from  './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './Pages/About'
import AboutButton from './components/AboutButton'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import  { FeedbackProvider } from './Context/FeedbackContext'

function App()
{
 return(
     <FeedbackProvider>
     <Router>
     <div className='container'>
          <Header  fontSize></Header>
         <Routes>
             <Route exact path='/' element={
                 <>
                
         <FeedbackForm />
         <FeedbackStats/>
         <FeedbackList/>
         <AboutButton />
                 </>
             }/>
         <Route path='/about' element={<About />} />
         
        </Routes>
     </div>
     </Router>
     </FeedbackProvider>
 ) 
    
}
export default  App
