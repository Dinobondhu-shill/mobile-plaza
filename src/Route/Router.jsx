import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "../Pages/Home/Homepage";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:"/",
        element:<Homepage />
      }
    ]
  }

])