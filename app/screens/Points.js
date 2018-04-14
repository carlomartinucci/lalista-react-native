import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from '../config/styles';
import Text from '../components/Text';

const Point = ({ id, person, word, created_at }) => (
  <View key={id} style={styles.point}>
    <Text>
      {person.name} ha detto {word.name}
    </Text>
    <Text style={styles.textGrey}>
      Segnata alle {moment(created_at).format('H:mm')} del {moment(created_at).format('DD/MM')}
    </Text>
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
