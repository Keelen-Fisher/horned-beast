
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Horns from './data.json';
import SelectedBeast from './SelectedBeast';

import { render } from '@testing-library/react';
import { Spinner } from 'react-bootstrap';
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

  createOption = (HornedBeast) => {
    this.handleOpen();
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleOpen = () => {
    this.setState({ show: true })
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
          selectedBeast = 
          />
        <Footer />

      </>


    );
  }
}

export default App;
