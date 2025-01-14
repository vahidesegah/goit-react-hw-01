import userData from "./userdata.json";
import friends from "./friends.json";
import transaction from "./transaction.json";
import Profile from "./components/Profile";
import FriendsList from "./components/FriendsList";
import TransactionHistory from "./components/TransactionHistory";

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

      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
