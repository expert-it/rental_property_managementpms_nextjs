import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const [validated, setValidated] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleActive = (type) => {
    if (type == "login") {
      setActiveForm("login");
    } else {
      setActiveForm("signup");
    }
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values, "ee");
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid Email"),
      password: Yup.string()
        .required("Password is required")
        .min(5, "Password must be of 5 character")
        .max(5, "Password must be of 5 character"),
    }),
  });

  console.log(loginFormik.errors, "error");
  return (
    <>
      <div className="signup-main-section">
        <div className="mobile-tab-buttons text-start">
          <Button
            className={`login-tab ${activeForm == "login" ? "active" : ""}`}
            onClick={() => handleActive("login")}
          >
            Login
          </Button>
          <Button
            className={`signup-tab ${activeForm == "signup" ? "active" : ""}`}
            onClick={() => handleActive("signup")}
          >
            Signup
          </Button>
        </div>

        {activeForm == "signup" && (
          <div className="signup-block p-4 pt-4">
            <div className="head-signup text-center">
              <h2>Signup</h2>
            </div>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="form-signup"
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company Name*"
                  />
                  <Form.Control.Feedback type="invalid">
                    Company name is required and can’t be empty
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Control required type="email" placeholder="Email*" />
                  <Form.Control.Feedback type="invalid">
                    Email is required and can’t be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Control
                    type="email"
                    placeholder="Re-enter Email*"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Re-enter Email is required and can’t be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Control
                    type="password"
                    placeholder="Password*"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Password is required and can’t be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <Form.Control
                    type="password"
                    placeholder="Re-enter Password*"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Re-enter Password is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom08">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Contact First Name*"
                  />
                  <Form.Control.Feedback type="invalid">
                    Contact First Name is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom09">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Contact Last Name*"
                  />
                  <Form.Control.Feedback type="invalid">
                    Contact Last Name is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom10">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company Address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Company Address is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom11">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company Address 2"
                  />
                  <Form.Control.Feedback type="invalid">
                    Company Address 2 is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom12">
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    City is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom13">
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    State is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom14">
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Zip is required
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom15">
                  <Form.Control type="tel" placeholder="Phone" required />
                  <Form.Control.Feedback type="invalid">
                    Phone Number is required and can’t be empty
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="error-all-fields">
                  <p className="m-0">
                    <span>Error:</span> Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
                <div className="succes-all-fields">
                  <p className="m-0">
                    <span>Error:</span> Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>

                <Button type="submit">Sign Up</Button>
                <div className="accnt-login text-center">
                  <span>Already have an account?</span>{" "}
                  <Button onClick={() => setActiveForm("login")}>Login</Button>
                </div>
              </Row>
            </Form>
            <div className="or-text-div text-center position-relative">
              <span>OR</span>
            </div>
            <div className="social-icon-signup">
              <ul className="d-flex justify-content-center gap-4 mt-3 p-0">
                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/google-plus.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>

                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/fb-next.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>

                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/linkedin.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeForm == "login" && (
          <div className="signup-block login-block p-4 pt-4">
            <div className="head-signup text-center">
              <h2>Login</h2>
            </div>
            <Form noValidate validated={validated} className="form-signup">
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    onBlur={loginFormik.handleBlur}
                  />
                  <Form.Control.Feedback type="invalid">
                    <Form.Control type="tel" placeholder="Phone" required />
                    {loginFormik.touched.email && loginFormik.errors.email && (
                      <span className="text-danger">
                        {loginFormik.errors.email}
                      </span>
                    )}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom04"
                  className="position-relative"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // id="password"
                    required
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                    name="password"
                    onBlur={loginFormik.handleBlur}
                  />
                  <span className="svg-pswrd-icon position-absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                    >
                      <path
                        d="M20.8125 14.7188C20.9062 14.8125 21 14.9688 21 15.125C21 15.25 20.9375 15.3438 20.875 15.4375L20.5625 15.8125C20.4688 15.9375 20.3438 16 20.1562 16C20.0625 16 19.9375 15.9688 19.875 15.9062L1.1875 1.28125C1.0625 1.21875 0.96875 1.0625 0.96875 0.90625C0.96875 0.78125 1.03125 0.6875 1.09375 0.59375L1.40625 0.1875C1.5 0.09375 1.625 0.03125 1.8125 0.03125C1.90625 0.03125 2.03125 0.0625 2.125 0.125L20.8125 14.7188ZM10.25 4.59375C10.5 4.53125 10.75 4.53125 11 4.5C12.875 4.5 14.4062 6 14.4688 7.875L10.25 4.59375ZM11.7188 11.4375C11.4688 11.5 11.2188 11.5 11 11.5C9.09375 11.5 7.5625 10.0312 7.5 8.15625L11.7188 11.4375ZM11 3.5C10.375 3.5 9.75 3.59375 9.15625 3.75L7.71875 2.59375C8.75 2.21875 9.84375 2 11 2C14.8125 2 18.1875 4.25 19.875 7.5625C19.9375 7.6875 20 7.84375 20 8.03125C20 8.1875 19.9375 8.34375 19.875 8.46875C19.4375 9.34375 18.875 10.125 18.2188 10.8125L17.0312 9.90625C17.5938 9.34375 18.0312 8.71875 18.4062 8C16.9062 5.21875 14.0625 3.5 11 3.5ZM11 12.5C11.5938 12.5 12.2188 12.4375 12.8125 12.2812L14.25 13.4375C13.2188 13.7812 12.125 14 11 14C7.15625 14 3.78125 11.7812 2.09375 8.46875C2.03125 8.34375 2 8.1875 2 8C2 7.84375 2.03125 7.6875 2.09375 7.5625C2.53125 6.6875 3.09375 5.90625 3.75 5.21875L4.9375 6.125C4.375 6.6875 3.9375 7.3125 3.5625 8C5.0625 10.7812 7.90625 12.5 11 12.5Z"
                        fill="#656565"
                      />
                    </svg>
                  </span>
                  <Form.Control.Feedback type="invalid">
                    {loginFormik.touched.password &&
                      loginFormik.errors.password &&
                      // <span className="text-danger">
                      //   {loginFormik.errors.password}
                      // </span>
                      loginFormik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button onClick={loginFormik.handleSubmit}>Login</Button>
                <Link
                  href="#"
                  className="text-center pt-3 text-decoration-none"
                >
                  <span className="forgot-link">Forgot Password ?</span>
                </Link>
                <div className="accnt-login text-center m-0">
                  <span>Don't have an account?</span>{" "}
                  <Button onClick={() => setActiveForm("signup")}>
                    Signup
                  </Button>
                </div>
              </Row>
            </Form>
            <div className="or-text-div text-center position-relative">
              <span>OR</span>
            </div>
            <div className="social-icon-signup">
              <ul className="d-flex justify-content-center gap-4 mt-3 p-0">
                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/google-plus.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>

                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/fb-next.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>

                <li className="list-unstyled">
                  <Link href="#">
                    <Image
                      className="object-fit-contain"
                      src="/assets/images/linkedin.svg"
                      width={22}
                      height={22}
                      alt="logo"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
