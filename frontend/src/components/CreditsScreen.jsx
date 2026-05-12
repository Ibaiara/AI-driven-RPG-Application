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

export default function CreditsScreen({ onNext }) {
  return (
    <div style={centeredScreen}>
      <h2>Créditos</h2>

      <p><strong>Autor:</strong> Ibai Arana</p>

      <p style={{ maxWidth: 600 }}>
        Proyecto experimental orientado a explorar narrativa interactiva,
        persistencia de estado y generación multimodal con IA.
      </p>

      <p><strong>Tecnologías:</strong></p>
      <ul style={{ textAlign: "left" }}>
        <li>React / Vite</li>
        <li>n8n (orquestación)</li>
        <li>LLMs (narrativa)</li>
        <li>Generación de imagen y voz</li>
      </ul>

      <button style={primaryButton} onClick={onNext}>
        Continuar
      </button>
    </div>
  );
}