import React, { useState } from "react";
import { Form, Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";

function LoginForm() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const intl = useIntl();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
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
        setErrorMessage(intl.formatMessage({ id: "auth-error" }));
      }
    } catch (error) {
      setErrorMessage(
        `${intl.formatMessage({ id: "auth-error" })}: ${error.message}`
      );
    }
  };

  return (
    <>
      <h1 className="main-title">
        <FormattedMessage id="main-title" />
      </h1>
      <Image
        src="header_robots.png"
        alt="Robots Header"
        className="header-image"
      />

      <Container className="login-container">
        <h2 className="auth-title">
          <FormattedMessage id="auth-title" />
        </h2>

        <Form>
          <Form.Group className="form-group">
            <Form.Label>
              <FormattedMessage id="auth-user" />
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>
              <FormattedMessage id="auth-password" />
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-container">
            <Button className="login-button" onClick={clickSubmit}>
              <FormattedMessage id="auth-log-in" />
            </Button>
            <Button
              className="cancel-button"
              onClick={() => alert("Cancelado")}
            >
              <FormattedMessage id="auth-cancel" />
            </Button>
          </div>
        </Form>

        <p className="contact-info">
          <FormattedMessage id="main-contact" /> +57 3102105253 -
          info@robot-lovers.com - @robot-lovers
        </p>
      </Container>
    </>
  );
}

export default LoginForm;
