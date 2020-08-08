const initialState = {
  test: "1234",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      return state;
    default:
      return state;
  }
};

export default homeReducer;
