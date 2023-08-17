import React, { Component } from "react";
import "./dogadaj.css";

class Dogadaj extends Component {
  state = {};

  FormatDate = (data) => {
    data = new Date(data);
    let dateTimeString =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    return dateTimeString; // 4/5/2021
  };

  render() {
    return (
      <div
        className="dogadaj-sve"
        onClick={() =>
          this.props.handleViseDogadaj(
            this.props.dogadaj.datum,
            this.props.dogadaj.sat
          )
        }
      >
        <div className="dogadaj-div-slika">
          <img className="dogadaj-slika" src="./logo192.png" alt="" />
        </div>
        <div className="dogadaj-text">
          <p>
            <strong>{this.props.dogadaj.događaj}</strong>
          </p>
          <div className="dogadaj-sredina">
            <span>{this.props.dogadaj.sat} </span>
            <span style={{ marginLeft: "5px" }}>
              {" "}
              {this.props.dogadaj.mjesto}
            </span>
          </div>
          <div className="dogadaj-dno">
            {/*icona*/}
            <i>{this.props.dogadaj.tipDogadaja}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Dogadaj;
