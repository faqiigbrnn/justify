// Kerangka Redux Slice: Auth

export const initialAuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'auth/login':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'auth/logout':
      return { ...state, isAuthenticated: false, user: null, token: null };
    default:
      return state;
  }
};

export default authReducer;
