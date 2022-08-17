import React from 'react';

class HornedBeast extends React.Component{

  constructor(props){
  super(props);
  this.state = {clicked: 0};
  }

  addingOne = () => {
    // Do not use ++this.state.clicked, you CANNOT change state, only add to it. 
    this.setState({clicked: this.state.clicked + 1});
  };


  render(){
    return(
      <div>

        <h2>{this.props.title} </h2>
        <h2>Hearts:  {this.state.clicked}</h2>

        <img 
          onClick={this.addingOne} 
          src={this.props.URLSite} 
          alt={this.props.alteration} 
          width="400" />

        <p>
          {this.props.description} 
          {this.props.namKey}
          {this.props.hornNumber}
        </p>
          
      </div>
    );
  };





}

export default HornedBeast;