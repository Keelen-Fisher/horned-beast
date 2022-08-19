import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {



  render() {
    return (
      <>


        {
          this.props.allBeasts.map((beast, index) => (
             <HornedBeast
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              namKey={beast.keyword}
              hornNumber={beast.horns}
              key = {index}
              index = {index}
            />
            )
          )};

        {/* 
        // <HornedBeast
        // title = 'HornedBeast 1'
        // source = 'ImagePlaceholderforHornedBeast1.png'
        // alteration = "Placeholder image"
        // paragraph = 'Take a look at our first image!!'
        // />
        // <HornedBeast
        // title = 'HornedBeast 2'
        // source = 'ImagePlaceholderforHornedBeast2.png'
        // alteration = "Placeholder image"
        // paragraph = 'Take a look at our second image!!'        
        // />

         */}
      </>

    );
  }
}

export default Main;