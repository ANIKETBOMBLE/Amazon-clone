
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Componetus/Header';
import Footer from './Componetus/Footer';
import Return from './Pages/Return';
import Cart from './Pages/Cart'
import Profile from './Pages/Profile';
import Header2 from './Componetus/Header2';
import DATA from './Pages/DATA';
import Kitchenessentials from './Pages/Kitchenessentials'
import Inspire from './Pages/Inspire';
import More from './Pages/More';
// import HomeBanner from './Pages/HomeBanner';


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
      },{
        path:"/Profile",
        element: <Profile/>
      },
      {
        path:"/Header2",
        element: <Header2/>
      },
      {
        path:"/DATA",
        element: <DATA/>
      },
      {
        path:"/Kitchenessentials",
        element: <Kitchenessentials/>
        
      },{
        path:"/inspire",
        element:<Inspire/>
      },
      ,{
        path:"/More",
        element: <More />
      },
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