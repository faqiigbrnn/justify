import React, { useState } from "react";
import Login from "./auth/login";
import Register from "./auth/register";

function App() {
  // State navigasi: 'login' atau 'register'
  const [currentView, setCurrentView] = useState("login");

  return (
    <div>
      {currentView === "login" ? (
        <Login onNavigateToRegister={() => setCurrentView("register")} />
      ) : (
        <Register onNavigateToLogin={() => setCurrentView("login")} />
      )}
    </div>
  );
}

export default App;
