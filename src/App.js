
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Horns from './data.json';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { render } from '@testing-library/react';
// import { Spinner } from 'react-bootstrap';
import React from 'react';

class App extends React.Component {

 /* The `constructor(props)` is a special method in a React component that is called when the component
 is first created. It is used to initialize the component's state and bind event handlers. In this
 specific code, the constructor is initializing the state of the `App` component with an object that
 contains an array of all the beasts, a boolean value to control the display of the modal, and an
 empty object to hold the selected beast. The `props` parameter is passed to the constructor so that
 it can be used to access any props that are passed to the component. */
  constructor(props) {
    super(props);
    this.state = {
      /* `allBeasts: Horns` is initializing the state of the `App` component with an object property
      called `allBeasts` that is assigned the value of the imported `Horns` data from the
      `data.json` file. This allows the `App` component to have access to the `Horns` data and pass
      it down to other components as a prop. */
      allBeasts: Horns,
      /* `displayModal: false` is initializing the state of the `App` component with a boolean value of
      `false`. This value is used to control the display of the modal in the `SelectedBeast`
      component. When `displayModal` is `false`, the modal is hidden, and when it is `true`, the
      modal is displayed. */
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
      <>
        <Header />
        <Main
          allBeasts = {this.state.allBeasts}
        />
        <SelectedBeast
          // selectedBeast = {this.state.show}
          allBeasts = {this.state.allBeasts}
          handleClose = {this.handleClose}
          handleOpen = {this.handleOpen}
        />

        <Footer/> </>


    );
  }
}

export default App;
