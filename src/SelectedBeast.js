import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Horns from './data.json';
import HornedBeast from './HornedBeast';

class selectedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  createOption = (HornedBeast) => {
    this.handleOpen();
  }

  handleClose = () => {
    this.setState({show: false})
  }

  handleOpen = () => {
    this.setState({show: true})
  }

  render(){
    return(
      <>
      <div>
        {
          <HornedBeast />
        }
      </div>

      <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Chosen image</Modal.Title>
            </Modal.Header>
            <Modal.Body imageChosen = {this.props.HornedBeast.URLSite}>You've chosen well! Here's your image:</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </>
    );
  }

}

export default selectedBeast;