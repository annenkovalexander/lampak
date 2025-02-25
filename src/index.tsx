import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App, { router } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './services/store';

const rootNode = document.querySelector('#root') as HTMLElement;
const reactNode = createRoot(rootNode);
reactNode.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
