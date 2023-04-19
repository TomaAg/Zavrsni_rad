import React, { Component } from "react";
import "./newPosao.css";

class NewPosao extends Component {
  state = {
    er: {
      id: 999,
      ime: "",
      cijena: 0,
      lokacija: " ",
      poslodavac: "",
      brZaposlenika: 0,
      opisPosla: "",
      kontakt: "",
      napomenaUzKontakt: "",
      natjecajOd: "02.05.2022.",
      natjecajDo: "",
      pocetakObavljanja: "",
      napomenaUzVrijeme: "",
      napomenaUzCijenu: "",
    },
  };

  handleEr = (er) => {
    console.log(er);
  };

  handleChange = (e) => {
    const value = e.target.value;
    const newEr = this.state.er;
    const name = e.target.name;
    newEr[name] = value;
    this.setState({ er: newEr });
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
                placeholder=""
                maxlength="25"
                name="ime"
                onChange={this.handleChange}
              ></input>
              <label>Iznos mijesečna plača</label>
              <input
                type="numbre"
                placeholder="npr. Koncert u Kocke"
                maxlength="5"
                name="cijena"
                onChange={this.handleChange}
              ></input>
              <label>Lokacija</label>
              <input
                type="text"
                placeholder=""
                maxlength="40"
                name="lokacija"
                onChange={this.handleChange}
              ></input>
              <label>Naziv firme poslodavca</label>
              <input
                type="text"
                placeholder=""
                maxlength="40"
                name="poslodavac"
                onChange={this.handleChange}
              ></input>
              <label>Broj zaposlenika</label>
              <input
                type="numbre"
                placeholder="npr. Koncert u Kocke"
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
                placeholder=""
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
              {/*kjsdnkjfsdjnksdfjknsfdjnksafdknknjfasknjasfjknsafjknfsdajkasfdjkkjfasnjknfasjknfsdnjkfsd*/}
              <label>Natječaj vrijedi od</label>
              <div className="div-select">
                <form
                  type="date"
                  action=""
                  onChange={this.handleChange}
                  name="natjecajOd"
                >
                  <select className="div-noInput" name="natjecajOd" id="">
                    <option disabled selected style={{ display: "none" }}>
                      Dan
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                  </select>
                  <select className="div-noInput" name="natjecajOd" id="">
                    <option disabled selected style={{ display: "none" }}>
                      Mjesec
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>
                  <select className="div-noInput" name="natjecajOd" id="">
                    <option disabled selected style={{ display: "none" }}>
                      Godina
                    </option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </form>
              </div>
              <label>Natječaj vrijedi do</label>
              <div className="div-select">
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Dan
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                </select>
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Mjesec
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <select
                  className="div-noInput"
                  name="natjecajDo"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Godina
                  </option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                </select>
              </div>
              <label>Početak obavljanja</label>
              <div className="div-select">
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Dan
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                </select>
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Mjesec
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <select
                  className="div-noInput"
                  name="pocetakObavljanja"
                  id=""
                  onChange={this.handleChange}
                >
                  <option disabled selected style={{ display: "none" }}>
                    Godina
                  </option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
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
              <input
                type="text"
                name="napomenaUzCijenu"
                onChange={this.handleChange}
              ></input>
              <button
                className="btn-posalji "
                onClick={() => this.handleEr(this.state.er)}
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
