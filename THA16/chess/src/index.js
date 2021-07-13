import React from "react"
import ReactDOM from "react-dom"
import Chessbox from "./chess"
import "./style.css"
const App =()=>

{
  return(
  <div className = "container">
    <Chessbox/>
  </div>
  )
  }
ReactDOM.render(
  <App/>,document.getElementById("root")
);
