import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const SCORE_POINT = 'SCORE_POINT';
const SCORE_POINT_COMMIT = 'SCORE_POINT_COMMIT';
const SCORE_POINT_ROLLBACK = 'SCORE_POINT_ROLLBACK';

const rankingState = [];

const rankingReducer = (state = rankingState, action) => {
  switch (action.type) {
    case SCORE_POINT:
      return state.map((rank) => {
        if (rank.person.id === action.payload.point.person.id) {
          return { ...rank, points_count: rank.points_count + 1 };
        }
        return rank;
      });
    case SCORE_POINT_ROLLBACK:
      return state.map((rank) => {
        if (rank.person.id === action.payload.point.person.id) {
          return { ...rank, points_count: rank.points_count - 1 };
        }
        return rank;
      });
    case 'UPDATE_RANKING':
      return action.payload;
    default:
      return state;
  }
};

const peopleState = [];

const peopleReducer = (state = peopleState, action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return action.payload;
    default:
      return state;
  }
};

const wordsState = [];

const wordsReducer = (state = wordsState, action) => {
  switch (action.type) {
    case 'UPDATE_WORDS':
      return action.payload;
    default:
      return state;
  }
};

const pointsState = [];

const pointsReducer = (state = pointsState, action) => {
  switch (action.type) {
    case SCORE_POINT:
      return [action.payload.point, ...state];
    case SCORE_POINT_COMMIT:
      return state.map((point) => {
        if (point.id === action.payload.oldPoint.id) {
          return action.payload.point;
        }
        return point;
      });
    case SCORE_POINT_ROLLBACK:
      return state.filter(point => point.id !== action.payload.point.id);
    case 'UPDATE_POINTS':
      return action.payload;
    default:
      return state;
  }
};

const toastState = { id: -1, message: '' };
let toastId = 0

const toastReducer = (state = toastState, action) => {
  switch (action.type) {
    case SCORE_POINT:
      return { id: toastId++, message: `Ho segnato "${action.payload.point.word.name}" a ${action.payload.point.person.name}` };
    case 'FETCH_FAILED':
      return { id: toastId++, message: 'Errore di connessione con il server' };
    case SCORE_POINT_ROLLBACK:
      return { id: toastId++, message: `Non ho segnato "${action.payload.point.word.name}" a ${action.payload.point.person.name}` };
    default:
      return state;
  }
};

const uiState = {
  person: null,
  word: null,
};

const uiReducer = (state = uiState, action) => {
  switch (action.type) {
    case 'SELECT_PERSON':
      return { ...state, person: action.payload };
    case 'SELECT_WORD':
      return { ...state, word: action.payload };
    case 'RESET_PERSON':
      return { person: null, word: null }
    case 'SCORE_POINT':
      return { person: null, word: null }
    case 'RESET_WORD':
      return { ...state, word: null }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  people: peopleReducer,
  ranking: rankingReducer,
  words: wordsReducer,
  points: pointsReducer,
  ui: uiReducer,
  toast: toastReducer,
  // snackbar: snackbarReducer,
});

const store = createStore(
  rootReducer,
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default store;
