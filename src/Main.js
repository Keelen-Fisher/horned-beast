import React from 'react';
import HornedBeast from './HornedBeast.js';
import Horns from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends React.Component{



  render(){
    return(
      <section>

   
          {
            Horns.map((value, index) => { return <HornedBeast title = {value.title} URLSite = {value.image_url} description = {value.description} namKey = {value.keyword} hornNumber = {value.horns}/>;
          })
          }
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
      </section>

    );
  }
}

export default Main;