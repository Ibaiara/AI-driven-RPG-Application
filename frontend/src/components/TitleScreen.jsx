import React from "react";

const centeredScreen = {
  height: "100vh",
  background: "radial-gradient(circle, #0e0e14, #050509)",
  color: "#eaeaf0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: 20
};

const primaryButton = {
  padding: "14px 36px",
  fontSize: 16,
  backgroundColor: "#4b5cff",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  marginTop: 20
};

export default function TitleScreen({ onStart }) {
  return (
    <div style={centeredScreen}>
      <h1 style={{ fontSize: 52 }}>IbaiRPG</h1>
      <p style={{ opacity: 0.7 }}>
        RPG narrativo experimental impulsado por IA
      </p>

      <button style={primaryButton} onClick={onStart}>
        Comenzar
      </button>
    </div>
  );
}