


// let HelloComponent =(props) => {
//     return<h3>Hello World{props.studname}
//     you are Doing {props.course}
//     </h3>
// }


import { Component } from "react"
class HelloComponent extends Component{
    render (){
        return<h3>Hello {this.props.uname}!! you are {this. props.email } year old !!</h3>
    }
}
  export default HelloComponent