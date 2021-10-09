import React from "react";
import BGUniversity from "../assets/BG University Lv1.png";
import AccesoryLv2 from "../assets/Ac Scholar Lv3.png"

const Academy = () => {

return (
  <div class="card__collection clear-fix">
    <h1>Academy</h1>
    <div class="cards cards--three">
    <img src={BGUniversity} class="img-responsive" alt="Cards Image"/>
      <span class="cards--three__rect-1">
        <span class="shadow-1"></span>
        <p>Mint</p>
      </span>
      <span class="cards--three__rect-2">
        <span class="shadow-2"></span>
      </span>
      <span class="cards--three__circle"></span>
      <ul class="cards--three__list">
        <li><i >Lv1</i></li>
      </ul>
    </div>

    <div class="cards cards--three">
    <img src={AccesoryLv2} class="img-responsive" alt="Cards Image"/>
      <span class="cards--three__rect-1">
        <span class="shadow-1"></span>
        <p>Mint</p>
      </span>
      <span class="cards--three__rect-2">
        <span class="shadow-2"></span>
      </span>
      <span class="cards--three__circle"></span>
      <ul class="cards--three__list">
        <li><i >Lv1</i></li>
      </ul>
    </div>
  </div>
)
}

export default Academy;