import React from "react";

import { FormLogin } from "./style";

const Login = () => {
  return (
    <FormLogin>
      <div className="login">
        <div className="imageGood">
          <h1>Imagem</h1>
        </div>
        <div className="container">
          <div className="text">
            <h1>Welcome</h1>
            <h2>Let's log you in quickly</h2>
          </div>
          <form className="form">
            <div className="input">
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div>
              <bottom type="submit"> Login </bottom>
            </div>
          </form>
        </div>
      </div>
    </FormLogin>
  );
};

export default Login;
