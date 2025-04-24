import MenuItem from "./MenuItem"
import "./MenuList.css"

function MenuList({ items, category }) {
  // Filtrar itens pela categoria selecionada
  const filteredItems = category === "Todos" ? items : items.filter((item) => item.category === category)

  return (
    <div className="menu-list-container">
      <h2 className="menu-category-title">{category}</h2>
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-grid-item" key={item.id}>
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuList
