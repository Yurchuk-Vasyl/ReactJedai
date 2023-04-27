import PeoplePage from '@containers/PeoplePage/PeoplePage';
import PersonPage from '@containers/PersonPage/PersonPage';
import HomePage from '@containers/HomePage/HomePage';
import NotFoundPage from '@components/NotFoundPage/NotFoundPage';
import FavoritePage from '@containers/FavoritePage/FavoritePage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const routesConfig = [
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/people',
    component: <PeoplePage />,
  },
  {
    path: '/people/:id',
    component: <PersonPage />,
  },
  {
    path: '/favorites',
    component: <FavoritePage />,
  },
  {
    path: '/search',
    component: <SearchPage />,
  },
  {
    path: '/fail',
    component: <ErrorMessage />,
  },
  {
    path: '*',
    component: <NotFoundPage />,
  },
];

export default routesConfig;
