/* eslint-disable react/prop-types */
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="container mt-5 d-flex justify-content-center mb-5">
      <Card className="d-flex flex-row p-3 border-dark border-2">
        <Card.Img
          variant="top"
          style={{ width: "18rem" }}
          src={image}
          alt="User avatar"
        />

        <div className="d-flex flex-column">
          <Card.Body className=" d-flex flex-column">
            <Card.Title>{name}</Card.Title>
            <Card.Text>@{tag}</Card.Text>
            <Card.Text>{location}</Card.Text>
          </Card.Body>

          <ListGroup>
            <ListGroupItem>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Views</span>
              <span>{stats.views}</span>
            </ListGroupItem>
            <ListGroupItem>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
