import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="La Chapa Logo" className="logo" />
          <div className="title-container">
            <h1>La Chapa</h1>
            <p>Hamburgueria Artesanal</p>
          </div>
        </div>
        <Link to="/cart" className="cart-button">
          <div className="cart-icon">
            <span className="material-icons">shopping_cart</span>
            <span className="cart-label">Carrinho</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
