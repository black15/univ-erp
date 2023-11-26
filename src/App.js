import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Demande from './pages/Demande';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
import Clients from './pages/Clients';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "contact/",
      element: <Contact />,
    },
    {
      path: "demande-etp/",
      element: <Demande />,
    },
    {
      path: "add-product/",
      element: <AddProduct />,
    },
    {
      path: "products/",
      element: <Products />,
    },
    {
      path: "clients/",
      element: <Clients />,
    },
    {
      path: "login/",
      element: <Login />,
    },
    {
      path: "register/",
      element: <Register />,
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}


export default App;
