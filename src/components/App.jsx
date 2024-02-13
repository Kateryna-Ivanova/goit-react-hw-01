import "./App.css";
import userData from "../userData.json";
import friends from "../friends.json";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList/";

const App = () => {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
export default App;
