import Profile from "../Profile/Profile.jsx";
import FriendsList from "../FriendList/FriendList.jsx";
import userData from "../../data/userData.json";
import friends from "../../data/friends.json";

function App() {
  return (
    <div
      className="container justify-content-center"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={{
          followers: userData.stats.followers,
          views: userData.stats.views,
          likes: userData.stats.likes,
        }}
      />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
