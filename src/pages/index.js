import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Badge,
  FormControl,
  Button,
} from "react-bootstrap";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import TopBar from "../components/TopBar";
import ImageCard from "../components/ImageCard";
import { api } from "../helpers";

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
          dataEntries[dataEntries.length - 1].id._text ===
            data[data.length - 1].id._text)
      ) {
        setEndOfLine(true);
      }
      let processedData = "";
      if (more) {
        processedData = data.slice(
          data.findIndex(
            (e) => e.id._text === dataEntries[dataEntries.length - 1].id._text
          )
        );

        if (
          processedData.length === 1 &&
          dataEntries.find((e) => e.id._text === processedData[0].id._text)
        ) {
          processedData = [];
        }

        processedData = [...dataEntries, ...processedData];
      }
      setDataEntries(processedData || data);
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
                      return (
                        <ImageCard
                          key={index}
                          title={e.title._text || "Untitled"}
                          imageSrc={
                            e.link.find(
                              (link) => link?._attributes.type === "image/jpeg"
                            )?._attributes.href
                          }
                        />
                      );
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
                style={{ height: "auto", width: "25vh", color: "#1572A1" }}
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
