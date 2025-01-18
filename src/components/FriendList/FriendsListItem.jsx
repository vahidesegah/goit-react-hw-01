/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
export default function FriendsListItem(friend) {
  return (
    <Card
      className="text-center border-dark border-2"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={friend.avatar} alt="Avatar" width="48" />
      <Card.Body>
        <Card.Title>{friend.name}</Card.Title>
        <Card.Text>
          {friend.isOnline ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
