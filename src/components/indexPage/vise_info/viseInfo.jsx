import React, { Component } from "react";
import "./viseInfo.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

class ViseInfo extends Component {
  render() {
    return (
      <div className="viseInfo-sve">
        <div className="viseInfo-content">
          <div className="viseInfo-gore">
            <img src="./logo.jpg" alt="" />
          </div>
          <div className="viseInfo-sredina">
            <p>
              <strong>{this.props.viseInfoDogadaj.događaj}</strong>
            </p>

            <hr />

            <div className="info-main-div">
              {this.props.viseInfoDogadaj.sat.datum == 0 ? (
                ""
              ) : (
                <FaRegCalendarAlt className="indexInfo-ikona-mala"></FaRegCalendarAlt>
              )}
              <span>{this.props.viseInfoDogadaj.datum}</span>
              {this.props.viseInfoDogadaj.sat.length == 0 ? (
                ""
              ) : (
                <div className="info-hr-v" />
              )}
              {this.props.viseInfoDogadaj.sat.length == 0 ? (
                ""
              ) : (
                <FaRegClock className="indexInfo-ikona-mala"></FaRegClock>
              )}
              <span>{this.props.viseInfoDogadaj.sat}</span>

              {this.props.viseInfoDogadaj.mjesto.length == 0 ? (
                ""
              ) : (
                <div className="info-hr-v" />
              )}
              {this.props.viseInfoDogadaj.mjesto.length == 0 ? (
                ""
              ) : (
                <FaLocationArrow className="indexInfo-ikona-mala"></FaLocationArrow>
              )}
              <span>{this.props.viseInfoDogadaj.mjesto}</span>
              {this.props.viseInfoDogadaj.ulaznica.length == 0 ? (
                ""
              ) : (
                <div className="info-hr-v" />
              )}
              {this.props.viseInfoDogadaj.ulaznica.length == 0 ? (
                ""
              ) : (
                <FaMoneyBillAlt className="indexInfo-ikona-mala"></FaMoneyBillAlt>
              )}
              <span>{this.props.viseInfoDogadaj.ulaznica}</span>
              <div className="info-hr-v" />

              <FaTag className="indexInfo-ikona-mala"></FaTag>
              <span>{this.props.viseInfoDogadaj.tipDogadaja}</span>
            </div>
            <hr />
            <span>{this.props.viseInfoDogadaj.opis_dogadaja}</span>
            <div className="viseInfo-dole">
              <a href={this.props.viseInfoDogadaj.saznaj_vise_link}>
                <button>
                  <FaInfoCircle style={{ marginRight: "5px" }} /> informacija
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="indexInfo-ikona-div">
          <div id="infoVise-balck">
            <IoIosCloseCircle
              id="indexInfo-ikona"
              onClick={this.props.handleViseDogadaj}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ViseInfo;
