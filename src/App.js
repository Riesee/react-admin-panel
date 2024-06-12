import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./app.css";
import { Home } from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/productt/Product";
import NewProduct from "./pages/newProduct/NewProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>),
  },
  {
    path: "/users",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <UserList />
      </div>
    </div>),
  },
  {
    path: "/user/:userId",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <User />
      </div>
    </div>),
  },
  {
    path: "/newuser",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <NewUser />
      </div>
    </div>),
  },
  {
    path: "/products",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Products />
      </div>
    </div>),
  },
  {
    path: "/product/:productId",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Product />
      </div>
    </div>),
  },
  {
    path: "/newProduct",
    element: (<div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <NewProduct />
      </div>
    </div>),
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
      </RouterProvider>
    </div>
  );
}

export default App;
