import React, { useEffect } from "react";

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

export default function IntroScreen({ onEnter }) {
  const introText = `
El mundo ha cambiado.

Las viejas certezas se han desmoronado.
No eres un héroe legendario,
solo alguien atrapado en una historia mayor.

Cada decisión importa.
Cada silencio tiene consecuencias.
`;

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(introText);
      u.lang = "es-ES";
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    }

    return () => window.speechSynthesis.cancel();
  }, []);

  return (
    <div style={centeredScreen}>
      <h2>Prólogo</h2>

      <p style={{ whiteSpace: "pre-wrap", maxWidth: 600 }}>
        {introText}
      </p>

      <button style={primaryButton} onClick={onEnter}>
        Entrar al mundo
      </button>
    </div>
  );
}