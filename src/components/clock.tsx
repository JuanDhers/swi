// Clock.tsx
import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [clockTime, setClockTime] = useState(new Date());
  const [blinker, setBlinker] = useState(false);

  async function startClock() {
    let timer = new Date();
    let isBlinking = false;
    while (true) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      isBlinking = !isBlinking;
      setBlinker(isBlinking);

      if (timer.getMinutes() !== new Date().getMinutes()) {
        timer = new Date();
        setClockTime(timer);
      }
    }
  }

  useEffect(() => {
    startClock();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <div>Hora local:</div>
      <div className="text-lg font-bold">
        {clockTime.getHours() < 10 ? "0" + clockTime.getHours() : clockTime.getHours()}
        <span style={{ color: blinker ? "transparent" : "rgb(110, 207, 198)" }}>:</span>
        {clockTime.getMinutes() < 10 ? "0" + clockTime.getMinutes() : clockTime.getMinutes()}
      </div>
    </div>
  );
};

export default Clock;
