import React from "react";
import BGGallery from "../assets/BG Gallery Lv1.png";
import AccesoryLv2 from "../assets/Ac Artist Lv2.png";
import AccesoryLv3 from "../assets/Ac Artist Lv3.png"

const Culture = () => {

return (
  <div class="card__collection clear-fix">
    <h1>Culture</h1>
    <div class="cards cards--three">
    <img src={BGGallery} class="img-responsive" alt="Cards Image"/>
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

export default Culture;