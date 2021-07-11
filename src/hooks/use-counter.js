import {useState, useEffect} from 'react';

const useCounter = (forwards=true, waitInterval=1000, isRunning=true) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let interval;
        if (isRunning) {
          interval = setInterval(() => {
            if (forwards) {setCounter((prevCounter) => prevCounter + 1);}
            else {setCounter((prevCounter) => prevCounter - 1);}
        }, waitInterval);
      }
      return () => clearInterval(interval);
    }, [forwards, waitInterval, isRunning]);
    return counter;
}

export default useCounter;