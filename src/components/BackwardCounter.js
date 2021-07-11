import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = (props) => {
  const counter = useCounter(false, 500, props.isRunning);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
