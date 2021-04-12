import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value:this.props.value,
        tags: []
     }

     
    handleIncrement=( ) =>{
        // console.log(e)
        this.setState({value : this.state.value+1})

    
    }
    render() { 
      console.log(this.props)
        return (  
            <>
         {this.props.children}
         {this.props.id}

           <span className={this.getbageClasses()}>{this.format()}</span>
            <button onClick={this.handleIncrement} className="btn btn-danger">increment </button>
            </>
        );
    }
    getbageClasses() {
        let classes = " badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    format(){
      const { value: count } =this.state
      return count === 0 ? "zero" : count
    }

}
 
export default Counter;