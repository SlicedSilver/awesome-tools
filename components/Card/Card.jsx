import styles from "./Card.module.scss";
import { ReactSVG } from "react-svg";

export default function Card(props) {
  return (
    <div
      color={props.color ? props.color : null}
      className={
        props.className ? styles.card + " " + props.className : styles.card
      }
    >
      {props.icons &&
        props.icons.map((icon) => {
          return (
            <ReactSVG
              key={icon}
              className={styles.icon}
              wrapper="svg"
              src={icon}
            ></ReactSVG>
          );
        })}
      {props.icon && (
        <ReactSVG
          className={styles.icon}
          wrapper="div"
          src={props.icon}
        ></ReactSVG>
      )}
      <div className={styles.text}>{props.text}</div>
      {props.description && (
        <div className={styles.description}>{props.description}</div>
      )}
      {props.footerText && <div>{props.footerText}</div>}
      {props.link && (
        <div className={styles.link}>
          <a target="_blank" href={props.link.href}>
            {props.link.text}
          </a>
        </div>
      )}
    </div>
  );
}
