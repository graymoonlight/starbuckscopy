import React from "react";
import "./styles/header.scss";
import { NavLink as Link } from "react-router-dom";

function Header() { 
    return ( 
      <header> 
        <div class="cont_head">
          <Link to ="/">
            <img src="https://i.pinimg.com/originals/70/de/e0/70dee0a5d8f1b2bb4f508a4bddd539b5.jpg" alt="Starbucks logo" class="imge"/> 
          </Link> 
          <nav> 
            <ul> 
              <h1>MENU</h1> 
              <h1>REWARDS</h1> 
              <h1>GIFT CARDS</h1> 
            </ul> 
          </nav> 
        </div> 
        <div class="acc_panel"> 
          <nav> 
            <ul> 
              <h2 class="sign">Sign in</h2> 
              <h2 class="cart">Cart</h2> 
            </ul> 
          </nav> 
        </div> 
      </header> 
    ); 
  } 

export default Header;
