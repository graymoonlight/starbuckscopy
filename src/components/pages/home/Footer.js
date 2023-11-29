import React from "react";
import "./styles/footer.scss";

function Footer() {
    return (
      <footer class="footer">
        <div className="footer-columns">
          <div class="column">
            <b>About Us</b>
            <p>Our Company</p>
            <p>Our Coffee</p>
            <p>Stories and News</p>
            <p>Starbucks Archive</p>
            <p>Investor Relations</p>
            <p>Customer Service</p>
            <p>Contact Us</p>
          </div>
  
          <div class="column">
            <b>Careers</b>
            <p>Culture and Values</p>
            <p>Inclusion, Diversity, and Equity</p>
            <p>College Achievement Plan</p>
            <p>Alumni Community</p>
            <p>U.S. Careers</p>
            <p>International Careers</p>
          </div>
  
          <div class="column">
            <b>Social Impact</b>
            <p>People</p>
            <p>Planet</p>
            <p>Environmental and Social Impact Reporting</p>
          </div>
  
          <div class="column">
            <b>For Business Partners</b>
            <p>Landlord Support Center</p>
            <p>Suppliers</p>
            <p>Corporate Gift Card Sales</p>
            <p>Office and Foodservice Coffee</p>
          </div>
  
          <div class="column">
            <b>Order and Pick Up</b>
            <p>Order on the App</p>
            <p>Order on the Web</p>
            <p>Delivery</p>
            <p>Order and Pick Up Options</p>
            <p>Explore and Find Coffee for Home</p>
          </div>
        </div>
  
        <div className="footer-info">
          <p className="one">Privacy Notice | Terms of Use | Do Not Share My Personal Information | CA Supply Chain Act | Cookie Preferences</p>
          <p className="two">© 2023 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }

export default Footer;
