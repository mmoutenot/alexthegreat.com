import React, {Component} from "react";
import Slider from "react-slick";
import Instafeed from "instafeed.js";

import classNames from "./styles";


const DIGITAL = [
  "Protools",
  "Apogee Converters & Clocking"
];

const ANALOG = [
  "MCI JH16 2-inch 24-track",
  "MCI JH16 2-inch 16-track",
  "MCI JH-110 1/4-inch 2-track",
];

const GEAR = [
"(2) Neve 33122  mic pre's",
"Neve 1100  mic pre",
"(8) API 512 mic pre's",
"(2) API 550a    EQ",
"TLAudio 2-chan tube mic pre/ eq",
"TLAudio2-chan tube mic pre/compresser",
"Peavey VMP2  2-chan tube mic pre / eq",
"Demeter VTMP-2b  2-chan  tube mic pre",
"Avalon Vt 737sp  ) tube mic pre / eq / compresser",
"Altec 1567a  4 chan. mic preamps/mixer",
"Ampex 350 mic pre",
"Avalon tube DI",
"Black Lion mic pre",
"Anthony Dimaria Labs compresser",
"Neve 2254/E  compresser",
"Distressor ",
"(2) Urei 1176  ",
"Urei 1178 ",
"(2) dbx 902   (de-esser)",
"Sans Amp   (rackmount distortion)",
"Inward Connections 16x2 Buss Mixer",
"Mackie 32x8 mixer (analog monitor)"
];

const MICS = [
  "Neumann, Lawson, Coles, Earthworks, Shure, Gefell, Beyer, AKG, Senheiser, Equitek, Royer, Electrovoice."
];

const KEYBOARDS = [
  "Steinway, Hammond,  Rhodes, Wurlitzer, Moog,  Optigon,  more…"
];

const GUITARS_BASSES = [
  "dozens of vintage Fender, Gibson,  Martin, Epiphone, Kay, Gretsch,  Teisco, Silvertone,  Stompboxes, more"
];

const DRUMS = [
  "Slingerland, Gretsch, Paiste"
];

const AMPS = [
  "Fender, Ampeg, Gibson, Leslie, Magnatone, more…"
];

const MORE_INSTRUMENTS = [
  "Glockenspiel, vibraphone, Omnichord"
];

const BACKGROUNDS = [
  require("app/assets/images/tape.jpeg")
];

export default class Gear extends Component {
  constructor (props) {
    super(props);

    // let feed = new Instafeed({
    //   clientId: "f0ddb53904da4196b40d29b126117404",
    //   accessToken: "188346280.f0ddb53.111f63cdd4704f019f95b47063181a82",
    //   get: "user",
    //   userId: "1753031531",
    //   resolution: "standard_resolution",
    //   success: (results) => {
    //     debugger;
    //   }
    // }).run();

    this.state = {
      backgroundIndex: 0
    };
  }

  render () {

    let sliderOptions = {
      className: classNames.slider,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 5000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      fade: true,
      swipe: false,
      lazyLoad: true
    }

    return <div className={classNames.gearPage}>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
      <div className={classNames.overlay}/>
      <Slider {...sliderOptions}>
        {BACKGROUNDS.map((backgroundSrc, i) =>
          <div className={classNames.sliderImage} style={{backgroundImage: `url(${ backgroundSrc })`}} key={i}/>
        )}
      </Slider>
      <div className={classNames.gearContainer}>
        <div className={classNames.gearList}>
          <div className={classNames.gearSection}>
            <h4>Digital</h4>
            <ul>
              {DIGITAL.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Analog</h4>
            <ul>
              {ANALOG.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Mics</h4>
            <ul>
              {MICS.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Keyboards</h4>
            <ul>
              {KEYBOARDS.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Guitars & Basses</h4>
            <ul>
              {GUITARS_BASSES.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Drums</h4>
            <ul>
              {DRUMS.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>Amps</h4>
            <ul>
              {AMPS.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

          <div className={classNames.gearSection}>
            <h4>More Instruments</h4>
            <ul>
              {MORE_INSTRUMENTS.map((gearItem, i) =>
                <li key={i}>{gearItem}</li>
              )}
            </ul>
          </div>

        </div>
        <div className={classNames.miscGearSection}>
          <h4>Misc Gear</h4>
          {GEAR.map((gearItem, i) =>
            <span key={i}>{gearItem} • </span>
          )}
        </div>
      </div>

    </div>
  }
}

