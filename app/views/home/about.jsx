import React, {Component} from "react";

import classNames from "./styles";


export default class About extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className={classNames.rogerPage}>
      <div className={classNames.contentContainer}>
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
  }
}




