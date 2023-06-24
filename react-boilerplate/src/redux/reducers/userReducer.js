const initialState = {};

const userReducer = (state = initialState, action) => {
  if (action.type === 'user/setUser') {
    return action.payload;
  } else {
    return state;
  } 
};

export default userReducer;
