import React from 'react';
import HornedBeast from './HornedBeast.js';
class Main extends React.Component{

  render(){
    return(
      <section>

        <HornedBeast
        title = 'HornedBeast 1'
        source = 'ImagePlaceholderforHornedBeast1.png'
        alteration = "Placeholder image"
        paragraph = 'Take a look at our first image!!'
        />
        <HornedBeast
        title = 'HornedBeast 2'
        source = 'ImagePlaceholderforHornedBeast2.png'
        alteration = "Placeholder image"
        paragraph = 'Take a look at our second image!!'        
        />

      </section>

    );
  }
}

export default Main;