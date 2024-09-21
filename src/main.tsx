import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './constants/routes';
import Home from './pages/Home/Home';
import './styles/global.scss';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
