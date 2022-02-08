import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = ({ title, imageSrc, desc }) => {
  return (
    <Card
      style={{
        maxWidth: "25vw",
        maxHeight: "50vh",
      }}
    >
      <Card.Header>{title}</Card.Header>
      <Card.Img variant="top" src={imageSrc} />
      {desc && (
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default ImageCard;
