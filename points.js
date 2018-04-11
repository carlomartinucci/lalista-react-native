import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles';
import AppText from './app_text';

const Point = ({ id, person, word, created_at }) => (
  <View key={id} style={styles.point}>
    <AppText>
      {person.name} ha detto {word.name}
    </AppText>
    <AppText style={styles.textGrey}>
      Segnata alle {moment(created_at).format('H:mm')} del {moment(created_at).format('DD/MM')}
    </AppText>
  </View>
)

const PointsScreen = ({ points = [] }) => {
  return (
    <ScrollView style={styles.main}>
      {points.map(point => <Point {...point} />)}
    </ScrollView>
  )
}

class BetterPointsScreen extends React.PureComponent {
  static propTypes = {
    points: PropTypes.array,
  }

  _keyExtractor = (item, index) => '' + item.id;

  _renderItem = ({ item }) => <Point {...item} />

  render() {
    return (
      <FlatList
        style={styles.main}
        data={this.props.points}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = state => ({ points: state.points });

export default connect(mapStateToProps)(BetterPointsScreen)
