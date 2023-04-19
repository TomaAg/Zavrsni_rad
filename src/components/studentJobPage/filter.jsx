import React, { Component } from "react";
import "./filter.css";

class Filter extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="filter-container-up">
          <div className="filter-container">
            <h3>Filter</h3>
            <div className="div-filter-checkbox">
              <input type="checkbox"></input>
              <label>Ugostiteljstvo i turizam</label>
            </div>
            <div className="div-filter-checkbox">
              <input type="checkbox"></input>
              <label>Fizički poslovi</label>
            </div>
            <div className="div-filter-checkbox">
              <input type="checkbox"></input>
              <label>Promidžba</label>
            </div>
            <div className="div-filter-checkbox">
              <input type="checkbox"></input>
              <label>Prodaja</label>
            </div>
            <div className="div-filter-checkbox">
              <input type="checkbox"></input>
              <label>Ostalo</label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
