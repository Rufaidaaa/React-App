import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags: []
     }

     
    handleIncrement=( ) =>{
        // console.log(e)
        this.setState({count : this.state.count+1})
    
    }
    render() { 
      
        return (  
            <>
           <span className={this.getbageClasses()}>{this.format()}</span>
            <button onClick={this.handleIncrement} className="btn btn-danger">increment </button>
            </>
        );
    }
    getbageClasses() {
        let classes = " badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    format(){
      const { count } =this.state
      return count === 0 ? "zero" : count
    }

}
 
export default Counter;