import {createContext} from 'react'
import FeedbackItemList from '../feedback/FeedbackItem'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) =>
{
    const  [editFeedback, seteditFeedback] = useState({
        item:{},
        edit:false,
    })
    const [feedback,setItem] = useState(FeedbackItemList)
    const setDelete = (id) =>{
        if(window.confirm('Are you sure you want to delete'))
        {
            setItem(feedback.filter((item) => item.id !== id))
        }
       }
       const setAdd = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setItem([newFeedback,...feedback])
   }
   const setEdit = (item) =>
   {
       seteditFeedback({
           item:item,
           edit:true
       })
   }
   const updateFeedback = (id,updId) => {
       setItem(feedback.map((item) => (item.id === id ? {...item,...updId }: item)))
   }
    return <FeedbackContext.Provider value={{
        feedback,
        setDelete,
        setAdd,
        setEdit,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext