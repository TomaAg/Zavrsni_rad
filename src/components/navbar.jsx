import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { HiFilter } from "react-icons/hi";
import { FaFastBackward } from "react-icons/fa";
class Navbar extends Component {
  state = {
    menuOpen: false,
    open: "none",
  };

  handleOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    if (!this.state.menuOpen) {
      this.setState({ open: "inline-block" });
    } else {
      this.setState({ open: "none" });
    }
  };

  handlePozivNew = () => {
    let t = this.props.hasOwnProperty("handleNewDogadajOpen");
    let x = this.props.hasOwnProperty("handleNewPosaoOpen");
    let y;
    if (t) {
      this.props.handleNewDogadajOpen();
    } else if (x) {
      this.props.handleNewPosaoOpen();
      return;
    } else {
      console.log("problem navbar");
    }
    return y;
  };

  handleNumbers = (e) => {
    this.props.handleNumbers(e.target.value);
  };

  render() {
    return (
      <>
        <nav className={this.props.navImena.indexIs ? "nav nav-v1" : "nav"}>
          <div
            className={
              this.props.navImena.indexIs
                ? "nav-div-menu nav-div-menu-v1"
                : "nav-div-menu"
            }
          >
            <h2
              className={
                this.props.navImena.indexIs
                  ? "nav-text-v1 nav-text-v1-index"
                  : "nav-text-v1"
              }
            >
              {this.props.navImena.menuIme}
            </h2>
            <div className="nav-dropmenu-up">
              <a
                className="nav-dropmenu nav-text-v1"
                href="#"
                role="button"
                onClick={this.handleOpen}
              >
                Menu
              </a>
              <ul
                className={"menu-dropdown-content"}
                style={{
                  "--open": this.state.open,
                }}
              >
                <li className="link-home">
                  <Link className="nav-text-v2" to="/">
                    {this.props.navImena.menu1}
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    className="nav-text-v2"
                    to={"/" + this.props.navImena.link}
                    id="link2"
                  >
                    {this.props.navImena.menu2}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <form
            className={
              this.props.navImena.indexIs
                ? "form-1 form-1-v1"
                : "form-1 form-1-student"
            }
          >
            <button
              className={
                this.props.navImena.indexIs
                  ? "button-1 button-mobile button-mobile-v1 button-1-v1"
                  : "button-1 button-mobile  button-1-v1 button-1-student "
              }
              type="button"
              value="<"
              onClick={() => this.props.handleMove("<")}
            >
              {"<"}
            </button>

            {this.props.navImena.numberOpen >= 1 ? (
              <button
                className={
                  this.props.navImena.indexIs
                    ? "button-2 button-2-v1 button-mobile-1 "
                    : this.props.brojNiza >=
                        this.props.navImena.buttons[0] * 10 - 10 &&
                      this.props.brojNiza <= this.props.navImena.buttons[0] * 10
                    ? "button-2  button-mobile-1 button-2-student btn-boja"
                    : "button-2  button-mobile-1 button-2-student"
                }
                type="button"
                value="1"
                onClick={this.handleNumbers}
              >
                {this.props.navImena.buttons[0]}
              </button>
            ) : (
              ""
            )}

            {this.props.navImena.numberOpen >= 2 ? (
              <button
                className={
                  this.props.navImena.indexIs
                    ? "button-2 button-2-v1 button-mobile-2 nav-btn-info btn-info-2"
                    : this.props.brojNiza >
                        this.props.navImena.buttons[1] * 10 - 10 &&
                      this.props.brojNiza <= this.props.navImena.buttons[1] * 10
                    ? "button-2  button-mobile-2 button-2-student btn-boja"
                    : "button-2  button-mobile-2 button-2-student"
                }
                type="button"
                value="2"
                onClick={this.handleNumbers}
              >
                {this.props.navImena.buttons[1]}
              </button>
            ) : (
              ""
            )}

            {this.props.navImena.numberOpen >= 3 ? (
              <button
                className={
                  this.props.navImena.indexIs
                    ? "button-2 button-2-v1 button-mobile-2 button-mobile-3 nav-btn-info btn-info-3"
                    : this.props.brojNiza >
                        this.props.navImena.buttons[2] * 10 - 10 &&
                      this.props.brojNiza <= this.props.navImena.buttons[2] * 10
                    ? "button-2  button-mobile-2 button-mobile-2-student button-mobile-3 button-2-student btn-boja"
                    : "button-2  button-mobile-2 button-mobile-2-student button-mobile-3 button-2-student"
                }
                type="button"
                value="3"
                onClick={this.handleNumbers}
              >
                {this.props.navImena.buttons[2]}
              </button>
            ) : (
              ""
            )}

            {this.props.navImena.numberOpen >= 4 ? (
              <button
                className={
                  this.props.navImena.indexIs
                    ? "button-2  button-mobile-2  button-mobile-4 button-2-v1 nav-btn-info btn-info-4"
                    : this.props.brojNiza >
                        this.props.navImena.buttons[3] * 10 - 10 &&
                      this.props.brojNiza <= this.props.navImena.buttons[3] * 10
                    ? "button-2  button-mobile-2 button-mobile-4 button-mobile-2-student  button-2-student btn-boja"
                    : "button-2  button-mobile-2 button-mobile-4 button-mobile-2-student  button-2-student"
                }
                type="button"
                value="4"
                onClick={this.handleNumbers}
              >
                {this.props.navImena.buttons[3]}
              </button>
            ) : (
              ""
            )}

            <button
              className={
                this.props.navImena.indexIs
                  ? "button-1 button-mobile button-mobile-v1 button-1-v2"
                  : "button-1 button-mobile  button-1-v2 button-1-student "
              }
              type="button"
              value=">"
              onClick={() => this.props.handleMove(">")}
            >
              {">"}
            </button>
            {this.props.navImena.indexIs ? (
              ""
            ) : (
              <div
                className="btn-pocetak-v2"
                onClick={this.props.handleBtnPocetak}
              >
                <FaFastBackward></FaFastBackward>
              </div>
            )}
          </form>

          <div
            className={
              this.props.navImena.indexIs ? " form-2 form-2-v1" : " form-2 "
            }
          >
            {this.props.navImena.danasOn ? (
              <button
                onClick={this.props.handleDanas}
                className="nav-btn-danas"
              >
                Danas
              </button>
            ) : (
              ""
            )}

            {this.props.navImena.indexIs ? (
              <div onClick={this.props.handleFilterOpen}>
                <HiFilter className="index-icone" />
              </div>
            ) : (
              <button
                className="nav-btn-pocetak"
                onClick={this.props.handleBtnPocetak}
              >
                Pocetak
              </button>
            )}

            <button className="button-predloži" onClick={this.handlePozivNew}>
              {this.props.navImena.predlozi} <strong>+</strong>
            </button>

            <button
              className="button-predloži-v2"
              onClick={this.handlePozivNew}
            >
              <strong>+</strong>
            </button>
          </div>
        </nav>
        <div className="nav-2"></div>
      </>
    );
  }
}

export default Navbar;
