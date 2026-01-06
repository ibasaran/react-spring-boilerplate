import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { PrimeReactProvider } from 'primereact/api';
import { LayoutProvider } from '@/layout/context/layoutcontext';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Import PrimeReact styles
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Import your custom SCSS
import './styles/layout/layout.scss';

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);