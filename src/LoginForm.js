import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clickSubmit = async () => {
    const credentials = {
      login: formValues.email,
      password: formValues.password,
    };

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        setErrorMessage("");
        navigate("/robots", { state: { token: data.token } });
      } else {
        setErrorMessage("Error de autenticación");
      }
    } catch (error) {
      setErrorMessage("Error conectando con el backend: " + error.message);
    }
  };

  return (
    <Container className="text-center p-4" style={{ maxWidth: "500px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Adopta un Robot con Robot Lovers!</h1>
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Inicio de sesión</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Button style={{ backgroundColor: "#007bff", borderColor: "#007bff", marginRight: "10px" }} onClick={clickSubmit}>
          Ingresar
        </Button>
        <Button style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }} onClick={() => alert("Cancelado")}>
          Cancelar
        </Button>
      </Form>
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </Container>
  );
}

export default LoginForm;
