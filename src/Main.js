import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast.js';
// import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {

  render() {
    return (
      <>
        <form onSubmit={this.props.submitHandler}>
          <Form.Select onChange={this.props.changeHandler} placeholder="Number of Horns">
            <option>Select</option>
            <option>4 Horns</option>
            <option>3 Horns</option>
            <option>2 Horns</option>
            <option>1 Horn</option>
            <option>No Horns</option>
          </Form.Select>
        </form>
        {/* <CardColumns> */}
          {
            this.props.allBeasts.map((beast, index) => (
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                namKey={beast.keyword}
                hornNumber={beast.horns}
                key={index}
                index={index}
                displayAsModal={this.props.displayAsModal}
              />
            ))};
        {/* </CardColumns> */}
      </>
    );
  }
}
export default Main;
