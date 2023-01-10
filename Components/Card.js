import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.cardcontainer}>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default Card;
