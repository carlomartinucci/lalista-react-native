const UPDATE_PEOPLE = 'UPDATE_PEOPLE';

const people = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PEOPLE:
      return action.payload;
    default:
      return state;
  }
};

export default people;
