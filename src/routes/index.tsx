import { createBrowserRouter, redirect } from 'react-router';
// import { Spinner } from 'components/ui/spinner';
import { lazy } from 'react';

import pathName from './pathName';

const App = lazy(() => import('App'));
const Layout = lazy(() => import('components/Layout'));
const Home = lazy(() => import('page/home'));
const Projects = lazy(() => import('page/projects'));
const About = lazy(() => import('page/about'));
const Contact = lazy(() => import('page/contact'));

export default createBrowserRouter([
  {
    Component: App,
    // TODO: add a loading component
    // HydrateFallback: () => <div>Loading...</div>,
    children: [
      {
        Component: Layout,
        children: [
          {
            path: pathName.Home,
            Component: Home,
          },
          {
            path: pathName.Projects,
            Component: Projects,
          },
          {
            path: pathName.About,
            Component: About,
          },
          {
            path: pathName.Contact,
            Component: Contact,
          },
        ],
      },
      {
        path: '*',
        Component: () => null,
        loader: () => redirect(pathName.Home),
      },
    ],
  },
]);

export { pathName };
