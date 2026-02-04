import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// AUTH
import Log from "./Front_Page/Login";
import Register from "./Front_Page/Register";

// PAGES
import Home from "./Front_Page/Home";
import Fleet from "./Front_Page/Fleet";   // ✅ ADD THIS
import Admin from "./Front_Page/Admin";

// USER
import User from "./getuser/user";
import Adduser from "./adduser/Adduser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Log />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/fleet",          // ✅ REQUIRED FOR SUV CLICK
    element: <Fleet />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/add",
    element: <Adduser />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
