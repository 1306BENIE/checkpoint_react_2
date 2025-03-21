import React from "react";
import Player from "./Player";
import players from "../players";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container>
      <h2
  className="text-center my-4 text-uppercase fw-bold"
  style={{
    color: "#558E", // Or couleur or
    textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)", // Ombre portée
    fontSize: "2.5rem", // Augmenter la taille
    letterSpacing: "2px" // Espacement des lettres
  }}
>
  Cartes des joueurs ⚽
</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
