import '../style.css'
import { useState } from 'react'

const Button = ()=>{

    const [count,setcount]=useState(0)
    return(
        
        <button className="btn" onClick={()=>{ const num =count+1; setcount(num); console.log(num);}}>{count}</button>
    )
}

export default Button;
