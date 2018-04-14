const SCORE_POINT = 'SCORE_POINT';
const SCORE_POINT_COMMIT = 'SCORE_POINT_COMMIT';
const SCORE_POINT_ROLLBACK = 'SCORE_POINT_ROLLBACK';
const UPDATE_POINTS = 'UPDATE_POINTS';

const points = (state = [], action) => {
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
    case UPDATE_POINTS:
      return action.payload;
    default:
      return state;
  }
};

export default points;
