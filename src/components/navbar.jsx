import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {
    menuOpen: false,
    open: "none",
  };

  handleOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    console.log(this.state.menuOpen);
    if (!this.state.menuOpen) {
      this.setState({ open: "inline-block" });
    } else {
      this.setState({ open: "none" });
    }
  };

  render() {
    return (
      <>
        <nav className="nav">
          <div className="nav-div-menu">
            <h2>Studentski poslovi</h2>
            <div className="nav-dropmenu-up">
              <a
                className="nav-dropmenu"
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
                  <Link to="/">Home</Link>
                </li>
                <hr />
                <li>
                  <Link to="/indexPage">Info_zone</Link>
                </li>
              </ul>
            </div>
          </div>

          <form className="form-0 form-1">
            <button className="button-1 button-mobile-2" type="button">
              {"<"}
            </button>
            <button className="button-2 button-mobile-1" type="button">
              Danas
            </button>
            <button className="button-2 button-mobile" type="button">
              Sutra
            </button>
            <button className="button-2 button-mobile" type="button">
              Čet
            </button>
            <button className="button-2 button-mobile" type="button">
              Pet
            </button>
            <button className="button-1 button-mobile-2" type="button">
              {">"}
            </button>
          </form>

          <form className="form-0 form-2">
            <button
              className="button-predloži"
              onClick={this.props.handleNewPosao}
            >
              Predloži događaj <strong>+</strong>
            </button>
          </form>
        </nav>
        <hr />
      </>
    );
  }
}

export default Navbar;
