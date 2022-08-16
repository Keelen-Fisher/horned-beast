import React from 'react';

class HornedBeast extends React.Component{

  // constructor(props){
  // super(props);
  // }

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.source} alt={this.props.alteration}/>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }





}

export default HornedBeast;