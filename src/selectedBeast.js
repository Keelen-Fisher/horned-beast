import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false
  //   }
  // }

  render() {
    return (
      <>

        <Modal show={this.props.show} onHide={this.handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body imageChosen={this.props.HornedBeast.URLSite}>You've chosen well! Here's your image:</Modal.Body>

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

export default SelectedBeast;