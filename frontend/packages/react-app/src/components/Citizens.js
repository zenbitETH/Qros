import React from "react";
import StarterF from "../assets/Citizen F Lv1.png";
import StarterM from "../assets/Citizen M Lv1.png"
import BGLV1 from "../assets/BG Citizen Lv2.png"
import AccesoryLv3 from "../assets/Ac Citizen Lv3.png"

const Citizens = () => {

return (
  <div class="card__collection clear-fix">
  <h1>Citizens</h1>
  <div class="cards cards--three">
  <img src={StarterF} class="img-responsive" alt="Cards Image"/>
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
  <img src={StarterM} class="img-responsive" alt="Cards Image"/>
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
  <img src={BGLV1} class="img-responsive" alt="Cards Image"/>
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

  <div class="cards cards--three">
  <img src={AccesoryLv3} class="img-responsive" alt="Cards Image"/>
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <p>Mint</p>
    </span>
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i >Lv3</i></li>
    </ul>
  </div>
</div>
)
}

export default Citizens;