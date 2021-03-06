import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Badge,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import TopBar from "../components/TopBar";
import ImageCard from "../components/ImageCard";
import { api, notification } from "../helpers";

const Main = () => {
  const [dataEntries, setDataEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [endOfLine, setEndOfLine] = useState(false);
  const mod = [0, 1, 2, 3, 4, 5];

  const getImages = async (tags = "", more = false) => {
    setLoading(true);
    const { status, data } = await api.post("/images", {
      tags,
    });
    if (status === 200) {
      data.reverse();
      if (
        data.length < 15 ||
        (searchQuery &&
          dataEntries[dataEntries.length - 1].id === data[data.length - 1].id)
      ) {
        setEndOfLine(true);
      }
      let processedData = "";
      if (more) {
        processedData = data.slice(
          data.findIndex((e) => e.id === dataEntries[dataEntries.length - 1].id)
        );

        if (
          processedData.length === 1 &&
          dataEntries.find((e) => e.id === processedData[0].id)
        ) {
          notification(
            "warning",
            "No new food for now :( Try again in a few moments~"
          );
          processedData = [];
        } else {
          notification(
            "success",
            `Got ${processedData.length} new foods for you!`
          );
        }

        processedData = [...dataEntries, ...processedData];
      } else {
        notification("success", `Got you some food, enjoy!`);
      }
      setDataEntries(processedData || data);
    } else {
      notification(
        "error",
        `Something went wrong in our kitchen, sorry about that :( Try again in a few moments.`
      );
    }
    setLoading(false);
  };

  const buttonClick = () => {
    setDataEntries([]);
    setEndOfLine(false);
    getImages(searchQuery);
  };

  const moreButton = () => {
    getImages(searchQuery, true);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <TopBar
        onClick={() => {
          setSearchQuery("");
          setDataEntries([]);
          setEndOfLine(false);
          getImages();
        }}
      />

      <div
        style={{
          maxHeight: "calc(100vh - 3rem)",
          overflowY: "scroll",
          paddingTop: "2.5rem",
        }}
      >
        <Container>
          <Alert variant="danger">
            DISCLAIMER! All content from this website is from a 3rd party api, therefore I cannot control what the 3rd party returns. 
          </Alert>
          <Row className="mb-4 d-flex justify-content-center">
            <Col md="6">
              <FormControl
                placeholder="Search tags..."
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </Col>
            <Col md="2">
              <Button
                onClick={buttonClick}
                style={{
                  backgroundColor: "#1572A1",
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Col>
          </Row>
          <Row>
            {mod.map((modValue) => {
              return (
                <Col key={modValue}>
                  {dataEntries.map((e, index) => {
                    if (index % 6 === modValue) {
                      return <ImageCard key={index} entry={e} />;
                    }
                  })}
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center d-flex mb-3">
            {endOfLine ? (
              <Badge bg="secondary">We're out of food :(</Badge>
            ) : loading ? (
              <ReactLoading
                type="bars"
                style={{ height: "3rem", width: "5rem", color: "#1572A1" }}
              />
            ) : (
              <Button
                bg=""
                style={{
                  backgroundColor: "#1572A1",
                  width: "auto",
                }}
                onClick={moreButton}
              >
                Get more food!
              </Button>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main;
