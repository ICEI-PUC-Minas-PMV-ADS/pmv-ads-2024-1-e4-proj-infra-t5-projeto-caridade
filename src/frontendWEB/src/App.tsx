import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/search",
    element: <Search />
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
