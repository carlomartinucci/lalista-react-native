import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// import moment from 'moment';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from './store';
import styles from './styles';

import { updateAll } from './actions';

import Navigator from './navigator';
import Header from './header';
import Toast from './toast';

class App extends React.Component {
  static propTypes = {
    updateAll: PropTypes.func.isRequired,
    // closeSnackbar: PropTypes.func.isRequired,
    // snackbar: PropTypes.any,
  }

  componentDidMount() {
    this.props.updateAll();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <Navigator />
        </View>
        <Toast />
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
