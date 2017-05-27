import { default as ClubRoutes } from '../modules/club/routes';
import { NotFound } from '../modules/404';

import Root from '../modules/root';


export default {
  childRoutes: [
    {
      path: '/',
      component: Root,
      childRoutes: [...ClubRoutes, ...NotFound],
    },
  ],
};
