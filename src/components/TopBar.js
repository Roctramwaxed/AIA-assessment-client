import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ onClick }) => {
  const style = {
    backgroundColor: "#1572A1",
    color: "#EFDAD7",
    fontSize: "large",
  };

  return (
    <Navbar className="p-3" style={style}>
      <span onClick={onClick} style={{ cursor: 'pointer' }}>
        Img <FontAwesomeIcon icon={faDrumstickBite} /> Feed
      </span>
    </Navbar>
  );
};

export default TopBar;
