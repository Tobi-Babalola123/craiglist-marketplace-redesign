import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { ListingDetail } from './pages/ListingDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/listings',
    Component: Listings,
  },
  {
    path: '/listing/:id',
    Component: ListingDetail,
  },
]);
