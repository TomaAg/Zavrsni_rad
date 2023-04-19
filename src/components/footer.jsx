import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container-footer">
        <div class="div-col">
          <h1>Index.NET</h1>
          <span class="">&copy; 2023</span>
        </div>

        <div class="div-col ">
          <h5 className="h1-">KONTAKT</h5>
          <ul class="col">
            <li class="col-text">
              <span>Split</span>
            </li>
            <li class="col-text">
              <span>FESB</span>
            </li>
            <li class="col-text">
              <span>021/458/431</span>
            </li>
            <li class="col-text">
              <span>fax:365/125</span>
            </li>
            <li class="col-text">
              <e-mail>e-mail:</e-mail>
              <a href="https://www.google.com/gmail/about/">
                toma.aglic1@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div class="div-col">
          <h5 className="h1-">POSLOVI</h5>
          <ul class="col">
            <li class="col-text">
              <a href="#" class="">
                Ugostiteljstvo i turizam
              </a>
            </li>
            <li class="col-text">
              <a href="#" class="">
                Fizički poslovi
              </a>
            </li>
            <li class="col-text">
              <a href="#" class="">
                Prodaja
              </a>
            </li>
            <li class="col-text">
              <a href="#" class="">
                Promidžba
              </a>
            </li>
            <li class="col-text">
              <a href="#" class="">
                Ostalo
              </a>
            </li>
          </ul>
        </div>

        <div class="div-col">
          <h5 className="h1-">DOGAĐANJA</h5>
          <ul class="col">
            <li class="col-text">
              <a href="#">Dnevni prikaz</a>
            </li>
            <li class="col-text">
              <a href="#">Tjedni prikaz</a>
            </li>
            <li class="col-text">
              <a href="#">dojavi događaj</a>
            </li>
          </ul>
        </div>

        <div class="div-col">
          <h5 className="h1-">PRATITE NAS</h5>
          <ul class="col">
            <li class="col-text">
              <a href="https://hr-hr.facebook.com/" class="">
                Facebook
              </a>
            </li>
            <li class="col-text">
              <a href="https://www.instagram.com/" class="">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
