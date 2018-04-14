const defaultState = {
  person: null,
  word: null,
};

const ui = (state = defaultState, action) => {
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

export default ui;
