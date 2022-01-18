import { FaQuestion } from "react-icons/fa";
import {Link} from 'react-router-dom'
function AboutButton() {
    return (
        <div style={{
            position: 'absolute',
            right: 15,
      }}>
            <Link  to='/About'>     
        <FaQuestion color='black' size={30}/>
        </Link>
        
        </div>
    )
}

export default AboutButton