export const FriendListItem = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p>Friend name {props.name}</p>
      <p>Friend status {props.isOnline}</p>
    </div>
  );
};
