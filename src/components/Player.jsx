import { useState, useRef } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();

  const handleClick = () => {
    setEnteredName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
