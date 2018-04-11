import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// import logo from './images/logo.png';
import styles from './styles';

import AppText from './app_text';

const Rank = ({ rank, person, points_count }) => (
  <View style={styles.rank}>
    <View style={styles.rankSquare}>
      <AppText style={styles.textGrey}>
        {points_count}
      </AppText>
    </View>

    <AppText>
      {person.name}
    </AppText>

    <View style={styles.rankSquare}>
      <AppText>
        L
      </AppText>
    </View>
  </View>
)


class RankingScreen extends React.PureComponent {
  static propTypes = {
    ranking: PropTypes.array,
  }

  _keyExtractor = (item, index) => '' + item.person.id;

  _renderItem = ({ item, index }) => <Rank {...item} rank={index + 1} />

  render() {
    return (
      <FlatList
        style={[styles.main, {marginTop: 16}]}
        data={this.props.ranking}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = state => ({ ranking: state.ranking });

export default connect(mapStateToProps)(RankingScreen)
