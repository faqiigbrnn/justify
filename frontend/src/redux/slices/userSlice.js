// Kerangka Redux Slice: User

export const initialUserState = {
  profile: null,
  preferences: {},
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'user/setProfile':
      return { ...state, profile: action.payload };
    case 'user/setPreferences':
      return { ...state, preferences: action.payload };
    default:
      return state;
  }
};

export default userReducer;
