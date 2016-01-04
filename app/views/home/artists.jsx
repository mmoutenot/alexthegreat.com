import React, {Component} from "react";
import Slider from "react-slick";
import Instafeed from "instafeed.js";

import classNames from "./styles";


const ARTISTS = [
  "Autumn Defense",
  "Ass Ponys",
  "Bobby Bare Jr.",
  "Barry and the Remains",
  "Be Your Own Pet",
  "Richard Bennett",
  "Busby Marou",
  "Butterfly Boucher",
  "Hayes Carll",
  "Elizabeth Cook",
  "Danielia Cotton",
  "Cotton Mather",
  "Marshall Crenshaw",
  "Dolly Varden",
  "Justin Townes Earle",
  "Tim Easton",
  "Bob Evans",
  "Jace Everett",
  "The Features",
  "Steve Forbert",
  "Forget Cassettes",
  "Dallas Frazier",
  "Quique Gonzalez",
  "Nancy Griffith",
  "Missy Higgins",
  "Imperial Drag",
  "Jenifer Jackson",
  "Tyler James",
  "Jason and the Scorchers",
  "Flaco Jimenez",
  "Joe Marc's Brother",
  "Richard Julian",
  "Jump Little Children",
  "Robert Earl Keen",
  "Will Kimbrough",
  "Lambchop",
  "Lion Limb",
  "Tomi Lunsford",
  "David Mead",
  "Over the Rhine",
  "K.S. Rhodes",
  "Pee Shy",
  "David Poe",
  "Melody Pool",
  "Chuck Prophet",
  "Amy Rigby",
  "Bruce Robison and Kelly Willis",
  "Josh Rouse",
  "Caroline Rose",
  "Maia Sharp",
  "The Shazam",
  "The Silver Seas",
  "John Simon",
  "Skipping Girl Vinegar",
  "Jill Sobule",
  "The Spinto Band",
  "Swan Dive",
  "Swag",
  "Team Wild",
  "Tommy Womack",
  "Tristen",
  "Yo La Tengo",
  "Warren Zanes"
];

const BACKGROUNDS = [
  require("app/assets/images/pingpong.jpeg")
];

export default class Gear extends Component {
  constructor (props) {
    super(props);

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

    return <div className={classNames.artistPage}>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
      <div className={classNames.overlay}/>
      <Slider {...sliderOptions}>
        {BACKGROUNDS.map((backgroundSrc, i) =>
          <div className={classNames.sliderImage} style={{backgroundImage: `url(${ backgroundSrc })`}} key={i}/>
        )}
      </Slider>
      <div className={classNames.artistListContainer}>
        <div className={classNames.artistList}>
          <h2>Artists</h2>
          {ARTISTS.map((artist, i) =>
            <span key={i}>{artist} • </span>
          )}
        </div>
      </div>
    </div>
  }
}

