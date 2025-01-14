/* eslint-disable react/prop-types */
import FriendsListItem from "./FriendsListItem";
export default function FriendsList({ friends }) {
  console.log("friends", friends);
  return (
    <ul className="container d-flex flex-wrap gap-3">
      {friends.map((friend) => (
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
