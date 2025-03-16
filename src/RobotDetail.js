import React from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RobotList.css";

function RobotDetail({ robot }) {
  return (
    <Card className="shadow-lg border-primary text-center mt-4">
      <Card.Body>
        {!robot ? (
          <p className="text-muted">
            <FormattedMessage id="robots-no-selection" />
          </p>
        ) : (
          <>
            <Card.Title className="fw-bold text-primary">
              {robot.nombre}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <img
                src={robot.imagen}
                alt={robot.nombre}
                className="robot-detail-image"
              />
            </div>
            <Card.Text className="mt-3 text-start">
              <p>
                <strong>
                  📅 <FormattedMessage id="robots-year" />:
                </strong>{" "}
                {robot.añoFabricacion}
              </p>
              <p>
                <strong>
                  ⚡ <FormattedMessage id="robots-processing" />:
                </strong>{" "}
                {robot.capacidadProcesamiento} GHz
              </p>
              <p>
                <strong>
                  😄 <FormattedMessage id="robots-humor" />:
                </strong>{" "}
                {robot.humor}
              </p>
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default RobotDetail;
