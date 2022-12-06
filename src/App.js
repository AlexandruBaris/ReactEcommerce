import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Navbar from "./componets/Navbar/Navbar";
import Footer from "./componets/Footer/Footer";
import Category from "./pages/Category/Category"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import "./app.scss"


const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>

    
  )
}



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
      ,
      {
        path:"/category/:id",
        element:<Category/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
])
function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
