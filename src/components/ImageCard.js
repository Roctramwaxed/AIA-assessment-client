import React, { useState, useRef, useEffect } from "react";
import { Card, Modal, Image, Badge } from "react-bootstrap";
import notfound from "../assets/not-found.png";

import "./imageCardStyle.css";

const ImageCard = ({ entry }) => {
  const [zoomModal, setZoomModal] = useState(false);
  const modalImageRef = useRef();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const handleError = (ev) => {
    ev.target.src = notfound;
    ev.target.onerror = null;
  };

  useEffect(() => {
    if (zoomModal) {
      setHeight(modalImageRef.current.clientHeight);
      setWidth(modalImageRef.current.clientWidth);
    } else {
      setHeight(0);
      setWidth(0);
    }
  }, [zoomModal]);

  return (
    <Card>
      <Card.Header style={{ minHeight: "1rem" }}>{entry.title}</Card.Header>
      <Card.Img
        className="image-card"
        variant="top"
        src={entry.imageSrc}
        onError={handleError}
        onClick={() => setZoomModal(true)}
      />
      {zoomModal && (
        <Modal show={zoomModal} onHide={() => setZoomModal(false)}>
          <Modal.Header closeButton>
            <span className="font-weight-bold">
              {entry.author || "Anonymous"}
            </span>
            {entry.title || "Untitled"}
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              flexDirection: height > width ? "row" : "column",
            }}
          >
            <Image
              className="image-modal"
              src={entry.imageSrc}
              ref={modalImageRef}
            />
            <h5
              style={{
                maxWidth: height > width ? "30vw" : "fit-content",
              }}
            >
              {entry.tags.map((tag) => (
                <Badge className="tags" bg="secondary">
                  {tag}
                </Badge>
              ))}
            </h5>
          </Modal.Body>
        </Modal>
      )}
    </Card>
  );
};

export default ImageCard;
