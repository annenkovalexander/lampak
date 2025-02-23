import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App, { router } from './components/app/app';

const rootNode = document.querySelector('#root') as HTMLElement;
const reactNode = createRoot(rootNode);
reactNode.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
