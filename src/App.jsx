
import './App.css';
import userData from "./userData.json";
import {Profile} from "./components/profil/profil";




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

    </>
  );
 };
export default App;

