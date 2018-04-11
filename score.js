import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, TouchableNativeFeedback, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// import logo from './images/logo.png';
import styles, { colors } from './styles';

import AppText from './app_text';

import { scorePoint } from './actions';

class ScoreScreen extends React.PureComponent {
  static propTypes = {
    people: PropTypes.array.isRequired,
    words: PropTypes.array.isRequired,
    scorePoint: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired,
  }

  render() {
    const { people, words, scorePoint, ui: { person, word } } = this.props

    return (
      <React.Fragment>
        {!person &&
          <ScorePeople people={people} />
        }

        {person && !word &&
          <React.Fragment>
            <ScoreConfirmPerson person={person} />
            <ScoreWords words={words} />
          </React.Fragment>
        }

        {person && word &&
          <React.Fragment>
            <ScoreConfirmPerson person={person} />
            <ScoreConfirmWord word={word} />
            <View style={{padding: 16}}></View>
            <Button
              onPress={() => scorePoint(person, word)}
              title="Sì, segna!"
              color={colors.primary}
              accessibilityLabel="Segna il punto"
            />
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

const ScorePerson = connect(
  state => ({ ui: state.ui }),
  dispatch => ({ selectPerson: (person) => dispatch({ type: 'SELECT_PERSON', payload: person }) }),
)(({ person, ui, selectPerson }) => (
  <TouchableNativeFeedback
      onPress={() => selectPerson(person)}
      background={TouchableNativeFeedback.SelectableBackground()}>
    <View style={styles.score}>
      <AppText style={person && ui.person && ui.person.id === person.id ? styles.textLight : styles.textGrey}>
        {person.name}
      </AppText>
    </View>
  </TouchableNativeFeedback>
))

const ScorePeople = ({ people }) => {
  return (
    <React.Fragment>
      <View style={styles.score}>
        <AppText style={styles.textSubHeader}>Segna a...</AppText>
      </View>
      <FlatList
        style={styles.main}
        data={people}
        keyExtractor={person => '' + person.id}
        renderItem={({ item }) => <ScorePerson person={item} />}
      />

    </React.Fragment>
  )
}

const ScoreConfirmPerson = connect(
  undefined,
  dispatch => ({ resetPerson: () => dispatch({ type: 'RESET_PERSON' }) }),
)(({ person, resetPerson }) => (
  <React.Fragment>
    <View style={styles.score}>
      <AppText style={styles.textSubHeader}>Segna a</AppText>
    </View>
    <Button
      onPress={resetPerson}
      // onPress={() => this.setState({ person: null, word: null })}
      title={person.name}
      color={colors.primary}
      accessibilityLabel="Undo Person"
    />
  </React.Fragment>
))

const ScoreWord = connect(
  state => ({ ui: state.ui }),
  dispatch => ({ selectWord: (word) => dispatch({ type: 'SELECT_WORD', payload: word }) }),
)(({ word, ui, selectWord }) => (
  <TouchableNativeFeedback
      onPress={() => selectWord(word)}
      background={TouchableNativeFeedback.SelectableBackground()}>
    <View style={styles.score}>
      <AppText style={word && ui.word && ui.word.id === word.id ? styles.textLight : styles.textGrey}>
        {word.name}
      </AppText>
    </View>
  </TouchableNativeFeedback>
))

const ScoreWords = ({ words }) => {
  return (
    <React.Fragment>
      <View style={styles.score}>
        <AppText style={styles.textSubHeader}>la parola...</AppText>
      </View>
      <FlatList
        style={styles.main}
        data={words}
        keyExtractor={word => '' + word.id}
        renderItem={({ item }) => <ScoreWord word={item} />}
      />
    </React.Fragment>
  )
}

const ScoreConfirmWord = connect(
  undefined,
  dispatch => ({ resetWord: () => dispatch({ type: 'RESET_WORD' }) }),
)(({ word, resetWord }) => (
  <React.Fragment>
    <View style={styles.score}>
      <AppText style={styles.textSubHeader}>la parola</AppText>
    </View>
    <Button
      onPress={resetWord}
      title={word.name}
      color={colors.primary}
      accessibilityLabel="Undo Word"
    />
  </React.Fragment>
))

const mapStateToProps = state => {
  return {
    people: state.people,
    words: state.words,
    ui: state.ui,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    scorePoint: (person, word) => dispatch(scorePoint(person, word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
