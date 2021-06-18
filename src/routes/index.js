import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'routes/pathnames';
import loadable from 'utils/loadable';

const Home = loadable(() => import('pages/Home'));
const ThanksForOrdering = loadable(() => import('pages/ThanksForOrdering'));
const NotFound = loadable(() => import('pages/NotFound'));

export default function Routes() {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.THANKS_FOR_ORDERING} component={ThanksForOrdering} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}
