import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }
}

export default App;
