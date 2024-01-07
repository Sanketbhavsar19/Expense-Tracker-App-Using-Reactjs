


import { Component } from "react"
import HelloComponent from "./HelloComponent"

// let MessageComponent = () => {
// return (
//     <div>
//     <HelloComponent 
//          studname="Sanket"
//          course="DAC"/>
//     </div>
// )
     
// }

class MessageComponent extends Component{

    state ={
        username:"sanket",
          email:"sanket@gmail.com"
    }
    render(){
        return(
            <div>
            <h1>in Message component</h1>
            <HelloComponent
                uname ={this.state.username}
                email={this.state.email}              
                />
                </div>
                )
    }
}

export default MessageComponent