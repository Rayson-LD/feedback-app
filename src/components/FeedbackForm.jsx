import Card from "../shared/Card"
import Button from "./Button"
import SelectRating from "./SelectRating"
import {useState} from 'react'
import {useContext,useEffect} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackForm() {
    const {setAdd, editFeedback,updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(editFeedback.edit === true){
            setbtnDisable(true);
            setText(editFeedback.item.text)
            setRating(editFeedback.item.rating)
        }
    },[editFeedback])
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')
    const [btnDisable, setbtnDisable] = useState('')
    const [btnColor, setbtnColor] = useState('')
    const [msg, setmsg] = useState('')
    const handleform = (e) => {
        e.preventDefault()
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text:text,
                rating:rating,
                
            }
            if(editFeedback.edit === true)
            {
                updateFeedback(editFeedback.item.id,newFeedback)
            }
            else{
                setAdd(newFeedback)
            }
            
            setText('')
        }  
    }
    const saveText = (e) =>
    {
        if(text === null)
        {
            setbtnDisable('disabled')
            setbtnColor('light')
            setmsg('')
        }
        else if(text.trim().length <= 10 && text != null)
        {
            setbtnDisable('disabled')
            setbtnColor('light')
            setmsg('The number of characters  must be more than 10')
        }
        else{
            setbtnDisable('')
            setbtnColor('dark')
            setmsg('')
        }
        
        
        setText(e.currentTarget.value)
    }
    return (
        <form>
        <Card className="rounded">
            <p className="col align-self-center">How do you wanna rate  us?</p>
            <SelectRating rating={(rating)=>{setRating(rating)}}/>
            <div className="input-group mb-2 align-self-center" style={{width:'50%' }}>
            <input type="text" onChange={saveText} value={text} className="form-control" placeholder="Write Something"/>
            <Button type='button' version={btnColor} onClick={handleform} isdisabled={btnDisable}>Send</Button>
            </div>
            {msg ? <p className='align-self-center'>{msg}</p>:' '}
        </Card>
        </form>
    )
}

export default FeedbackForm
