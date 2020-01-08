import React from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Justanything from './components/shared/Justanything';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute exact path='/justanything' component={Justanything} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;