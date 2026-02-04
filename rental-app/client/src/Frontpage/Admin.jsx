import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav>
          <Link to="/admin/add-car">➕ Add Vehicle</Link>
          <Link to="/admin/view-cars">🚗 View Vehicles</Link>
          <Link to="/admin/bookings">📋 Bookings</Link>
          <Link to="/home">⬅ Back to User</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h1>Welcome Admin 👋</h1>
        <p>Manage vehicles, bookings, and rental operations here.</p>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Add Vehicle</h3>
            <p>Add new cars to the rental fleet</p>
            <Link to="/admin/add-car">Go</Link>
          </div>

          <div className="admin-card">
            <h3>View Vehicles</h3>
            <p>See all registered vehicles</p>
            <Link to="/admin/view-cars">Go</Link>
          </div>

          <div className="admin-card">
            <h3>Bookings</h3>
            <p>Manage customer bookings</p>
            <Link to="/admin/bookings">Go</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
