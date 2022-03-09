import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; // Include class names for div (styling)
  return <div className={classes}>{props.children}</div>; // props.children is reserved -> "body" of card
};

export default Card;
