import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TopBar from "../components/TopBar";
import ImageCard from "../components/ImageCard";

const Main = () => {
  return (
    <>
      <TopBar />

      <Container className="pt-4">
        <Row>
          <Col>
            <ImageCard
              title="Abcd"
              imageSrc="https://media2.giphy.com/media/jnbcqYSYIhweux207k/giphy.gif?cid=ecf05e471jz6ahvlhy7vtztrrs2b5yab68vxj7qt0z10pr7u&rid=giphy.gif&ct=g"
              desc="shinyuna"
            />
          </Col>
          <Col>
            <ImageCard
              title="IU"
              imageSrc="https://media4.giphy.com/media/qyFv93BMlLdhYoJ1f1/giphy.gif?cid=ecf05e47vvwfs4w3dx87upd4hozacoz3ixfgczxcri9tocba&rid=giphy.gif&ct=g"
            />
          </Col>
          <Col>
            <ImageCard
              title="ghijk"
              imageSrc="https://media4.giphy.com/media/22pV3ZdyQGNs4/giphy.gif?cid=ecf05e47fwrcdwhiemc0wzuaw858prwtdr0pl0mmlztv8ane&rid=giphy.gif&ct=g"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
