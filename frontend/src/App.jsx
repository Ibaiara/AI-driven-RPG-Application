import { useState } from "react";

import TitleScreen from "./components/TitleScreen";
import CreditsScreen from "./components/CreditsScreen";
import IntroScreen from "./components/IntroScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [screen, setScreen] = useState("title");

  if (screen === "title") {
    return <TitleScreen onStart={() => setScreen("credits")} />;
  }

  if (screen === "credits") {
    return <CreditsScreen onNext={() => setScreen("intro")} />;
  }

  if (screen === "intro") {
    return <IntroScreen onEnter={() => setScreen("game")} />;
  }

  return <GameScreen />;
}