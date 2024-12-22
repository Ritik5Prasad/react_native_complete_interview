import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

// CLASS COMPONENTS

class LifecylceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor:Component Initialized');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived Props', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component Mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate: Should re-render?',
      nextState.count !== this.state.count,
      nextProps,
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'getSnapshotBeforeUpdate: Before DOM is updated',
      prevProps,
      prevState,
    );
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componentDidUpdate: Component Updated',
      prevProps,
      prevState,
      snapshot,
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component Unmounted');
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    console.log('Render:Rendering UI');
    return (
      <View>
        <Text style={{marginTop: 250}}>
          HELLO BASIC CONCEPTS {this.state.count}
        </Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default LifecylceComponent;
