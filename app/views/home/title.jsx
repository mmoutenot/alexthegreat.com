import React, {Component} from "react";

import classNames from "./styles";


export default class Title extends Component {
  constructor (props) {
    super(props);

    this.state = {
      scrollPosition: 0
    };
  }

  componentDidMount () {
    onscroll = () => {
      this.setState({ scrollPosition: window.scrollY })
    };
  }

  render () {
    let playlistUrl = "https://embed.spotify.com/?uri=spotify%3Auser%3A12169845727%3Aplaylist%3A5VUu0mJPL6PEG3EZCd9nV6";
    let spotifyDims = { width: 300, height: 80 };
    let width = document.body.getBoundingClientRect().width;

    if (width > 1200 && this.state.scrollPosition < 800) {
      spotifyDims.height = 380;
    }

    return <div className={classNames.titlePage}>
      <div className={classNames.titleContainer}>
        <h1>Alex the Great</h1>
        <h2>recording</h2>
        <hr/>
        <div className={classNames.aboutContainer}>
          <p>
            Alex the Great Recording is a commercial studio owned by Nashville producers Brad Jones and Robin Eaton.
          </p>
          <p>
            For over twenty years ATG has hosted outside projects as well as the owner's  in-house productions.   The studio includes a connected apartment for the use of out-of-town clients,  ping-pong,  and a pleasant courtyard.   The ambiance is warm and organic,  and the Berry Hill location is close to everything.
          </p>
          <p>
            <a href="mailto:bradjones@mindspring.com">Email Brad</a>
            <br/>
            <a href="mailto:eaton.robin@gmail.com">Email Robin</a>
          </p>
        </div>
      </div>
      <iframe
        className={classNames.spotifyPlayer}
        src={playlistUrl}
        width={spotifyDims.width}
        height={spotifyDims.height}
        frameBorder="0"
        allowTransparency="true">
      </iframe>
    </div>;
  }
}

