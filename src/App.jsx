import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import "./index.css";

function App() {
  let heroData = [
    { text1: "Drive into", text2: "what you love" },
    { text1: "Just", text2: "Drive" },
    { text1: "Drive into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
