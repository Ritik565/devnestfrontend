const Card = (props)=>{
    console.log(props);
    return (
        <div className = "container">
        <div className = "card">
            <h1>{props.h1} </h1>
            <h2> {props.h2} </h2>
        </div>
        </div>
    )
}
export default Card;
