const INITIAL_STATE = [];

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return [...action.payload];

    default:
      return state;
  }
};

export default projectsReducer;
