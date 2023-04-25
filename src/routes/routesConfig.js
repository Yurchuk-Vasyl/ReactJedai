import PeoplePage from '@containers/PeoplePage/PeoplePage';
import HomePage from '@containers/HomePage/HomePage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

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
    path: '*',
    component: <NotFoundPage />,
  },
];

export default routesConfig;
