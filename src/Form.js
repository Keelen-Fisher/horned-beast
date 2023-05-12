import React from 'react';

import Form from 'react-bootstrap/Form';
class FormSet extends React.Component {
  render() {
    return (
      <Form.Select onChange={this.props.changeHandler} >
        <option>Select</option>
        <option value="4">Lots of Horns</option>
        <option value="3">3 Horns</option>
        <option value="2">2 Horns</option>
        <option value="1">1 Horn</option>
      </Form.Select >

    )
  }

}

export default FormSet
