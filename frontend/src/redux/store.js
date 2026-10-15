// Kerangka Redux Store
import authReducer, { initialAuthState } from './slices/authSlice';
import userReducer, { initialUserState } from './slices/userSlice';

export const rootInitialState = {
  auth: initialAuthState,
  user: initialUserState,
};

export const rootReducer = (state = rootInitialState, action) => ({
  auth: authReducer(state.auth, action),
  user: userReducer(state.user, action),
});

export const store = {
  state: rootInitialState,
  dispatch(action) {
    this.state = rootReducer(this.state, action);
  },
  getState() {
    return this.state;
  },
};

export default store;
