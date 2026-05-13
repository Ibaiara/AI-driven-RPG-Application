import { useState } from "react";

import TitleScreen from "./components/TitleScreen";
import CreditsScreen from "./components/CreditsScreen";
import IntroScreen from "./components/IntroScreen";
import PlayerSetupScreen from "./components/PlayerSetupScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("title");
  const [playerId, setPlayerId] = useState(null);

  if (screen === "title") {
    return <TitleScreen onStart={() => setScreen("credits")} />;
  }

  if (screen === "credits") {
    return <CreditsScreen onNext={() => setScreen("intro")} />;
  }

  if (screen === "intro") {
    return <IntroScreen onEnter={() => setScreen("setup")} />;
  }

  if (screen === "setup") {
    return (
      <PlayerSetupScreen
        onStart={(id) => {
          setPlayerId(id);
          setScreen("game");
        }}
      />
    );
  }

  // ✅ AQUÍ ESTÁ BIEN
  return (
    <GameScreen
      playerId={playerId}
      initialAction="start"
      onExit={() => setScreen("setup")}
    />
  );
}