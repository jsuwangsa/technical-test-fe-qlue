import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLoginAsync } from "../redux/actions/UserAction";
import { useHistory } from "react-router-dom";
import Loading from "../components/spinner/Loading";
import Logo from "../assets/images/qlue.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.UserReducer);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const cb = (token) => {
      history.push("/dashboard");
    };
    dispatch(getLoginAsync(email, password, cb));
  }

  return (
    <>
      {user.loading === true ? <Loading /> : ""}
      <div className="login-container">
        <div className="login-form">
          <img className="login-logo" src={Logo} alt="Company Logo" />
          <h5 className="login-text">Please Login to continue</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 email" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 password" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
