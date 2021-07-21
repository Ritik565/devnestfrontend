import '../style.css'

const Card=(props)=>{

    
    let index=props.key1;
    return <div className="card">
         <div className="content">You have consumed {props.cal} calories
        <span className="deletebutton"><button className="btn" onClick={()=>props.func(index)}>Delete</button></span></div>
    </div>
}

export default Card;
