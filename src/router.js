import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic';
import login from './routes/login';
import details from './components/user/details';

function RouterConfig({ history,app }) {
  const UserPage=dynamic({
    app,
    models:()=>[
      import('./models/user')
    ],
    component:()=>import('./routes/usersPage')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" exact component={UserPage} />
        <Route path="/login" component={login} />
        {/* <Route path="/details/:id" component={details} /> */}
        <Route path="/details/:data" component={details} />
        {/* <Route path="/details" component={details} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
