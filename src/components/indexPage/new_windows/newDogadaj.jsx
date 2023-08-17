import React, { Component } from "react";
import "./newDogadaj.css";

class NewDogadaj extends Component {
  state = {
    newObject: {
      događaj: "",
      datum: "08/10/2022",
      sat: "",
      mjesto: "",
      opis_dogadaja: "",
      saznaj_vise_link: "",
      tipDogadaja: "",
      ulaznica: "",
    },
  };

  handleChange = (e) => {
    const value = e.target.value;
    const newEr = this.state.newObject;
    const name = e.target.name;
    newEr[name] = value;
    this.setState({ newObject: newEr });
  };

  handleChangeDate = (e) => {
    const value = e.target.value;
    const newEr = this.state.newObject;
    const name = e.target.name;
    let newDate = new Date(newEr[name]);

    if (e.target.id == "dan") {
      newDate.setDate(value);
    } else if (e.target.id == "mjesec") {
      newDate.setMonth(value - 1);
    } else if (e.target.id == "godina") {
      newDate.setFullYear(value);
    }

    newEr[name] = String(newDate);

    this.setState({ newObject: newEr });
  };

  handleSlanje = () => {
    let amo = this.state.newObject;

    amo["datum"] = this.FormatDate(amo["datum"]);
    this.props.handleNewDogadaj(amo);
  };

  FormatDate = (data) => {
    data = new Date(data);
    let dateTimeString =
      "0" +
      (data.getMonth() + 1) +
      "/" +
      data.getDate() +
      "/" +
      data.getFullYear();
    return dateTimeString; // 4/5/2021
  };

  render() {
    return (
      <div className="newDogadaj-sve">
        <div className="newDogadaj-sve-content">
          <div className="newDogadaj-gore">
            <h3>Predloži događaj</h3>
            <button
              className="index-new-btn"
              onClick={this.props.handleNewDogadajOpen}
            >
              Zatvori
            </button>
          </div>
          <div className="newDogadaj-sredina">
            <label>Događaji</label>
            <input
              type="text"
              placeholder="npr. Koncert u Kocke"
              name="događaj"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="">Tip događaja</label>

            <select
              className=""
              name="tipDogadaja"
              id="godina"
              onChange={this.handleChange}
            >
              <option disabled selected style={{ display: "none" }}>
                Tip dogadaja
              </option>
              <option value="Sport">Sport</option>
              <option value="Mjuzza">Mjuzza</option>
              <option value="Izložba">Izložba</option>
              <option value="Edukacija">Edukacija</option>
              <option value="Film">Film</option>
              <option value="Predstava">Predstava</option>
              <option value="Ostalo">Ostalo</option>
            </select>
            <label>Datum</label>
            <div className="newDogadaj-select" onChange={this.handleChangeDate}>
              <select className="" name="datum" id="dan">
                <option disabled selected style={{ display: "none" }}>
                  Dan
                </option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className="" name="datum" id="mjesec">
                <option disabled selected style={{ display: "none" }}>
                  Mjesec
                </option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="" name="datum" id="godina">
                <option disabled selected style={{ display: "none" }}>
                  Godina
                </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <label>Sat</label>
            <input
              type="text"
              placeholder="npr. 16:00h"
              name="sat"
              onChange={this.handleChange}
            ></input>
            <label>Mjesto</label>
            <input
              type="text"
              placeholder="npr. Split"
              name="mjesto"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="">Cijena ulaznice</label>
            <input
              type="number"
              name="ulaznica"
              onChange={this.handleChange}
              placeholder="npr. 16"
            />
            <label>Opis događaja</label>
            <textarea
              name="opis_dogadaja"
              id=""
              cols="30"
              rows="10"
              placeholder="npr. Nastupaju Roko i Luka"
              onChange={this.handleChange}
            ></textarea>
            <label>Saznaj više link</label>
            <input
              type="text"
              name="saznaj_vise_link"
              placeholder="npr. https://www.youtube.com/"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="newDogadaj-dole">
            <button
              className="index-btn-new-posalji"
              onClick={() => (
                this.handleSlanje(), this.props.handleNewDogadajOpen()
              )}
            >
              Pošalji
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDogadaj;
