import React, { Component } from "react";

class NewDogadaj extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <div>
            <h3>Predloži događdaj</h3>
            <button>Zatvori</button>
          </div>
          <div>
            <label>Događaji</label>
            <input type="text" placeholder="npr. Koncert u Kocke"></input>
            <label>Datum</label>
            <select name="" id="">
              <option value=""></option>
            </select>
            <select name="" id="">
              <option value=""></option>
            </select>
            <select name="" id="">
              <option value=""></option>
            </select>
            <label>Opis događaja</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <label>Saznaj više link</label>
            <input type="text"></input>
            <button>Pošalji</button>
          </div>
        </div>
      </>
    );
  }
}

export default NewDogadaj;
