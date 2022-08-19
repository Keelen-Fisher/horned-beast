import React from 'react';
// import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicked: 0

    };
  }

  addingOne = () => {
    // Do not use ++this.state.clicked, you CANNOT change state, only add to it.
    // setState Reserved function name that updates the state/value. 
    this.setState({
      clicked: this.state.clicked + 1
    });
  };


  render(){
    return(
      <>
      <div>
        {/*  props- Comes from the parent in Main.js */}
        <h2>{this.props.title} </h2>
        <h2>Hearts:  {this.state.clicked}</h2>

        <img 
          onClick={this.addingOne} 
          src={this.props.image_url} 
          alt={this.props.alteration} 
          width="400" />

        <p>
          {this.props.description} 
          {this.props.namKey}
          {this.props.hornNumber}
        </p>
          
      </div>

      <div key={this.props._id} className = "Name" style = "width: 18rem;">
        <figure onClick={this.props.handleSelect} className = "ImageUrl">
          <img className="beastImage" src={this.props.}></img>
        </figure>
      </div>
      
      </>
    );
  };





}

export default HornedBeast;