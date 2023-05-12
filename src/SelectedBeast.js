import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
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

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          {/* <Modal.Dialog> */}
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beastData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body
          // imageChosen={this.props.beastData.image_url}
          >
            <Card
              bg="dark"
              text="light"
              onClick={this.displayAsModal}
            >
              <Card.Img variant="top" alt={this.props.beastData.title} src={this.props.beastData.image_url} />
              <Card.Body>
                <Card.Title>{this.props.beastData.title}</Card.Title>
                <Card.Text>
                  {this.props.beastData.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
          {/* </Modal.Dialog> */}
        </Modal>
      </>
    );
  }

}

export default SelectedBeast;
