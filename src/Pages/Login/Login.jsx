import React, { useEffect, useState } from "react";

import { FormLogin } from "./style";

import { useTransition, animated, config } from "react-spring";

import cidade from "./cidade.gif";


const Login = () => {

  return (
    <FormLogin>
      <div className="login">
        <div className="imageGood">
          <img src={cidade} alt="cidade gif"></img>
          <div>
            <h1>Cidadão Presente</h1>
            <h1>Mobilização Social</h1>
          </div>
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
            <div className="button-container">
              <button className="button" type="submit"> Login </button>
              <div className="singupText">
                <h1>don't have an account?</h1>
                <h2>sing-up</h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormLogin>
  );
};

export default Login;
