import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Platform, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from './config/store';
import styles from './config/styles';
import Tabs from './config/routes';

import { updateAll } from './actions';

import Header from './components/Header';
import Notification from './lib/notification';

console.log('qui ci entro?')

class App extends React.Component {
  static propTypes = {
    updateAll: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.updateAll();
  }

  render() {
    return (
      <View style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
        <Header />
        <View style={styles.main}>
          <Tabs />
        </View>
        <Notification />
      </View>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => {
  return {
    updateAll: () => dispatch(updateAll())
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
const AppWrapper = () => <Provider store={store}><ConnectedApp /></Provider>

export default AppWrapper;
