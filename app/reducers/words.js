const UPDATE_WORDS = 'UPDATE_WORDS';

const words = (state = [], action) => {
  switch (action.type) {
    case UPDATE_WORDS:
      return action.payload;
    default:
      return state;
  }
};

export default words;
