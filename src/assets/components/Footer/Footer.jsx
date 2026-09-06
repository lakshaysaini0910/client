import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerContent">

        {/* Connect With Us */}
        <div className="footerColumn">
          <h3>CONNECT WITH US</h3>

          <div className="footerLine"></div>

          <a href="#">Call</a>
          <a href="#">Whats App</a>
          <a href="#">Instagram</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
        </div>


        {/* Order Support */}
        <div className="footerColumn">
          <h3>ORDER SUPPORT</h3>

          <div className="footerLine"></div>

          <a href="#">Exchanges</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Return & Refund Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">Track Order</a>
        </div>


        {/* We Are Charactr */}
        <div className="footerColumn">
          <h3>WE ARE CHARACTR</h3>

          <div className="footerLine"></div>

          <a href="#">About Us</a>
        </div>

      </div>


      {/* Logo */}
      <div className="footerLogoSection">

        <div className="footerDivider"></div>

        <img
          src="https://www.charactr.in/cdn/shop/files/IMG_6028.gif?v=1785497563&width=600"
          alt="Charactr"
          className="footerLogo"
        />

      </div>


      {/* Copyright */}
      <div className="footerBottom">
        <p>© 2026 CHARACTR CLOTHING. ALL RIGHTS RESERVED</p>
      </div>

    </footer>
  );
}

export default Footer;