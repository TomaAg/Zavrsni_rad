import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container-footer">
        <div className="div-col" id="footer-div">
          <h1 id="footer-h1" className="nav-text-v1">
            Index.NET
          </h1>
          <span className="nav-text-v1">&copy; 2023</span>
        </div>
        <div className="div-2">
          <div className="div-2">
            <div className="div-col ">
              <h5 className="h1- nav-text-v1">KONTAKT</h5>
              <ul className="col">
                <li className="col-text">
                  <span className="nav-text-v1">Split</span>
                </li>
                <li className="col-text">
                  <span className="nav-text-v1">FESB</span>
                </li>
                <li className="col-text">
                  <span className="nav-text-v1">021/458/431</span>
                </li>
                <li className="col-text">
                  <span className="nav-text-v1">fax:365/125</span>
                </li>
                <li className="col-text">
                  <e-mail className="nav-text-v1">e-mail:</e-mail>
                  <a
                    className="nav-text-v3"
                    href="https://www.google.com/gmail/about/"
                  >
                    toma.aglic1@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="div-col">
              <h5 className="h1- nav-text-v1">POSLOVI</h5>
              <ul className="col">
                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/studentJobPage"
                  >
                    Ugostiteljstvo i turizam
                  </a>
                </li>
                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/studentJobPage"
                  >
                    Fizički poslovi
                  </a>
                </li>
                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/studentJobPage"
                  >
                    Prodaja
                  </a>
                </li>
                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/studentJobPage"
                  >
                    Promidžba
                  </a>
                </li>
                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/studentJobPage"
                  >
                    Ostalo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="div-2">
            <div className="div-col">
              <h5 className="h1- nav-text-v1">DOGAĐANJA</h5>
              <ul className="col">
                <li className="col-text">
                  <a className="nav-text-v3" href="#">
                    Prikaz dogadaja
                  </a>
                </li>

                <li className="col-text">
                  <a
                    className="nav-text-v3"
                    href="http://localhost:3000/indexPage"
                  >
                    dojavi događaj
                  </a>
                </li>
              </ul>
            </div>

            <div className="div-col">
              <h5 className="h1- nav-text-v1">PRATITE NAS</h5>
              <ul className="col">
                <li className="col-text">
                  <a className="nav-text-v3" href="https://hr-hr.facebook.com/">
                    Facebook
                  </a>
                </li>
                <li className="col-text">
                  <a className="nav-text-v3" href="https://www.instagram.com/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
