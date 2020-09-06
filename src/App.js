import React, { Suspense, lazy } from 'react';
import './App.scss';
import Loader from './components/Loader/Loader';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
const Folders = lazy(() => import('./containers/Folders'));

function App() {
  let routes = (
    <Suspense fallback={<Loader text={'Loading...'} />}>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/folders/:id' component={Folders} />
        <Redirect to='/home' />
      </Switch>
    </Suspense>
  )
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
