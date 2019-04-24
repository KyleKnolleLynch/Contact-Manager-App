import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }
  // //  DEPRICATED TO..
  // UNSAFE_componentWillMount() {}

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  // //  DEPRICATED TO..
  // UNSAFE_componentWillUpdate() {}

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }
  // //  DEPRICATED TO..

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // //  gDSFP has no access to 'this'.

  // getSnapshotBeforeUpdate(nextProps, prevState) {}

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">{ title }</h1>
        <p className="lead">{ body }</p>
      </div>
    );
  }
}

export default Test;
