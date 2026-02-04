// src/components/Menu.js

const dishes = [
  {
    name: "Greek Salad",
    price: "$12",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bruschetta",
    price: "$8",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Lemon Dessert",
    price: "$10",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
];

export default function Menu() {
  return (
    <div className="menu-grid">
      {dishes.map((dish, i) => (
        <div key={i} className="menu-card">
          <img src={dish.img} alt={dish.name} className="menu-img" />
          <h3>{dish.name}</h3>
          <p>{dish.price}</p>
          <button className="fav-btn">❤️ Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
