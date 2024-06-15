
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import AddEmployee from "./components/addEmployee"
import UpdateEmployee from "./components/updateEmployee"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/addemployee",
      element: <AddEmployee/>,
    },
    {
      path: "/updateemployee/:id",
      element: <UpdateEmployee/>,
    },
  ]);

  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
