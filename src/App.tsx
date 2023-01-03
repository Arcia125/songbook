import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
