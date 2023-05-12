import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast.js';
import FormSet from './Form.js'
import SelectedBeast from './SelectedBeast';
import Horns from './data.json';
// import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

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
      selectedBeast: null,
      array: Horns
    }
  }
  // createOption = (HornedBeast) => {
  //   this.handleOpen();
  // }

  displayAsModal = (name) => {
    const selectedBeast = Horns.find(beast => beast.title === name)
    this.setState({ selectedBeast, displayModal: true });
  }

  handleClose = () => {
    this.setState({ displayModal: false })
  }

  handleOpen = () => {
    this.setState({ displayModal: true })
  }

  selectBeast = (beast) => {
    this.setState({ selectedBeast: beast })
    this.handleOpen()
  }

  handleChange = (event) => {
    console.log("Inside Handle Change --------")
    let filter = Number(event.target.value);
    // change the value from a string to a number
    let filteredBeasts = this.state.array.filter(beast => beast.horns === filter)
    this.setState({ allBeasts: filteredBeasts });
  }

  render() {
    return (
      <>

        <FormSet changeHandler={this.handleChange} />

        {/* <CardColumns> */}
        {
          this.state.allBeasts.map((beast, index) => (
            <HornedBeast
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              namKey={beast.keyword}
              hornNumber={beast.horns}
              key={index}
              index={index}
              handleSelectBeast={() => this.selectBeast(beast)}
            />
          ))};
        {/* </CardColumns> */}
        {

          /* This code is conditionally rendering the `SelectedBeast` component only if
          `this.state.selectedBeast` is truthy (i.e. not null or undefined). If
          `this.state.selectedBeast` is truthy, then the `SelectedBeast` component is rendered with
          several props passed to it, including `beastData`, `show`, `handleClose`, and
          `handleOpen`. These props are used to control the display and behavior of the modal in the
          `SelectedBeast` component. */
          this.state.selectedBeast &&
          <SelectedBeast
            // selectedBeast = {this.state.show}
            // allBeasts = {this.state.allBeasts}
            beastData={this.state.selectedBeast}
            show={this.state.displayModal}
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
          />
        }
      </>
    );
  }
}
export default Main;
