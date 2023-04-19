import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Poslovi from "./poslovi/poslovi";
import Filter from "./filter";
import NewPosao from "./newPosao";
import "./studentJobPage.css";

class StudentJobPage extends Component {
  state = {
    newPosaoOpen: false,
    newPosao: {},
    posao: [
      {
        id: 1,
        ime: "Ugostiteljski poslovi",
        cijena: 4.32,
        lokacija: " dfdff",
        poslodavac: "GLOBALNA HRANA d.o.o.",
        brZaposlenika: 10,
        opisPosla:
          "TRAŽIMO Nove članove tima za rad u restoranu koji će raditi ljetnu sezonu 2023.",
        kontakt: "mgr.split@hr.mcd.com",
        napomenaUzKontakt:
          "Sve upite, životopise i zamolbe za posao slati na e-mail: mgr.split@hr.mcd.com ",
        natjecajOd: "02.12.2002",
        natjecajDo: "20.32.1225",
        pocetakObavljanja: "12.52.3202",
        napomenaUzVrijeme:
          "Tražimo kandidate za rad u ljetnoj sezoni 2023., i preko cijele godine.",
        napomenaUzCijenu:
          "Mogućnost dodatne stimulacije na plaću. Dodatak na noćni rad (50%), rad nedjeljom (50%) i praznikom (50%) - 6,68€",
      },
      {
        id: 1,
        ime: "Ugostiteljski poslovi",
        cijena: 4.32,
        lokacija: " McDonald's restoran Joker",
        poslodavac: "GLOBALNA HRANA d.o.o.",
        brZaposlenika: 8,
        opisPosla:
          "TRAŽIMO Nove članove tima za rad u restoranu koji će raditi ljetnu sezonu 2023.",
        kontakt: "mgr.split@hr.mcd.com",
        napomenaUzKontakt:
          "Sve upite, životopise i zamolbe za posao slati na e-mail: mgr.split@hr.mcd.com ",
        natjecajOd: "02.12.2002",
        natjecajDo: "20.32.1225",
        pocetakObavljanja: "12.52.3202",
        napomenaUzVrijeme:
          "Tražimo kandidate za rad u ljetnoj sezoni 2023., i preko cijele godine.",
        napomenaUzCijenu:
          "Mogućnost dodatne stimulacije na plaću. Dodatak na noćni rad (50%), rad nedjeljom (50%) i praznikom (50%) - 6,68€",
      },
      {
        id: 1,
        ime: "Ugostiteljski poslovi",
        cijena: 4.32,
        lokacija: " McDonald's restoran Joker",
        poslodavac: "GLOBALNA HRANA d.o.o.",
        brZaposlenika: 10,
        opisPosla:
          "TRAŽIMO Nove članove tima za rad u restoranu koji će raditi ljetnu sezonu 2023.",
        kontakt: "mgr.split@hr.mcd.com",
        napomenaUzKontakt:
          "Sve upite, životopise i zamolbe za posao slati na e-mail: mgr.split@hr.mcd.com ",
        natjecajOd: "02.12.2002",
        natjecajDo: "20.32.1225",
        pocetakObavljanja: "12.52.3202",
        napomenaUzVrijeme:
          "Tražimo kandidate za rad u ljetnoj sezoni 2023., i preko cijele godine.",
        napomenaUzCijenu:
          "Mogućnost dodatne stimulacije na plaću. Dodatak na noćni rad (50%), rad nedjeljom (50%) i praznikom (50%) - 6,68€",
      },
      {
        id: 1,
        ime: "Ugostiteljski poslovi",
        cijena: 4.32,
        lokacija: " čččččlllllkkkkkjjjjjhhhhhggggg",
        poslodavac: "čččččlllllkkkkkjjjjjhhhhhggggg",
        brZaposlenika: 10,
        opisPosla:
          "TRAŽIMO Nove članove tima za rad u restoranu koji će raditi ljetnu sezonu 2023.",
        kontakt: "mgr.split@hr.mcd.com",
        napomenaUzKontakt:
          "Sve upite, životopise i zamolbe za posao slati na e-mail: mgr.split@hr.mcd.com ",
        natjecajOd: "02.12.2002",
        natjecajDo: "20.32.1225",
        pocetakObavljanja: "12.52.3202",
        napomenaUzVrijeme:
          "Tražimo kandidate za rad u ljetnoj sezoni 2023., i preko cijele godine.",
        napomenaUzCijenu:
          "Mogućnost dodatne stimulacije na plaću. Dodatak na noćni rad (50%), rad nedjeljom (50%) i praznikom (50%) - 6,68€",
      },
    ],
  };

  handleNewPosaoOpen = () => {
    this.setState({ newPosaoOpen: !this.state.newPosaoOpen });
    console.log(this.state.newPosaoOpen);
  };

  handleNewPosao = (e) => {
    {
      /*    const newPosao1 = this.state.posao;
    [...newPosao1] = [...this.state.posao1, e];
    this.setState({ posao: newPosao1 });*/
    }
  };

  render() {
    return (
      <>
        <Navbar handleNewPosao={this.handleNewPosaoOpen} />
        <div className="stuJob-raspored">
          <Filter />
          {/*2 slike*/}
          <main>
            {/*{this.state.posao.map((posao) => (
              <Poslovi key={this.state.posao.id} posao={this.state.posao} />
            ))}*/}
            <Poslovi posao={this.state.posao} />
          </main>
        </div>

        {this.state.newPosaoOpen ? (
          <NewPosao
            handleNewPosaoOpen={this.handleNewPosaoOpen}
            handleNewPosao={(e) => {
              this.handleNewPosao(e);
            }}
          />
        ) : (
          <Footer />
        )}
      </>
    );
  }
}

export default StudentJobPage;
