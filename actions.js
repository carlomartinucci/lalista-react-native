// import Storage from 'react-native-storage';

import moment from 'moment';

// import ENDPOINT from './endpoint';

const ENDPOINT = 'http://192.168.1.6:3000'

// import { AsyncStorage } from 'react-native';

// var storage = new Storage({
//   // maximum capacity, default 1000
//   size: 1000,

//   // Use AsyncStorage for RN, or window.localStorage for web.
//   // If not set, data would be lost after reload.
//   storageBackend: AsyncStorage,

//   // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
//   // can be null, which means never expire.
//   defaultExpires: 1000 * 3600 * 24,

//   // cache data in the memory. default is true.
//   enableCache: true,

//   // if data was not found in storage or expired,
//   // the corresponding sync method will be invoked and return
//   // the latest data.
//   sync : {
//     // we'll talk about the details later.
//   }
// })

// global.storage = storage;
// TODO: https://www.npmjs.com/package/react-native-storage

export const update = (what, api) => async (dispatch) => {
  // let localJson;
  let response;
  let json;

  // try {
  //   localJson = await localforage.getItem(what.toLowerCase());
  // } catch (e) {
  //   dispatch({ type: 'LOCALFORAGE_FAILED' });
  // }

  // if (localJson) {
  //   dispatch({ type: `UPDATE_${what.toUpperCase()}`, payload: localJson });
  // }

  try {
    response = await fetch(`${ENDPOINT}${api}`);
    json = await response.json();
  } catch (e) {
    dispatch({ type: 'FETCH_FAILED' });
    return;
  }

  // try {
  //   localforage.setItem(what.toLowerCase(), json);
  // } catch (e) {
  //   dispatch({ type: 'LOCALFORAGE_FAILED' });
  // }

  dispatch({ type: `UPDATE_${what.toUpperCase()}`, payload: json });
};

export const updateAll = () => (dispatch) => {
  dispatch(update('ranking', '/people/ranking'));
  dispatch(update('people', '/people'));
  dispatch(update('words', '/words'));
  dispatch(update('points', '/points'));
};

export const scorePoint = (person, word) => async (dispatch) => {
  const createdAt = moment();
  const point = {
    id: `${person.id}_${word.id}_${createdAt}`,
    person_id: person.id,
    word_id: word.id,
    person,
    word,
    created_at: createdAt,
  };
  dispatch({ type: 'SCORE_POINT', payload: { point } });

  let response;
  let json;
  try {
    response = await fetch(`${ENDPOINT}/points`, {
      body: JSON.stringify({ person_id: person.id, word_id: word.id }),
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    });
    json = await response.json();
  } catch (e) {}

  if (!response || !response.ok) {
    dispatch({ type: 'FETCH_FAILED' });
    dispatch({ type: 'SCORE_POINT_ROLLBACK', payload: { point } });
    return
  }

  dispatch({ type: 'SCORE_POINT_COMMIT', payload: { point: json, oldPoint: point } });
};
