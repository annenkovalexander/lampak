import React from 'react';
import { createRoot } from 'react-dom/client';

const rootNode = document.querySelector('#root') as HTMLElement;
const reactNode = createRoot(rootNode);
reactNode.render(
  <React.StrictMode>
    <h1>Lampak</h1>
  </React.StrictMode>
);
