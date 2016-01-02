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

