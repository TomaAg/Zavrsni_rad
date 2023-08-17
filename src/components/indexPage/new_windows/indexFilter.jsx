import React, { Component } from "react";
import "./indexFilter.css";
import { IoIosCloseCircle } from "react-icons/io";

class IndexFilter extends Component {
  state = {
    objekt: [...this.props.filterTipDogadaja],
    niz: [...this.props.bojaTocke],
  };
  handleFilter = (e) => {
    let newObjekt = this.state.objekt;
    let newArr = newObjekt.map((el) => {
      if (el == e.target.textContent) {
        return (el = "-" + e.target.textContent);
      } else if (el == "-" + e.target.textContent) {
        return (el = String(e.target.textContent));
      } else return el;
    });
    this.setState({ objekt: newArr });
  };

  handlePromjenaTocaka = (e) => {
    let novi = this.state.niz;
    if (novi[e] == "red") {
      novi[e] = "green";
    } else if (novi[e] == "green") {
      novi[e] = "red";
    }
  };

  render() {
    return (
      <div className="indexFilter-sve">
        <div className="indexFilter-content">
          <div className="indexFilter-naslov">
            <strong>Filtriranje kategorija:</strong>
          </div>
          <div
            className="indexFilter-izbori"
            onClick={(e) => this.handleFilter(e)}
          >
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(0)}
            >
              <span>Sport</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[0] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(1)}
            >
              <span>Mjuzza</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[1] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(2)}
            >
              <span>Izložba</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[2] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(3)}
            >
              <span>Edukacija</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[3] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(4)}
            >
              <span>Film</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[4] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(5)}
            >
              <span>Predstava</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[5] }}
              />
            </div>
            <div
              className="index-div-kucica"
              onClick={() => this.handlePromjenaTocaka(6)}
            >
              <span>Ostalo</span>
              <div
                className="indexFilter-div-tocka"
                style={{ "--boja-tocke": this.state.niz[6] }}
              />
            </div>
          </div>
          <div className="indexFilter-button">
            <button
              onClick={() => {
                this.props.handleFilterTipDogadaja(this.state.objekt);
                this.props.handleBojaTocke(this.state.niz);
                this.props.handleFilterOpen();
              }}
            >
              Primjeni filtere
            </button>
          </div>
        </div>
        <div className="indexFilter-ikona">
          <IoIosCloseCircle
            id="indexFilter-ikona-ikona"
            onClick={this.props.handleFilterOpen}
          />
        </div>
      </div>
    );
  }
}

export default IndexFilter;
