import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
// import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: 0

    };
  }

  addingOne = () => {
    // Do not use ++this.state.clicked, you CANNOT change state, only add to it.
    // setState Reserved function name that updates the state/value. 
    this.setState({ clicked: this.state.clicked + 1 });
    this.props.displayAsModal(this.props.title);
  };


  render() {
    return (
      <>

        <Card
          style={{ width: '18rem', marginBottom: '50px', marginLeft: '50px', marginTop: '30px' }}

          bg="info"
        // text="light"
        >
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Text>
              <Button
                onClick={this.props.handleSelectBeast}>
                Open For More Info!
              </Button>
            </Card.Text>
            <Button
              onClick={this.addingOne}>
              Vote!
            </Button>
            <div>
              ❤️ = {this.state.clicked}
            </div>
          </Card.Body>
        </Card>
      </>
    );
  };
}

export default HornedBeast;
