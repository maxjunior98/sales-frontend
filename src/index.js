import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from 'components/global';
import { Body } from 'components/body/body';
import ReactDOM from 'react-dom/client';
import Login from 'pages/store/login';
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/store/login",
    element: <Login /> 
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Body>
      <RouterProvider router={router} />
    </Body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals