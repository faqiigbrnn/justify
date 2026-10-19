import React from "react";
import logoImg from "../assets/images/logo.png";
import heroLawyerImg from "../assets/images/lawyer-illustration.png";

export default function Home({ onNavigateToLogin, onNavigateToRegister }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#cfe2eb", fontFamily: "'Manrope', sans-serif" }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding: "0 48px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <div className="logo-navbar">
          <img src={logoImg} alt="Justify Logo" />
        </div>

        <div>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#edukasi">Pusat Edukasi</a>
            <a href="#quiz">Quiz</a>
            <a href="#stories">Legal Stories</a>
          </nav>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onNavigateToRegister}
            style={{
              padding: "9px 25px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              backgroundColor: "#ffffff",
              color: "#1C5D83",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <strong>Join For Free</strong>
          </button>
          <button
            onClick={onNavigateToLogin}
            style={{
              padding: "9px 30px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#2071a3",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <strong>Login</strong>
          </button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1>
            Learn Law & Legal Basics with{" "}
            <span>Interactive Stories</span> and Quizzes
          </h1>
          <p>
            Explore everyday law through interactive stories, real-world cases, quizzes, and simple legal explanations.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-outline-primary"
              onClick={onNavigateToRegister}
            >
              <strong>Start Learning For Free</strong>
            </button>
            <button
              className="btn-filled-primary"
              onClick={onNavigateToLogin}
            >
              Explore Legal Stories
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroLawyerImg} alt="Learn Law Illustration" />
        </div>
      </main>
    </div>
  );
}


