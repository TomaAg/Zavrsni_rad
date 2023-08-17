import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./homePage.css";
import Footer from "../footer";
import "../cssAll.css";

class HomePage extends Component {
  render() {
    return (
      <div className="all-home">
        <div className="header-home">
          <h1 className="title-name">Index.NET</h1>
        </div>

        <main className="main-home">
          <div className="div-btn-home">
            <Link to="/indexPage">
              <button className="btn-home">Info zone</button>
            </Link>
            <Link to="/studentJobPage">
              <button className="btn-home">Studenski poslovi</button>
            </Link>
          </div>

          <div className="div-about">
            <h2 className="title-about">About us:</h2>
            <p className="text-about" name="" id="" cols="30" rows="10">
              dijsnfasidnf sdafno sadnfio nasodfn sadn foinsadof nodsnfo nsdfn
              oisda fiosdoifn osandoi nsdan foinsdaofn osdnfo nsdaofn dskfn sdnf
              sakndkl asndflknasd klfnsadkn flksndafklnsdakfn lnsdakfn
              sdkanflkas dnfsnda lknsdkanflk sndlf n
            </p>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
