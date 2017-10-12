import React from 'react';

class App extends React.Component {
  render () {
    return (
      <h1>Hello {this.props.teamName}</h1>
    );
  }
}

export default App;
