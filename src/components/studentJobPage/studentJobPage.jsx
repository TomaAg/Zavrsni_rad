import React, { Component, useRef } from "react";
import Navbar from "../navbar";

import Footer from "../footer";
import Poslovi from "./poslovi/poslovi";
import Filter from "./filter";
import NewPosao from "./newPosao";
import "./studentJobPage.css";

class StudentJobPage extends Component {
  state = {
    newPosaoOpen: false,
    navImena: {
      menuIme: "Studentski poslovi",
      menu1: "Home",
      menu2: "Info zone",
      link: "indexPage",
      buttons: [1, 2, 3, 4],
      predlozi: "Predloži posao",
      numberOpen: 5,
    },
    filtrirajVrstu: [],
    id: 42,
    brojNiza: 10,
    posao: [
      {
        id: 0,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
        cijena: 5.32,
        lokacija: " dfdffdfsa.fdsaf asdfasdf.asdfdf asdfsdaf asd",
        poslodavac: "GLOBALNA HRANA d.o.o.. dfasdf.asdfasd",
        brZaposlenika: 1,
        opisPosla:
          "TRAŽIMO Nove članove tima za rad u restoranu koji će raditi ljetnu sezonu 2023.",
        kontakt: "mgr.split@hr.mcd.com",
        napomenaUzKontakt:
          "Sve upite, životopise i zamolbe za posao slati na e-mail: mgr.split@hr.mcd.com ",
        natjecajOd: "01.01.1001",
        natjecajDo: "20.32.1225",
        pocetakObavljanja: "12.52.3202",
        napomenaUzVrijeme:
          "Tražimo kandidate za rad u ljetnoj sezoni 2023., i preko cijele godine.",
        napomenaUzCijenu:
          "Mogućnost dodatne stimulacije na plaću. Dodatak na noćni rad (50%), rad nedjeljom (50%) i praznikom (50%) - 6,68€",
      },
      {
        vrstaPosla: "ugostiteljstvo i turizam",
        id: 1,
        ime: "Ugostiteljstvo i turizam",
        cijena: 6.32,
        lokacija: " dfdff",
        poslodavac: "GLOBALNA HRANA d.o.o.",
        brZaposlenika: 2,
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
        id: 2,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 3,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 4,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 5,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 6,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 7,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 8,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 9,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 10,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 11,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 12,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 13,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 14,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 15,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 16,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 17,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 18,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 19,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 20,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 21,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 22,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 23,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 24,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 25,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 26,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 27,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 28,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 29,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 30,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 31,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 32,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        vrstaPosla: "ugostiteljstvo i turizam",
        id: 33,
        ime: "Ugostiteljstvo i turizam",
        cijena: 6.32,
        lokacija: " dfdff",
        poslodavac: "GLOBALNA HRANA d.o.o.",
        brZaposlenika: 2,
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
        id: 34,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 35,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 36,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 37,
        vrstaPosla: "ugostiteljstvo i turizam",
        ime: "Ugostiteljstvo i turizam",
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
        id: 38,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 39,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 40,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 41,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
        id: 42,
        vrstaPosla: "promidžba",
        ime: "Promidžba",
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
    ],
  };

  handleNewPosaoOpen = () => {
    this.setState({ newPosaoOpen: !this.state.newPosaoOpen });
  };

  handleNewPosao = (e) => {
    let newPosao = [];
    e.id = this.state.id + 1;
    console.log("PROVJETI ODMA POSAL DOLE");
    this.state.posao == undefined
      ? (newPosao = [e])
      : (newPosao = [e, ...this.state.posao]);
    this.setState({ posao: newPosao });
    this.setState({ id: e.id });
    this.setState((prevState) => ({
      navImena: {
        ...prevState.navImena,
        numberOpen: Math.ceil((e.id + 1) / 10),
      },
    }));
  };

  handleFiltrirajVrstu = (e) => {
    let newFilter = e;
    this.setState({ filtrirajVrstu: newFilter });
    this.handleIdFilter(newFilter);
  };

  handleMove = (e) => {
    let x = Number(this.state.brojNiza);
    if ("<" == e) {
      x = x - 10;
      if (x == 0) {
        return;
      }
      this.setState({ brojNiza: x });
      this.handleButtons("left");
    } else if (">" == e) {
      if (this.state.brojNiza / 10 >= this.state.navImena.numberOpen) {
        return;
      } else {
        x = x + 10;
        this.setState({ brojNiza: x });
        this.handleButtons("right");
      }
    }
  };

  handleButtons = (e) => {
    let x = this.state.navImena.buttons;
    if (e == "left") {
      if (x[0] == 1) {
        return;
      } else {
        x[3] = x[2];
        x[2] = x[1];
        x[1] = x[0];
        x[0] = x[0] - 1;
      }
    } else if (e == "right") {
      if (this.state.navImena.numberOpen < x[3] + 1) {
        return;
      } else {
        for (let i = 0; i < x.length; i++) {
          if (i == 3) {
            x[i] = x[i] + 1;
          } else {
            x[i] = x[i + 1];
          }
        }
      }
    }
  };

  handleNumbers = (e) => {
    let x = this.state.brojNiza;
    let num = this.state.navImena.buttons;
    x = num[e - 1] * 10;
    for (let i = 0; i < e - 1; i++) {
      this.handleButtons("right");
    }
    this.setState({ brojNiza: x });
  };

  handleFilterTrue = (posao) => {
    let istina;
    this.state.filtrirajVrstu.forEach((element) => {
      if (element == posao.vrstaPosla) {
        istina = true;
      } else if (element == "[select all]") {
        istina = true;
      }
    });
    return istina;
  };

  handleIdFilter = (e) => {
    let brojač = 0;
    if (this.state.id != -1) {
      if (
        e == 0 ||
        e.some((element) => {
          return element == "[select all]";
        })
      ) {
        brojač = this.state.id + 1;
      } else {
        this.state.posao.map((posao) => {
          e.forEach((element) => {
            if (element == posao.vrstaPosla) {
              brojač = brojač + 1;
            }
          });
        });
      }
      this.setState((prevState) => ({
        navImena: {
          ...prevState.navImena,
          numberOpen: Math.ceil(brojač / 10),
          buttons: [1, 2, 3, 4],
        },
      }));

      this.setState({ brojNiza: 10 });
    }
  };

  handleBtnPocetak = () => {
    if (this.state.id != -1) {
      this.setState({ brojNiza: 10 });
      this.setState((prevState) => ({
        navImena: {
          ...prevState.navImena,

          buttons: [1, 2, 3, 4],
        },
      }));
    }
  };

  render() {
    return (
      <div className={this.state.newPosaoOpen ? "stuJob-sve" : ""}>
        <Navbar
          handleNewPosaoOpen={this.handleNewPosaoOpen}
          posaoID={this.state.id}
          navImena={this.state.navImena}
          brojNiza={this.state.brojNiza}
          handleMove={(e) => {
            this.handleMove(e);
          }}
          handleNumbers={(e) => this.handleNumbers(e)}
          handleBtnPocetak={this.handleBtnPocetak}
        />
        <div className="stuJob-raspored">
          <Filter handleFiltrirajVrstu={this.handleFiltrirajVrstu} />

          {this.state.id == -1 ? (
            ""
          ) : (
            <Poslovi
              brojNiza={this.state.brojNiza}
              handleICount={(e) => this.handleICount(e)}
              posao={this.state.posao.filter((posao) => {
                if (this.state.filtrirajVrstu == 0) {
                  return true;
                } else {
                  return this.handleFilterTrue(posao);
                }
              })}
            />
          )}
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
      </div>
    );
  }
}

export default StudentJobPage;
