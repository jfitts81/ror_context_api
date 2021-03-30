import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Profile from './components/accounts/Profile';
import Navbar from './components/shared/Navbar';
const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        {/* <Route exact path="/home" render={() => <Home />} /> */}
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Container>
  </>
)
export default App;