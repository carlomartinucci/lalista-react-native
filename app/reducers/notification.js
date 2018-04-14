const SCORE_POINT = 'SCORE_POINT';
const FETCH_FAILED = 'FETCH_FAILED';
const SCORE_POINT_ROLLBACK = 'SCORE_POINT_ROLLBACK';

const defaultState = { id: -1, message: '' };
let id = 0

const notification = (state = defaultState, action) => {
  switch (action.type) {
    case SCORE_POINT:
      return {
        id: id++,
        message: `Ho segnato "${action.payload.point.word.name}" a ${action.payload.point.person.name}`,
      };
    case FETCH_FAILED:
      return {
        id: id++,
        message: 'Errore di connessione con il server',
      };
    case SCORE_POINT_ROLLBACK:
      return {
        id: id++,
        message: `Non ho segnato "${action.payload.point.word.name}" a ${action.payload.point.person.name}`,
      };
    default:
      return state;
  }
};

export default notification;
