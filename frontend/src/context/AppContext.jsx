import { createContext, useContext, useState } from 'react';

// Kerangka Global Context
const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
