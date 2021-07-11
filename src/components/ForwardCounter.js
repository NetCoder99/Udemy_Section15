import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = (props) => {
  const counter = useCounter(true, 1000, props.isRunning);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
