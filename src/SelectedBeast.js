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
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body imageChosen={this.props.selectedBeast.image_url}>
              <Card
                bg="dark"
                text="light"
                onClick={this.displayAsModal}
              >
                <Card.Img variant="top" alt={this.props.selectedBeast.title} src={this.props.selectedBeast.image_url} />
                <Card.Body>
                  <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                  <Card.Text>
                    {this.props.selectedBeast.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }

}

export default SelectedBeast;
