
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Componetus/Header';
import Footer from './Componetus/Footer';
import Return from './Pages/Return';
import Cart from './Pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children:[
      {
        index:true,
        element: <Home />
      },{
        path:"/Return",
        element:<Return />
      },{
        path:"/Cart",
        element:<Cart/>
      },
      // },{
      //   path:"/About",
      //   element :<About />
      // },{
      //   path: "/Login",
      //   element: <Login />
      // },{
      //   path:"/Cart",
      //   element: <Cart/>
      // },{
      //   path:"/WishList",
      //   element: <WishList />
      // },
      {
      path:"*",
      element: <NotFound/>
      },
    ],
  },
]);
















function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App