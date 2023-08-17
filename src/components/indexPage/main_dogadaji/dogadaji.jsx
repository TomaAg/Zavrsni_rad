import React, { Component } from "react";
import Dogadaj from "./dogadaj";
import "./dogadaji.css";
import NewDogadaj from "../new_windows/newDogadaj";

class Dogadaji extends Component {
  handleDogadaji = () => {
    let newArray = [...this.props.dogadaji];
    let x;
    for (let i = 0; i < newArray.length - 1; i++) {
      for (let j = i + 1; j < newArray.length; j++) {
        let time = newArray[i].sat;
        let date = newArray[i].datum + " " + time;
        let dateFull = new Date(date);
        let time2 = newArray[j].sat;
        let date2 = newArray[j].datum + " " + time2;
        let dateFull2 = new Date(date2);

        if (dateFull.getTime() > dateFull2.getTime()) {
          x = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = x;
        }
      }
    }

    return newArray.map((dogadaj) => (
      <Dogadaj
        dogadaj={dogadaj}
        handleViseDogadaj={(d, t) => this.props.handleViseDogadaj(d, t)}
      />
    ));
  };

  render() {
    return (
      <>
        <div className="dogadaji-sve">
          <div className="dogadaji-naslov">
            <p>
              {this.props.buttons} - {this.props.datum}
            </p>
          </div>
          <div className="dogadaji-main">
            {this.props.dogadaji == 0 ? (
              <div className="nema-dogadaja">nema dogadaja</div>
            ) : (
              this.handleDogadaji()
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Dogadaji;
