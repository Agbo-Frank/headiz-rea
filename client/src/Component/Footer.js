import visa from '../img/visaa.png'
import verve from '../img/Verve-Logo-750x396.png'
import master from '../img/master card.png'
import interswitch from '../img/interswitch.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <footer>
    <div>
      <div>
          <h3>About us</h3>
          <p>
              Headiz.biz is your online first choice to buy and sell human hair in Nigeria. We supply
              all kinds of virgin hair, hair care products, all kinds of lace closure, wigs and Beauty 
              products at wholesale price. Pay before & Cash on delivery in port harcourt. Save More & 
              Enjoy More.
          </p>
      </div>

      <ul>
          <li><h3>Get help</h3></li>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Order</li>
          <li>Payment option</li>
      </ul>

      <ul>
          <li><h3>Support</h3></li>
          <li>Privacy Policy</li>
          <li>Teams of use</li>
          <li>Cookies</li>
      </ul>
      <div>
          <div>
            <p><strong> Social Media</strong></p>
            <div class="icon">
              <a href="#"><FaFacebookF style={{color: "white"}}/></a>
              <a href="#"><FaInstagram  style={{color: "white"}}/></a>
              <a href="#"><FaTwitter  style={{color: "white"}}/></a>
            </div>
          </div>
          <div className="payment">
            <img src={verve} alt="verve"/>
            <img src={master} alt="master"/>
            <img src={visa} alt="visa"/>
            <img src={interswitch} alt="interswitch"/>
          </div>
      </div>
    </div>
    <hr style={{color: "black"}}/>
    <p>&copy; Copyright  2021 headizhumanhair.biz.ng / All Right Reserved</p>
</footer>
    )
}

export default Footer