
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Horns from './data.json';
import SelectedBeast from './SelectedBeast';

// import { render } from '@testing-library/react';
// import { Spinner } from 'react-bootstrap';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allBeasts: Horns,
      displayModal: false,
      selectedBeast: {},
    }
  }

  // createOption = (HornedBeast) => {
  //   this.handleOpen();
  // }

  handleClose = () => {
    this.setState({ displayModal: false })
  }

  handleOpen = (name) => {
    this.setState({ displayModal: true })
  }

  render() {
    // console.log(Horns)
    return (
      // <title>HornedBeast</title>
      <>
        <Header />
        <Main
          allBeasts = {this.state.allBeasts}
        />
        <SelectedBeast
          // selectedBeast = {this.state.show}
          allBeasts = {this.state.allBeasts}
          handleClose = {this.handleClose}
        />

        <Footer/> </>


    );
  }
}

export default App;
