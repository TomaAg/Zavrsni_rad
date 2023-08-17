import React, { Component } from "react";
import "./filter.css";
import logo from "./img/logo.jpg";

class Filter extends Component {
  state = {
    filtrirajVrstu1: [],
    btn: false,
    open1: "none",
  };

  handleChange = (e) => {
    let niz1 = this.state.filtrirajVrstu1;
    let postoji = niz1.filter((element) => {
      return element == e.target.value;
    });

    if (postoji == e.target.value) {
      niz1 = niz1.filter((element) => {
        return element !== e.target.value;
      });
      this.setState({ filtrirajVrstu1: niz1 });
    } else {
      niz1 = [...niz1, e.target.value];
      this.setState({ filtrirajVrstu1: niz1 });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filtrirajVrstu1 !== this.state.filtrirajVrstu1) {
      this.props.handleFiltrirajVrstu(this.state.filtrirajVrstu1);
    }
  }

  handleBtnFilter = () => {
    if (this.state.open1 == "none") {
      this.setState({ open1: "flex" });
      this.setState({ btn: true });
    } else {
      this.setState({ open1: "none" });
      this.setState({ btn: false });
    }
  };

  render() {
    return (
      <>
        <div className="filter-container-up">
          <div className="filter-container">
            <h3 className="filter-text">Filter</h3>
            <button className="filter-btn-840" onClick={this.handleBtnFilter}>
              Filtriraj kategoriju!
            </button>
            <div
              className="div-open"
              style={
                this.state.btn
                  ? {
                      "--open1": this.state.open1,
                    }
                  : { position: "relative" }
              }
            >
              <div>
                <form
                  className="div-filter-checkbox   "
                  onChange={this.handleChange}
                >
                  <input
                    className="posao-span-v1 "
                    type="checkbox"
                    value={"[select all]"}
                    id="[select all]"
                  ></input>
                  <label className="posao-span-v1" for="[select all]">
                    {"[select all]"}
                  </label>
                </form>
                <div
                  className="div-filter-checkbox "
                  onChange={this.handleChange}
                >
                  <input
                    className="posao-span-v1"
                    type="checkbox"
                    value={"fizički poslovi"}
                    id="fizički poslovi"
                  ></input>
                  <label className="posao-span-v1" for="fizički poslovi">
                    fizički poslovi
                  </label>
                </div>
                <div
                  className="div-filter-checkbox  "
                  onChange={this.handleChange}
                >
                  <input
                    className="posao-span-v1"
                    type="checkbox"
                    value={"informatički poslovi"}
                    id="informatički poslovi"
                  ></input>
                  <label className=" posao-span-v1" for="informatički poslovi">
                    informatički poslovi
                  </label>
                </div>
                <div
                  className="div-filter-checkbox "
                  onChange={this.handleChange}
                >
                  <input
                    id="intelektualni poslovi"
                    type="checkbox"
                    value={"intelektualni poslovi"}
                  ></input>
                  <label className=" posao-span-v1" for="intelektualni poslovi">
                    intelektualni poslovi
                  </label>
                </div>
                <div
                  className="div-filter-checkbox  "
                  onChange={this.handleChange}
                >
                  <input id="ostalo" type="checkbox" value={"ostalo"}></input>
                  <label className="posao-span-v1" for="ostalo">
                    ostalo
                  </label>
                </div>
                <div
                  className="div-filter-checkbox   "
                  onChange={this.handleChange}
                >
                  <input id="prodaja" type="checkbox" value={"prodaja"}></input>
                  <label className="posao-span-v1" for="prodaja">
                    prodaja
                  </label>
                </div>
                <div
                  className="div-filter-checkbox   "
                  onChange={this.handleChange}
                >
                  <input
                    id="promidžba"
                    type="checkbox"
                    value={"promidžba"}
                  ></input>
                  <label className="posao-span-v1" for="promidžba">
                    promidžba
                  </label>
                </div>
                <div
                  className="div-filter-checkbox  "
                  onChange={this.handleChange}
                >
                  <input
                    id="ugostiteljstvo i turizam"
                    type="checkbox"
                    value={"ugostiteljstvo i turizam"}
                  ></input>
                  <label
                    className="posao-span-v1"
                    for="ugostiteljstvo i turizam"
                  >
                    ugostiteljstvo i turizam
                  </label>
                </div>
                <div
                  className="div-filter-checkbox  "
                  onChange={this.handleChange}
                >
                  <input
                    id="uredski poslovi"
                    type="checkbox"
                    value={"uredski poslovi"}
                  ></input>
                  <label className="posao-span-v1" for="uredski poslovi">
                    uredski poslovi
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-div-img">
            <img src={logo} alt="" />
            <img src={logo} alt="" className=" filter-840" />
            <img src={logo} alt="" className=" filter-840" />
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
