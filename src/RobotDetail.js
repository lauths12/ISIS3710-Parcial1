import React from "react";
import { Card } from "react-bootstrap";

function RobotDetail({ robot }) {
  return (
    <Card className="shadow-lg border-primary text-center mt-4">
      <Card.Body>
        {!robot ? (
          <p className="text-muted">Selecciona un robot para ver los detalles</p>
        ) : (
          <>
            <Card.Title className="fw-bold text-primary">{robot.nombre}</Card.Title>
            <div className="d-flex justify-content-center">
              <img
                src={robot.imagen}
                alt={robot.nombre}
              />
            </div>
            <Card.Text className="mt-3 text-start">
              <p><strong>🛠 Modelo:</strong> {robot.modelo}</p>
              <p><strong>🏢 Empresa:</strong> {robot.empresaFabricante}</p>
              <p><strong>📅 Año de Fabricación:</strong> {robot.añoFabricacion}</p>
              <p><strong>⚡ Procesamiento:</strong> {robot.capacidadProcesamiento} GHz</p>
              <p><strong>😄 Humor:</strong> {robot.humor}</p>
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default RobotDetail;

