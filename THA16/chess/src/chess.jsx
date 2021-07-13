const Place =()=>
{
    return(
    <div className = "placement">

    </div>
    )
} 
const Placerow =()=>
{
    return(
    <div className = "chess">
    <Place/>
    <Place/> 
    <Place/> 
    <Place/> 
    <Place/> 
    <Place/> 
    <Place/> 
    <Place/>         
        
   </div>
    )
}
const Chessbox =()=>{
    return (
    <div className = "box">
        
        <Placerow/>
        <Placerow/>
        <Placerow/>
        <Placerow/>
        <Placerow/>
        <Placerow/>
        <Placerow/>
        <Placerow/>


    </div>
    )
}
export default Chessbox;

