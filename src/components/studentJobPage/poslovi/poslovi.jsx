import React, { Component } from "react";
import Posao from "./posao";
import "./poslovi.css";

class Poslovi extends Component {
  handlePosaoNiz = () => {
    let i = -1;
    let y = this.props.posao.filter((posao) => {
      i++;
      return i < this.props.brojNiza && i >= this.props.brojNiza - 10;
    });

    return y;
  };

  render() {
    return (
      <>
        <div className="container-posao">
          {this.handlePosaoNiz().map((posao) => (
            <Posao key={posao.id} posao={posao} />
          ))}
        </div>
      </>
    );
  }
}

export default Poslovi;
