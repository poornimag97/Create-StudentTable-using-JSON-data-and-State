import React, { Component } from 'react'
import STUDENT from './students.json';
import Students from './Students.jsx';

export default class App extends Component {
  constructor(){
    super()
  this.state={
    json : STUDENT
  }
}
  render() {
    return (
      <div>
       <Students data={this.state.json}/>
      </div>
    )
  }
}
