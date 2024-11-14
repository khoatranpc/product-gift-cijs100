import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StoreProvider from './store/index.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <StoreProvider>
      <App />
    </StoreProvider>
  }
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
