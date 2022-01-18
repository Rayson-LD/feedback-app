import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from "../shared/Card"
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackItem({item}) {
  const {setDelete,setEdit} = useContext(FeedbackContext)
    return (
        <div className="container-fluid">
  <Card >
    <button type="button" className="col rounded-circle align-self-start btn btn-danger btn-outline-light" >
      {item.rating}
    </button>
    <div className="col align-self-end">
    <button  className="col  align-self-center rounded-circle btn btn-outline-danger" onClick = {() =>setEdit(item)}>
      <FaEdit color='Purple'/>
    </button>
    <button  className="col  align-self-start rounded-circle btn btn-outline-danger" onClick = {() =>setDelete(item.id)}>
      <FaTimes color='Purple'/>
    </button>
    
    </div>
    <div className="col align-self-center text-dark">
      {item.text}
    </div>
    
  </Card>
</div>
    )
}

export default FeedbackItem
