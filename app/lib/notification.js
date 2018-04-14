import React from 'react';
import PropTypes from 'prop-types';

import { ToastAndroid } from 'react-native';

import { connect } from 'react-redux';

class Notification extends React.Component {
  static propTypes = {
    notification: PropTypes.object.isRequired,
  }

  state = {
    id: -1,
    message: ''
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (!nextProps.notification || nextProps.notification.id === prevState.id) return null

    ToastAndroid.show(nextProps.notification.message, ToastAndroid.SHORT)

    return { ...nextProps.notification }
  }

  render() { return null }
}

export default connect(state => ({ notification: state.notification }))(Notification);
