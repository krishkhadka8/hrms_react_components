import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchPage extends Component {
  state = {  } 
  render() { 
    return (
      <Form>
        <input type="search" placeholder="Search..." name="search"></input>
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </Form>
    );
  }
}
 
export default SearchPage;