import React from "react";
import "./styles/main.scss";

function Main() { 
    return ( 
      <main class="main"> 
        <div class="menu"> 
          <div class="textad">
            <h3>Let’s glow, Star Days</h3>
            <a>Hello, Starbucks Rewards members. Hello, double Stars <br /> throughout Star Days. Enjoy this exclusive offer all week <br /> long, 10/16-10/20!</a>
          </div>
          <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-86089.jpg" alt="Starbucks"/>
        </div> 
        <div className="specials"> 
          <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85869.jpg" alt="Starbucks logo"/>
          <div class="textadp">
            <h1>Good idea, chai <br /> lovers</h1>
            <h1>ㅤ</h1>
            <a>Try the new coffee-free Iced Pumpkin Cream <br /> Chai Tea Latte, inspired by our customers. It’s <br /> fall in a cup.</a>
          </div>
        </div> 
      </main> 
    ); 
  } 

export default Main;
