import "./button.css"
import React from "react"
const Button =(props)=>{
    return (
        <div className="btn">
        <button className="button" onClick={props.onClick}>{props.title}</button>
        </div>
    )
}
export default Button