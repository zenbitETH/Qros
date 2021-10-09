import React from "react";
import StarterF from "../assets/Citizen F Lv1.png";
import StarterM from "../assets/Citizen M Lv1.png"


const PublicService = () => {

return (
  <div class="card__collection clear-fix">
    <h1>Public Service</h1>
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
  </div>
)
}

export default PublicService;