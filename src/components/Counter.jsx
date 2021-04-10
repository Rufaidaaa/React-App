import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags: ["tag1", "tag2", "tag3"]
     }

     styles={
         fontSize: 20
     }
    render() { 
      
        return (  
            <>
            <span style={this.styles} className={this.getbageClasses()}>{this.format()}</span>
            <button className="btn btn-danger">increment </button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
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