import {useState} from 'react'
import {useContext,useEffect} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
function SelectRating({rating}) {

    const { editFeedback} = useContext(FeedbackContext)
    useEffect(() => {
        if(editFeedback.edit === true){
            setRating(editFeedback.item.rating)
        }
    },[editFeedback])
    const [selected, setRating] = useState(10)
   const handleChange=(e) =>{
        setRating(+e.currentTarget.value)
       
        rating(+e.currentTarget.value)
    }
    return (
        <div className='row align-self-center' style={{paddingBottom:30}}>
            <div className='col'>
            <button type="button" 
            value='1' 
            id='num1' 
            name='rating' 
            onClick={handleChange} 
            checked={selected===1} 
            className="rounded-circle btn btn-danger btn-outline-light" >
                    1
                </button>
            </div>
            <div className='col'>
            <button type="button" 
            value='2' 
            id='num2' 
            name='rating' 
            onClick={handleChange} 
            checked={selected===2} 
            className="rounded-circle btn btn-danger btn-outline-light" >
                    2
                </button>
            </div>
            <div className='col'>
            <button type="button" 
            value='3' 
            id='num3' 
            name='rating' 
            onClick={handleChange} 
            checked={selected===3} 
            className="rounded-circle btn btn-danger btn-outline-light" >
                    3
                </button>
            </div>
            <div className='col'>
            <button type="button" 
            value='4' 
            id='num4' 
            name='rating' 
            onClick={handleChange} 
            checked={selected===4} 
            className="rounded-circle btn btn-danger btn-outline-light" >
                    4
                </button>
            </div>
            <div className='col'>
            <button type="button" 
            value='5' 
            id='num5' 
            name='rating' 
            onClick={handleChange} 
            checked={selected===5} 
            className="rounded-circle btn btn-danger btn-outline-light" >
                    5
                </button>
            </div>
            

        </div>
    )
}

export default SelectRating
