import React from "react";
import CARD2 from "../assets/CARD2.png";
import CARD3 from "../assets/CARD3.png";
import CARD4 from "../assets/CARD4.png";
import CARD5 from "../assets/CARD5.png";
import CARD6 from "../assets/CARD6.png";

const Rewards = () => {

return (
  <div class="card__collection clear-fix">

    <div class="cards cards--three">
    <img src={CARD3} class="img-responsive" alt="Cards Image"/>
      <span class="cards--three__rect-1">
        <span class="shadow-1"></span>
        <p>Mint</p>
      </span>
      <span class="cards--three__rect-2">
        <span class="shadow-2"></span>
      </span>
      <span class="cards--three__circle"></span>
      <ul class="cards--three__list">
        <li><i >Lv2</i></li>
      </ul>
    </div>
  </div>
)
}

export default Rewards;