import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate("/fleet", {
      state: { category },
    });
  };

  return (
    <div className="home-container">

      {/* SEARCH SECTION */}
      <section className="search-panel">
        <h1>Find Your Rental Car</h1>

        <form className="search-bar">
          <select required>
            <option value="">Select City</option>
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>

          <input type="datetime-local" required />
          <input type="datetime-local" required />

          <button type="button" onClick={() => goToCategory("All")}>
            Search
          </button>
        </form>
      </section>

      {/* CATEGORY SECTION */}
      <section className="popular-cars">
        <h2>Browse by Category</h2>

        <div className="car-strip">
          <div className="car-card" onClick={() => goToCategory("Hatchback")}>
            Hatchback
          </div>

          <div className="car-card" onClick={() => goToCategory("Sedan")}>
            Sedan
          </div>

          <div className="car-card" onClick={() => goToCategory("SUV")}>
            SUV
          </div>

          <div className="car-card" onClick={() => goToCategory("Luxury")}>
            Luxury
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
