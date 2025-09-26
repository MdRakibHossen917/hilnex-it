import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Solutions from "../pages/Solutions/Solutions";
import More from "../pages/More/More";
import Package from "../pages/Package/Package";


export const router = createBrowserRouter([

   {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "solutions", element: <Solutions /> },
      { path: "package", element: <Package /> },
      { path: "more", element: <More /> },
    
    ],
  },

]);