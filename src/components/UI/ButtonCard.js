import classes from './ButtonCard.module.css';

const ButtonCard = (props) => {
  return <div className={classes.buttonCard}>{props.children}</div>;
};

export default ButtonCard;
