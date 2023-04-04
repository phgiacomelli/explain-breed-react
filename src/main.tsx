import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './assets/styles/globalStyles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Presentation from './components/presentation';
import GetApiKey from './components/getkey';
import ExplainDog from './components/explainDog/index';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Presentation />
  },
  {
    path:"/api-key",
    element: <GetApiKey />
  },
  {
    path:"/explain-dog",
    element: <ExplainDog />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
