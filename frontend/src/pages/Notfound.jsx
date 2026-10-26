import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#cfe2eb",
            fontFamily: "'Manrope', sans-serif",
            textAlign: "center",
            padding: "20px"
        }}>
            <h1 style={{ fontSize: "72px", margin: "0", color: "#1C5D83", fontWeight: "800" }}>404</h1>
            <h2 style={{ fontSize: "24px", color: "#0f172a", margin: "12px 0" }}>Page Not Found</h2>
            <p style={{ color: "#475569", marginBottom: "24px", maxWidth: "420px" }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" style={{
                padding: "10px 24px",
                borderRadius: "10px",
                backgroundColor: "#2071a3",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}>
                Go to Home
            </Link>
        </div>
    );
};

export default Notfound;