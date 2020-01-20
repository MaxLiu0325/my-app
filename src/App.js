import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createClient } from './utils/apollo';
import { LocalStateProvider } from './hooks/use-local-state';

import routes from './routes';

const App = () => {
  return (
    <ApolloProvider client={createClient()}>
      <LocalStateProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={props => (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                )}
              />
            ))}
          </Switch>
        </Router>
      </LocalStateProvider>
    </ApolloProvider>
  );
};

export default App;
