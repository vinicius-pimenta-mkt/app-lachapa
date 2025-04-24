"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "./ItemDetail.css"

// Importando as imagens
import burgerTradicional from "../assets/burger.png"
import burgerArtesanal from "../assets/burger_artesanal.png"
import passaporte from "../assets/passaporte.png"

function ItemDetail({ addToCart, menu }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    // Encontrar o item pelo ID
    const foundItem = menu.find((item) => item.id === Number.parseInt(id))
    if (foundItem) {
      setItem(foundItem)
    }
  }, [id, menu])

  if (!item) {
    return <div>Carregando...</div>
  }

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

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity,
    })
    navigate("/cart")
  }

  return (
    <div className="item-detail-container">
      <Header />
      <div className="item-detail-content">
        <div className="item-detail-image-container">
          <img src={getItemImage(item.category) || "/placeholder.svg"} alt={item.name} className="item-detail-image" />
        </div>
        <div className="item-detail-info">
          <h1 className="item-detail-name">{item.name}</h1>
          <p className="item-detail-description">{item.description}</p>
          <p className="item-detail-price">R$ {item.price.toFixed(2)}</p>

          <div className="item-detail-quantity">
            <button className="quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
