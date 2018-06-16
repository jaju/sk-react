import React from 'react';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {
  render() {
    return(
      <div style={{textAlign: 'center'}}>
      <h1>Hello, World!</h1>
      <Button variant="contained" color="primary">
      Hello, Button!
      </Button>
      </div>);
  }
}
