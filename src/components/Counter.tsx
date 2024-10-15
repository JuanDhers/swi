import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number;
  duration: number; // en milisegundos
}

export const Counter: React.FC<CounterProps> = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const increment = targetNumber / (duration / 100); // incrementa basado en el tiempo
      const interval = setInterval(() => {
        setCount((prevCount) =>
          prevCount + increment > targetNumber ? targetNumber : prevCount + increment
        );
      }, 100); // se actualiza cada 100ms

      return () => clearInterval(interval); // limpiar intervalo
    }
  }, [count, targetNumber, duration]);

  return (

    <span>{Math.floor(count)}</span>

  );
};
