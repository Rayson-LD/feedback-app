import {createContext} from 'react'
import { useState,useEffect } from 'react'
const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) =>
{
    const  [isLoading, setisLoading] = useState(false);
    const  [editFeedback, seteditFeedback] = useState({
        item:{},
        edit:false,
    })
    const [feedback,setItem] = useState([])

     useEffect(()=>{
        Fetch()
    },[])
    const Fetch = async () =>{
        const respnose = await fetch('/feedback')
        const data = await respnose.json()
        setItem(data)
        setisLoading(true)
    }
    const setDelete = async (id) =>{
        await fetch(`/feedback/${id}`,{method:'DELETE'})
        if(window.confirm('Are you sure you want to delete'))
        {
            setItem(feedback.filter((item) => item.id !== id))
        }
       }
       const setAdd = async (newFeedback) =>{
           const response = await fetch("/feedback",{
               method:"POST",
               headers:{
                   'Content-Type':"application/json"
               },
               body: JSON.stringify(newFeedback),
           })
       const data = await response.json()
        setItem([data,...feedback])
   }
   const setEdit = (item) =>
   {
       seteditFeedback({
           item:item,
           edit:true
       })
   }
   const updateFeedback = async(id,updId) => {
    const response = await fetch(`/feedback/${id}`,{
        method:"PUT",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(updId),
    })
        const data = await response.json()
       setItem(feedback.map((item) => (item.id === id ? {...item,...data }: item)))
   }
    return <FeedbackContext.Provider value={{
        feedback,
        setDelete,
        isLoading,
        setAdd,
        setEdit,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext