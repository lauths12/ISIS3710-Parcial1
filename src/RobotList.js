import React, { useState, useEffect } from "react";
import { Table, Container, Button, Row, Col, Card } from "react-bootstrap";
import RobotDetail from "./RobotDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al intentar obtener los robots");
        }
        return response.json();
      })
      .then((data) => setRobots(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Container className="text-center p-4">
      <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Adopta un Robot con Robot Lovers!</h1>

      <Row>
        <Col md={selectedRobot ? 8 : 12}>
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Listado de robots</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                  <td>
                    <Button variant="primary" onClick={() => setSelectedRobot(robot)}>
                      Ver Detalles
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {selectedRobot && (
          <Col md={4}>
            <Card className="shadow-lg border-primary">
              <Card.Body>
                <Button variant="danger" size="sm" onClick={() => setSelectedRobot(null)}>
                  ✖ Cerrar
                </Button>
                <RobotDetail robot={selectedRobot} />
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </Container>
  );
}

export default RobotList;
