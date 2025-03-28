import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Asteroids } from './pages/Asteroids';
import { Asteroid } from './pages/Asteroid';
import { Desroyment } from './pages/Desroyment';
import {AsteroidsContextProvider} from "./components/asteroids-context/AsteroidsContext";


const router = createHashRouter([
  {
    path: "/test",
    element: <div>TEST!</div>,
  },

  {
    path: "/asteroids",
    element: <Asteroids />,
  },  
  {
    path: "/",
    element: <Asteroids />,
  },

  {
    path: "/asteroid/:id",
    element: <Asteroid />,
  },
  {
    path: "/desroyment",
    element: <Desroyment />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AsteroidsContextProvider>
          <RouterProvider router={router} />
      </AsteroidsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();