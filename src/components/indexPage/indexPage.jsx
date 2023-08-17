import React, { Component } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Dogadaji from "./main_dogadaji/dogadaji";
import "./indexPage.css";
import NewDogadaj from "./new_windows/newDogadaj";
import IndexFilter from "./new_windows/indexFilter";
import ViseInfo from "./vise_info/viseInfo";

class IndexPage extends Component {
  state = {
    prviDan: "08/10/2023",
    newDogadajOpen: false,
    indexFilterOpen: false,
    viseInfoOpen: false,
    viseInfoDogadaj: {},
    bojaTocke: ["green", "green", "green", "green", "green", "green", "green"],
    filterTipDogadaja: [
      "Sport",
      "Mjuzza",
      "Izložba",
      "Edukacija",
      "Film",
      "Predstava",
      "Ostalo",
    ],
    navImena: {
      menuIme: "Info zone",
      menu1: "Home",
      menu2: "Studenski poslovi",
      link: "studentJobPage",
      buttons: ["Pon", "Uto", "Sri", "Čet"],
      predlozi: "Predloži događaj",
      indexIs: true,
      numberOpen: 4,
      danasOn: false,
    },
    /*  dogadaji: [], */
    dogadaji: [
      [
        {
          događaj: "Koncert u pomaka",
          datum: "08/10/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Edukacija",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/10/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
      ],
      [
        {
          događaj: "Koncert u pomaka",
          datum: "08/11/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/11/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/11/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/11/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/11/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/11/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/11/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/11/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
      ],
      [
        {
          događaj: "Koncert u pomaka",
          datum: "08/12/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/12/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/12/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/12/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/12/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Film",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/12/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Edukacija",
          ulaznica: 5,
        },
      ],
      [
        {
          događaj: "Koncert u pomaka",
          datum: "08/13/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Edukacija",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/13/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/13/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Film",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/13/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Izložba",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/13/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/13/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Mjuzza",
          ulaznica: 5,
        },
        {
          događaj: "Koncert u pomaka",
          datum: "08/13/2023",
          sat: "16:00",
          mjesto: "Split",
          opis_dogadaja:
            "Pivat ce Mate i Ivan od 7pm do 24pm kmdsaklf sdlkmaflksd sdmfld saf skmdfk asdfkm aldsf sdlakfm masdfmsdam fksad mf, asdf kmasd fads. sdfm sd ",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Sport",
          ulaznica: 0,
        },
        {
          događaj: "Predstava u Sinju",
          datum: "08/13/2023",
          sat: "12:00",
          mjesto: "Šibenik, tvrdava svetog mihovila",
          opis_dogadaja:
            "lksdmf kmdasflkmsa dflmasdmk fasdkm flkads flkmasdfl masdkm fasdkm flakmdsf lkmasd flkmasdk mlasdkm falkdms flkmdmas flkmmasdk masdkm asdkm flkmadms flkmmasd flkmasd kfasdkm fakdmsf lkmadsflk masd flkmasdk faskdmf kdmasf lkamdf kmasdflkasdklf maskdm fskmdaf lkmasdf lkmas flkmasdfl kmsad flkmsadflk msadf lmasdkfl asdlkfmsdalk m",
          saznaj_vise_link: "http://localhost:3000/",
          tipDogadaja: "Izložba",
          ulaznica: 5,
        },
      ],
    ],
  };

  handleNewDogadajOpen = () => {
    this.setState({ newDogadajOpen: !this.state.newDogadajOpen });
  };

  handleNewDogadaj = (e) => {
    let newDogadaj1 = [];
    if (this.state.dogadaji == undefined) {
      newDogadaj1 = [];
    } else {
      newDogadaj1 = [...this.state.dogadaji];
    }
    let i = 0;
    let j = 0;
    let postoji = false;
    newDogadaj1.map((dan) => {
      if (Array.isArray(dan)) {
        if (dan[0].datum == e.datum) {
          j = i;
          postoji = "NizElemenata";
        }
        i++;
      } else {
        if (dan.datum == e.datum) {
          j = i;
          postoji = "elementUnizu";
        }
        i++;
      }
    });

    if (postoji == "NizElemenata") {
      newDogadaj1[j] = [...newDogadaj1[j], e];
    } else if (postoji == "elementUnizu") {
      newDogadaj1[j] = [newDogadaj1[j], e];
    } else {
      newDogadaj1 = [...newDogadaj1, [e]];
    }
    this.setState({ dogadaji: newDogadaj1 });
  };

  handleFilterOpen = () => {
    this.setState({ indexFilterOpen: !this.state.indexFilterOpen });
  };

  handleMove = (e) => {
    let newDate = new Date(this.state.prviDan);
    if ("<" == e) {
      newDate.setDate(newDate.getDate(newDate) - 1);
      this.setState({ prviDan: newDate });
      this.handleButtons("left");
    } else if (">" == e) {
      newDate.setDate(newDate.getDate(newDate) + 1);
      this.setState({ prviDan: newDate });
      this.handleButtons("right");
    }
  };

  handleButtons = (e) => {
    let x = this.state.navImena.buttons;
    let week = ["Pon", "Uto", "Sri", "Čet", "Pet", "Sub", "Ned"];

    if (e == "left") {
      for (let i = x.length - 1; i >= 0; i--) {
        if (i == 0) {
          for (let z = 0; z < week.length; z++) {
            if (week[z] == x[0]) {
              if (x[0] == "Pon") {
                x[0] = "Ned";
              } else x[i] = week[z - 1];
              break;
            }
          }
        } else {
          x[i] = x[i - 1];
        }
      }
    } else if (e == "right") {
      for (let i = 0; i < x.length; i++) {
        if (i == 3) {
          for (let z = 0; z < week.length; z++) {
            if (week[z] == x[3]) {
              if (x[3] == "Ned") {
                x[3] = "Pon";
              } else x[i] = week[z + 1];
              break;
            }
          }
        } else {
          x[i] = x[i + 1];
        }
      }
    }
  };

  handleNumbers = (e) => {
    let newDate = new Date(this.state.prviDan);
    for (let i = 0; i < e - 1; i++) {
      this.handleButtons("right");
      newDate.setDate(newDate.getDate(newDate) + 1);
    }
    this.setState({ prviDan: newDate });
  };

  handleFilterTipDogadaja = (e) => {
    this.setState({ filterTipDogadaja: e });
  };

  handleMain = (e) => {
    if (this.state.dogadaji != undefined) {
      let niz = this.state.dogadaji.filter((dan) => {
        let d = new Date(this.state.prviDan);
        let d2;
        d.setDate(d.getDate(d) + e);
        if (Array.isArray(dan)) {
          d2 = new Date(dan[0].datum);
          let same = d2.getTime() == d.getTime();
          return same;
        } else {
          let d2 = new Date(dan.datum);
          let same = d2.getTime() == d.getTime();
          return same;
        }
      });
      if (niz.length == 0) {
        niz = 0;
      } else {
        niz = niz[0].filter((el) => {
          let postoji = false;
          this.state.filterTipDogadaja.map((x) => {
            if (x == el.tipDogadaja) postoji = true;
          });
          return postoji;
        });
      }

      return niz;
    } else if (this.state.dogadaji == undefined) {
      return 0;
    }
  };

  handleDanas = () => {
    let danas = "08/10/2023";
    this.setState({ prviDan: danas });
    this.setState({
      navImena: {
        ...this.state.navImena,
        buttons: ["Pon", "Uto", "Sri", "Čet"],
      },
    });
  };

  handleViseDogadaj = (d, t) => {
    this.setState({ viseInfoOpen: !this.state.viseInfoOpen });
    let taj;
    for (let i = 0; i < this.state.dogadaji.length; i++) {
      for (let j = 0; j < this.state.dogadaji[i].length; j++) {
        let el = this.state.dogadaji[i][j];
        if (el.datum == d && el.sat == t) {
          taj = el;
        }
      }
    }
    this.setState({ viseInfoDogadaj: taj });
  };

  handleDanasOn = (e) => {
    this.setState((prevState) => ({
      navImena: {
        ...prevState.navImena,
        danasOn: e,
      },
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    let time = new Date(this.state.prviDan);
    let time2 = new Date("08/10/2023");

    if (prevState.prviDan !== this.state.prviDan) {
      if (time.getTime() !== time2.getTime()) {
        this.handleDanasOn(true);
      } else if (time.getTime() == time2.getTime()) {
        this.handleDanasOn(false);
      }
    }
  }

  handleBojaTocke = (e) => {
    let novi = [...e];
    this.setState({ bojaTocke: novi });
  };

  handleDatum = (e) => {
    let date2 = new Date(this.state.prviDan);
    if (e == 0) {
    } else if (e == 1 || e == 2 || e == 3) {
      date2.setDate(date2.getDate(date2) + e);
    } else {
      console.log("problem u handleDatum");
    }

    return this.FormatDate(date2);
  };

  FormatDate = (data) => {
    data = new Date(data);
    let dateTimeString =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    return dateTimeString; // 4/5/2021
  };

  render() {
    return (
      <div
        className={
          this.state.newDogadajOpen || this.state.indexFilterOpen
            ? "index-sve"
            : ""
        }
      >
        <Navbar
          navImena={this.state.navImena}
          handleNewDogadajOpen={this.handleNewDogadajOpen}
          handleFilterOpen={this.handleFilterOpen}
          handleMove={(e) => this.handleMove(e)}
          handleNumbers={(e) => this.handleNumbers(e)}
          handleDanas={this.handleDanas}
        />

        <main className="index-main">
          <div id="dogadaj-1">
            <Dogadaji
              dogadaji={this.handleMain(0)}
              handleViseDogadaj={(d, t) => this.handleViseDogadaj(d, t)}
              buttons={this.state.navImena.buttons[0]}
              datum={this.handleDatum(0)}
            />
          </div>

          <div id="dogadaj-2">
            <Dogadaji
              dogadaji={this.handleMain(1)}
              handleViseDogadaj={(d, t) => this.handleViseDogadaj(d, t)}
              buttons={this.state.navImena.buttons[1]}
              datum={this.handleDatum(1)}
            />
          </div>

          <div id="dogadaj-3">
            <Dogadaji
              dogadaji={this.handleMain(2)}
              handleViseDogadaj={(d, t) => this.handleViseDogadaj(d, t)}
              buttons={this.state.navImena.buttons[2]}
              datum={this.handleDatum(2)}
            />
          </div>

          <div id="dogadaj-4">
            <Dogadaji
              dogadaji={this.handleMain(3)}
              handleViseDogadaj={(d, t) => this.handleViseDogadaj(d, t)}
              buttons={this.state.navImena.buttons[3]}
              datum={this.handleDatum(3)}
            />
          </div>
        </main>
        <Footer />
        {this.state.newDogadajOpen ? (
          <NewDogadaj
            handleNewDogadajOpen={this.handleNewDogadajOpen}
            handleNewDogadaj={(e) => {
              this.handleNewDogadaj(e);
            }}
          />
        ) : (
          ""
        )}

        {this.state.indexFilterOpen ? (
          <IndexFilter
            handleFilterOpen={this.handleFilterOpen}
            filterTipDogadaja={this.state.filterTipDogadaja}
            handleBojaTocke={(e) => this.handleBojaTocke(e)}
            bojaTocke={this.state.bojaTocke}
            handleFilterTipDogadaja={(e) => this.handleFilterTipDogadaja(e)}
          />
        ) : (
          ""
        )}

        {this.state.viseInfoOpen ? (
          <ViseInfo
            handleViseDogadaj={this.handleViseDogadaj}
            viseInfoDogadaj={this.state.viseInfoDogadaj}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default IndexPage;
