function FoodCard(props){
    return(
    <div className="foodCard">
       <div className="Foodtitle">
         
       </div>

       <div className="Calorie">
            calories {props.cal}
        </div>

    </div>
    )
}
export default FoodCard;
