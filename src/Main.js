import React from 'react';
import HornedBeast from './HornedBeast.js';
import Horns from './data.json';

class Main extends React.Component {



  render() {
    return (
      <>


        {
          Horns.map((beast, index) => {
            return <HornedBeast
              title={beast.title}
              URLSite={beast.image_url}
              description={beast.description}
              namKey={beast.keyword}
              hornNumber={beast.horns}
            />;
          }
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