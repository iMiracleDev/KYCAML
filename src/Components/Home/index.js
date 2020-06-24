import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import websdk from "@sumsub/websdk";

import "./style.scss";

import logo from "./assets/cblive_logo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const history = useHistory();

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValidEmail(!re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };
  return (
    <>
      <div className="home">
        <div className="navigation">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="https://cbl.services/#home" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="https://cbl.services/#about" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="https://cbl.services/#services" target="_blank">
                Services
              </a>
            </li>
            <li>
              <a href="https://cbl.services/#partners" target="_blank">
                Partners
              </a>
            </li>
            <li>
              <a href="https://cbl.services/#contact" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="form-wrap" id="kyc">
          <form>
            <h4>Welcome to cb live kyc</h4>
            <div>
              <input
                className={isValidEmail ? "error" : ""}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="ENTER YOUR PHONE NUMBER"
                required
              />
            </div>

            <h5>SELECT YOUR TYPE</h5>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (validateEmail(email) && phone) {
                    history.push(`/individual/${email}/${phone}`);
                  }
                }}
              >
                Individual
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (validateEmail(email) && phone) {
                    history.push(`/corporate/${email}/${phone}`);
                  }
                }}
              >
                Corporate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
