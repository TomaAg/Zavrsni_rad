import React, { Component } from "react";
import Posao from "./posao";
import "./poslovi.css";

class Poslovi extends Component {
  render() {
    return (
      <>
        <div className="container-posao">
          {this.props.posao.map((posao) => (
            <Posao key={posao.id} posao={posao} />
          ))}
        </div>
      </>
    );
  }
}

export default Poslovi;
