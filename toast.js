import React from 'react';
import PropTypes from 'prop-types';

import { ToastAndroid } from 'react-native';

import { connect } from 'react-redux';

class Toast extends React.Component {
  static propTypes = {
    toast: PropTypes.object.isRequired,
  }

  state = {
    id: -1,
    message: ''
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (!nextProps.toast || nextProps.toast.id === prevState.id) return null

    ToastAndroid.show(nextProps.toast.message, ToastAndroid.SHORT)

    return { ...nextProps.toast }
  }

  render() { return null }
}

export default connect(state => ({ toast: state.toast }))(Toast);
