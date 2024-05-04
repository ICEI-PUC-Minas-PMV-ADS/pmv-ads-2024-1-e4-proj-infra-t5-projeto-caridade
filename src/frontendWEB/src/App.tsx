import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import { Institutional } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/institutional",
    element: <Institutional />,
  },
]);

function App() {
  return (
    // <Layout>
    <RouterProvider router={router} />
    // </Layout>
  );
}

export default App;
