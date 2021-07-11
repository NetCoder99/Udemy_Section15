import React, {useState} from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Button from './components/UI/Button';

function App() {
  const [isRunning, setIsRunning] = useState(true);

  const stopCountersHandler = (flag=true) => {
    console.log("App.stopCountersHandler.flag:" + flag);
    setIsRunning(prevState => {
        if (prevState) {return false;} 
        else {return true;}
    });
  } 

  return (
    <React.Fragment>
      <Button onClick={stopCountersHandler} >
        {isRunning && "Stop Counters"}
        {!isRunning && "Start Counters"}
      </Button>
      <ForwardCounter isRunning={isRunning}/>
      <BackwardCounter isRunning={isRunning} />
    </React.Fragment>
  );
}

export default App;
