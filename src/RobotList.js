import React, { useState, useEffect } from "react";
import { Table, Container, Image, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RobotList.css";
import RobotDetail from "./RobotDetail";

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los robots");
        }
        return response.json();
      })
      .then((data) => setRobots(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Container className="robot-list-container">
      <h1 className="main-title">
        <FormattedMessage id="main-title" />
      </h1>
      <Image src="header_robots.png" alt="Robots" className="header-image" />

      <Row>
        <Col md={selectedRobot ? 8 : 12}>
          <Table striped bordered hover className="robot-table">
            <thead>
              <tr>
                <th className="table-header">
                  <FormattedMessage id="robots-id" />
                </th>
                <th className="table-header">
                  <FormattedMessage id="robots-name" />
                </th>
                <th className="table-header">
                  <FormattedMessage id="robots-model" />
                </th>
                <th className="table-header">
                  <FormattedMessage id="robots-manufacturer" />
                </th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id}>
                  <td>{robot.id}</td>
                  <td
                    onClick={() => setSelectedRobot(robot)}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "blue",
                    }}
                  >
                    {robot.nombre}
                  </td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {selectedRobot && (
          <Col md={4}>
            <RobotDetail robot={selectedRobot} />
          </Col>
        )}
      </Row>

      <p className="contact-info">
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </Container>
  );
}

export default RobotList;
