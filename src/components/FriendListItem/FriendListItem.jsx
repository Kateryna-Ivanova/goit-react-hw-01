import style from "./FriendListItem.module.css";
import clsx from "clsx";
export const FriendListItem = (props) => {
  return (
    <div className={style.itemsWrapper}>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p className={style.text}>{props.name}</p>
      <p
        className={clsx(
          style.isOnline,
          props.isOnline ? style.online : style.offline
        )}
      >
        {props.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
