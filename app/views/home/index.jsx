import React, {Component} from "react";

import classNames from "./styles";
import Title from "./title";
import About from "./about";
import Artists from "./artists";
import Gear from "./gear";


export default class HomeContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className={classNames.home}>
      <Title/>
      <Artists/>
      <Gear/>
      <div className={classNames.footer}>
        <p>
          Alex The Great, 2016 <br/>
          Nashville, TN<br/><br/>
        </p>
      </div>
    </div>;
  }
}




