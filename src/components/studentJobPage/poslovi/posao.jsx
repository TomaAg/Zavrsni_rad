import React, { Component } from "react";
import "./posao.css";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

class Posao extends Component {
  render() {
    return (
      <>
        <div className={true ? "posao-dugo" : ""}>
          <div className={true ? "posao-kratko" : ""}>
            <div className="div-kratko">
              <div className="gornji-dio">
                <h3>
                  <strong>{this.props.posao.ime}</strong>
                </h3>
                <p className="p-cijena">
                  <strong> {this.props.posao.cijena}EUR </strong>/po satu
                </p>
              </div>
              <p>
                <IoLocationSharp className="icons" />
                {this.props.posao.lokacija}
              </p>
              <p>
                <FaBuilding className="icons" />
                {this.props.posao.poslodavac}
              </p>
              <p>
                <FaUserAlt className="icons" />
                {this.props.posao.brZaposlenika}
              </p>
            </div>
            <button className="btn-vise">Prikazi vise</button>
          </div>
          <div className={true ? "posao-nastavak" : ""}>
            <hr />
            <p>Opis posla</p>
            <span>{this.props.posao.opisPosla}</span>
            <p>Kontakt informacije</p>
            <span>{this.props.posao.kontakt}</span>
            <p>Napomena uz kontakt</p>
            <span>{this.props.posao.napomenaUzKontakt}</span>
            <p>Natjecaj vrijedi od</p>
            <span>{this.props.posao.natjecajOd}</span>
            <p>Natjecaj vrijedi do</p>
            <span>{this.props.posao.natjecajDo}</span>
            <p>Pocetak obavljanja</p>
            <span>{this.props.posao.pocetakObavljanja}</span>
            <p>Napomena uz vrijeme obavljanja</p>
            <span>{this.props.posao.napomenaUzVrijeme}</span>
            <p>Napomena uz cijenu</p>
            <span>{this.props.posao.napomenaUzCijenu}</span>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default Posao;
