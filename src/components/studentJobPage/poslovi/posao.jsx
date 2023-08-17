import React, { Component } from "react";
import "./posao.css";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

class Posao extends Component {
  state = {
    btnVise: false,
  };

  handleBtnVise = () => {
    this.setState({ btnVise: !this.state.btnVise });
  };

  FormatDate = (data) => {
    data = new Date(data);
    let dateTimeString =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    return dateTimeString; // 4/5/2021
  };
  render() {
    return (
      <>
        <div className={this.state.btnVise ? "posao-dugo" : ""}>
          <div
            className={
              !this.state.btnVise ? "posao-kratko" : "posao-kratko-vise"
            }
          >
            <div className="div-kratko">
              <div className="gornji-dio">
                <h3 className="posao-span-v2">
                  <strong>{this.props.posao.ime}</strong>
                </h3>
                <p className="p-cijena posao-span-v2">
                  <strong> {this.props.posao.cijena} EUR </strong>/po satu
                </p>
              </div>
              <p className="posao-span-v2">
                <IoLocationSharp className="icons" />
                {this.props.posao.lokacija}
              </p>
              <p className="posao-span-v2">
                <FaBuilding className="icons" />
                {this.props.posao.poslodavac}
              </p>
              <p className="posao-span-v2">
                <FaUserAlt className="icons" />
                {this.props.posao.brZaposlenika}
              </p>
            </div>
            <button className="btn-vise" onClick={this.handleBtnVise}>
              Prikazi vise
            </button>
          </div>

          <div
            className={this.state.btnVise ? "posao-nastavak" : "nastavak-none"}
          >
            <div className="div-nastavak-content-2">
              <span className="posao-span-v1">Opis posla:</span>
              <span className="posao-span-v2">
                {this.props.posao.opisPosla}
              </span>
            </div>

            <div className="div-nastavak">
              <div className="div-nastavak-content">
                <span className="posao-span-v1">Kontakt informacije:</span>
                <span className="posao-span-v2">
                  {this.props.posao.kontakt}
                </span>
              </div>
              <div className="div-nastavak-content">
                <span className="posao-span-v1">Napomena uz kontakt:</span>
                <span className="posao-span-v2">
                  {this.props.posao.napomenaUzKontakt}
                </span>
              </div>
            </div>

            <div className="div-nastavak">
              <div className="div-nastavak-content">
                <span className="posao-span-v1">Natjecaj vrijedi od:</span>
                <span className="posao-span-v2">
                  {this.FormatDate(this.props.posao.natjecajOd)}
                </span>
              </div>
              <div className="div-nastavak-content">
                <span className="posao-span-v1">Natjecaj vrijedi do:</span>
                <span className="posao-span-v2">
                  {this.FormatDate(this.props.posao.natjecajDo)}
                </span>
              </div>
            </div>

            <div className="div-nastavak">
              <div className="div-nastavak-content">
                <span className="posao-span-v1">Pocetak obavljanja:</span>
                <span className="posao-span-v2">
                  {this.FormatDate(this.props.posao.pocetakObavljanja)}
                </span>
              </div>
              <div className="div-nastavak-content">
                <span className="posao-span-v1">
                  Napomena uz vrijeme obavljanja:
                </span>
                <span className="posao-span-v2">
                  {this.props.posao.napomenaUzVrijeme}
                </span>
              </div>
            </div>

            <div className="div-nastavak-content-2">
              <span className="posao-span-v1">Napomena uz cijenu:</span>
              <span className="posao-span-v2">
                {this.props.posao.napomenaUzCijenu}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Posao;
