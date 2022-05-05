import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function TimerTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '40px', fontFamily: "Orbitron"}} className="text-white">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
