import React from "react";
import layer0 from "../assets/BG Citizen Lv2.png";
import layer1 from "../assets/Citizen M Lv1.png";
import layer2 from "../assets/Ac Citizen Lv3.png";
import layer3 from "../assets/Ac Pet Lover Lv1.png";

const Profile = () => {

return (
  <div class="wrapper">
    
      <img src={layer0} class="layer0" alt="Cards Image"/>
      <img src={layer1} class="layer1" alt="Cards Image"/>
      <img src={layer2} class="layer2" alt="Cards Image"/>
      <img src={layer3} class="layer3" alt="Cards Image"/>
    
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

export default Profile;