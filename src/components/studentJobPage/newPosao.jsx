import React, { Component } from "react";
import "./newPosao.css";

class NewPosao extends Component {
  state = {
    newObject: {
      id: 999,
      vrstaPosla: "",
      ime: "",
      cijena: 0,
      lokacija: " ",
      poslodavac: "",
      brZaposlenika: 0,
      opisPosla: "",
      kontakt: "",
      napomenaUzKontakt: "",
      natjecajOd: "10/3/2023",
      natjecajDo: "10/3/2023",
      pocetakObavljanja: "10/3/2023",
      napomenaUzVrijeme: "",
      napomenaUzCijenu: "",
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

  render() {
    return (
      <>
        <div id="sve">
          <div class="container-newposao">
            <div class="newposao-naslov">
              <h3>Predloži posal</h3>
              <button
                className="btn-zatvori"
                onClick={this.props.handleNewPosaoOpen}
              >
                Zatvori
              </button>
            </div>
            <div class="newposao-ostalo">
              <label>Vrsta posla</label>
              <input
                type="text"
                placeholder="npr. Pranje posuđa"
                maxlength="25"
                name="ime"
                onChange={this.handleChange}
              ></input>
              <label>Iznos mijesečna plača</label>
              <input
                type="numbre"
                placeholder="npr. 6"
                maxlength="5"
                name="cijena"
                onChange={this.handleChange}
              ></input>
              <label>Lokacija</label>
              <input
                type="text"
                placeholder="npr. Split"
                maxlength="40"
                name="lokacija"
                onChange={this.handleChange}
              ></input>
              <label>Naziv firme poslodavca</label>
              <input
                type="text"
                placeholder="npr. Bokeria kitchen & wine"
                maxlength="40"
                name="poslodavac"
                onChange={this.handleChange}
              ></input>
              <label>Broj zaposlenika</label>
              <input
                type="numbre"
                placeholder="npr. 2"
                maxlength="5"
                name="brZaposlenika"
                onChange={this.handleChange}
              ></input>
              <label>Opis posla</label>
              <textarea
                className="div-noInput"
                name="opisPosla"
                id=""
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
              <label>Kontakt informacije</label>
              <input
                type="text"
                placeholder="npr. 0925695595 ili fesb@gmail.com"
                name="kontakt"
                onChange={this.handleChange}
              ></input>
              <label>Napomena uz kontakt</label>
              <textarea
                className="div-noInput"
                name="napomenaUzKontakt"
                id=""
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>

              <label>Natječaj vrijedi od</label>
              <div className="div-select">
                <select
                  className="div-noInput"
                  name="natjecajOd"
                  id="dan"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Dan
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
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
                <select
                  className="div-noInput"
                  name="natjecajOd"
                  id="mjesec"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Mjesec
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  className="div-noInput"
                  name="natjecajOd"
                  id="godina"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Godina
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <label>Natječaj vrijedi do</label>
              <div className="div-select">
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id="dan"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Dan
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
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
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id="mjesec"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Mjesec
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id="godina"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Godina
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <label>Početak obavljanja</label>
              <div className="div-select">
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id="dan"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Dan
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
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
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id="mjesec"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Mjesec
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id="godina"
                  onChange={this.handleChangeDate}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Godina
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <label>Napomena uz vrijeme obavljanja</label>
              <textarea
                className="div-noInput"
                name="napomenaUzVrijeme"
                id=""
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
              <label>Napomena uz cijenu</label>
              <textarea
                type="text"
                name="napomenaUzCijenu"
                onChange={this.handleChange}
              ></textarea>
              <label>Vrsta posla:</label>
              <select
                className="div-noInput"
                name="vrstaPosla"
                id=""
                onChange={this.handleChange}
                style={{ width: "180px" }}
              >
                <option disabled selected style={{ display: "none" }}>
                  fizički poslovi
                </option>
                <option value="[select all]">{"[select all]"}</option>
                <option value="fizički poslovi">fizički poslovi</option>
                <option value="informatički poslovi">
                  informatički poslovi
                </option>
                <option value="intelektualni poslovi">
                  intelektualni poslovi
                </option>
                <option value="ostalo">ostalo</option>
                <option value="prodaja">prodaja</option>
                <option value="promidžba">promidžba</option>
                <option value="ugostiteljstvo i turizam">
                  ugostiteljstvo i turizam
                </option>
                <option value="uredski poslovi">uredski poslovi</option>
              </select>

              <button
                className="btn-posalji "
                onClick={() => {
                  this.props.handleNewPosaoOpen();
                  this.props.handleNewPosao(this.state.newObject);
                }}
              >
                Pošalji
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewPosao;
