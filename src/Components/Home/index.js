import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import websdk from "@sumsub/websdk";

import "./style.scss";

import logo from "./assets/cblive_logo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();
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
        <form>
          <h4>Type your email address and phone number:</h4>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <h5>Select your type:</h5>
          <div style={{ justifyContent: "flex-end" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (email && phone) {
                  history.push(`/individual/${email}/${phone}`);
                }
              }}
            >
              Individual
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (email && phone) {
                  history.push(`/corporate/${email}/${phone}`);
                }
              }}
            >
              Corporate
            </button>
          </div>
        </form>
      </div>

      <footer>
        <div className="logo">
          {" "}
          <img src={logo} alt="logo" />
          <a
            href="http://themeforest.net/user/theme-guru/portfolio"
            target="_blank"
          >
            © cb live services 2020
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
