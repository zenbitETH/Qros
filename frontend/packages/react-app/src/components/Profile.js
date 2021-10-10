import React from "react";
import layer0 from "../assets/BG Citizen Lv2.png";
import layer1 from "../assets/Citizen M Lv1.png";
import layer2 from "../assets/Ac Citizen Lv3.png";


const Profile = () => {

return (
  <div class="center">
    	<h1 class="center">Your Qro character</h1>
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
      <div class="traitgrid">
          <div class="trait">1.Background
            <div class ="traitvalue">City Hall</div>
          </div>
          <div class="trait">2.Citizen from
            <div class ="traitvalue">Quretaro City DAO</div>
          </div>
          <div class="trait">3.Clothes
            <div class ="traitvalue">Citizen Lv2</div>
          </div>
          <div class="trait">4.Role
            <div class ="traitvalue">Pet Lover</div>
          </div>
         
          
          
          
       
        
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Profile;