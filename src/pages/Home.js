import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="persona">
        <div className="persona-content">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
            alt="Little Lemon Chef"
            className="persona-img"
          />
          <div className="persona-text">
            <h2>Meet Little Lemon 🍋</h2>
            <p>
              At Little Lemon, we believe food should be fresh, vibrant, and
              full of flavor. Inspired by Mediterranean traditions, our chefs
              craft dishes that bring people together. Whether you’re here for a
              quick bite or a special celebration, we make every meal memorable.
            </p>
            <p>
              Our story began with a passion for simple ingredients and bold
              flavors. Today, we continue that journey by serving wholesome
              meals in a warm, welcoming atmosphere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
