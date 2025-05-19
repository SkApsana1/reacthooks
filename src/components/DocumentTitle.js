import React, { Component } from 'react'

class DocumentTitle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,preState){
        console.log("updating document title")
        document.title=`clicked ${this.state.count} times`
    }
    
  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={e=>{this.setState({name:e.target.value})}}></input>
        <button onClick={()=>this.setState({count:this.state.count+1})}></button>
        
      </div>
    )
  }
}

export default DocumentTitle
