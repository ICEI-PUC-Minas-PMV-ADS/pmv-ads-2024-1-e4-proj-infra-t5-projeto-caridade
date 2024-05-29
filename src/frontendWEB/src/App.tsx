import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import { Institutional } from "./pages";
import { Layout } from "./components";
import Organization from "./pages/Organization/Organization";
import { UserProvider } from "./context/userContext";


  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
  {
    path: "/institutional",
    element: (
      <Layout>
        <Institutional />
      </Layout>
    ),
  },

  {
    path: "/organization/:postId",
    element: (
      <Layout>
        <Organization />
      </Layout>
    ),
  },
  ]);

function App() {
  return (
    <UserProvider>
      <div>
        <RouterProvider router={router} />;
      </div>
    </UserProvider>
)
}

export default App;
