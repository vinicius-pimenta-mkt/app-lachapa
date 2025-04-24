import { Link } from "react-router-dom"
import "./MenuItem.css"

// Importando as imagens
import burgerTradicional from "../assets/burger.png"
import burgerArtesanal from "../assets/burger_artesanal.png"
import passaporte from "../assets/passaporte.png"

function MenuItem({ item }) {
  // Função para determinar qual imagem usar com base na categoria
  const getItemImage = (category) => {
    switch (category) {
      case "Tradicionais":
        return burgerTradicional
      case "Burgers Artesanais":
        return burgerArtesanal
      case "Passaportes":
        return passaporte
      default:
        return burgerTradicional
    }
  }

  return (
    <Link to={`/item/${item.id}`} className="menu-item-card">
      <div className="menu-item-image-container">
        <img src={getItemImage(item.category) || "/placeholder.svg"} alt={item.name} className="menu-item-image" />
      </div>
      <div className="menu-item-details">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        <p className="menu-item-price">R$ {item.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default MenuItem
