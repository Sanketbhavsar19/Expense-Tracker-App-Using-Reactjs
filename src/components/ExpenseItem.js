//function ExpenseItem(){}

import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

let ExpenseItem = (props) => {

    let [title,setTitle]  = useState(props.expTitle)
 
    let btnHandler = () =>{
        console.log("Button Clicked!!")  /* ///button on click function created */
        setTitle("Updated title")
    }                          
    return (
       <div className="expense-item">
{/*            <div>{props.expDate.toLocalString()}</div> */}
            <div>
                <ExpenseDate expDate={props.expDate} />
            </div>
            <div className="expense-item__description">
                 <h2>{title}</h2>
                 <p className="expense-item__price">{props.expAmount}</p>
            </div>
            <button onClick={btnHandler}>Change title</button> {/* ///button created */}
       </div>
   )
}
export default ExpenseItem;