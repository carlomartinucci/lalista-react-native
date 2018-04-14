const SCORE_POINT = 'SCORE_POINT';
const SCORE_POINT_COMMIT = 'SCORE_POINT_COMMIT';
const SCORE_POINT_ROLLBACK = 'SCORE_POINT_ROLLBACK';
const UPDATE_RANKING = 'UPDATE_RANKING';

const ranking = (state = [], action) => {
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
    case UPDATE_RANKING:
      return action.payload;
    default:
      return state;
  }
};

export default ranking;
