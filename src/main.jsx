import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBook from './Components/LIstedBook/ListedBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <DashBoard />
      },
      {
        path: '/listedBooks',
        element: <ListedBook />,
        loader: ()=> fetch('booksData.json') ,

      },
      {
        path: '/books/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/public/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
