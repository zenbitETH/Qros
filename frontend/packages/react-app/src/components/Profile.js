import React from "react";
import layer0 from "../assets/Layer 0.png";
import layer1 from "../assets/Layer 1.png";
import layer2 from "../assets/Layer 2.png";

const Verification = () => {

return (
  <div class="wrapper">
    
      <img src={layer0} class="layer0" alt="Cards Image"/>
      <img src={layer1} class="layer1" alt="Cards Image"/>
      <img src={layer2} class="layer2" alt="Cards Image"/>
    
  <div class="container">
  <span class="bottom">
      <div class="left">

      </div>
      
    </span>
  </div>
  
  <div class="inside">
    <div class="icon">+</div>
    <div class="contents">
      <table>
        <tr>
          <th>Level</th>
          <th>Roles</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Developer</td>
        </tr>
        
      </table>
    </div>
  </div>
</div>
)
}

export default Verification;