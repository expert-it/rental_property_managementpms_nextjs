import React from "react";
import { Header } from "../../public/layout/header";
import Signup from "./components/signup";
// import Login from "./components/login";

const AuthComponent = () => {
  return (
    <>
      <Header />
      <div className="main-sigup-login">
        <Signup />
        {/* <Login /> */}
      </div>
      <div className="copyright-footer text-center">
        <p className="m-0 pb-3">Copyright © 2023 | Rentsoft</p>
      </div>
    </>
  );
};

export default AuthComponent;
