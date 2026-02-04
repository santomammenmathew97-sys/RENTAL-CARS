import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import Fleet from "./Fleet";
import Contact from "./Contact";
import Booking from "./Booking";

import Login from "./Frontpage/Login";
import Register from "./Frontpage/Register";
import Admin from "./Frontpage/Admin";

import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Admin Components (REAL paths from your project)
import AddCar from "./components/AddCar";
import ViewCars from "./components/ViewCars";
import AdminBookings from "./components/AdminBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= AUTH PAGES ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= USER PAGES ================= */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/fleet"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Fleet />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN MAIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin/add-car"
          element={
            <ProtectedRoute>
              <AddCar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/view-cars"
          element={
            <ProtectedRoute>
              <ViewCars />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminBookings />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
