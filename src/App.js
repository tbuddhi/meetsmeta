import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Notifications from './components/Notifications';
import Plan from './components/Plan';
import ThemeConfig from './components/ThemeConfig';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/theme">
            <ThemeConfig />
          </Route>
          <Route path="/plan">
            <Plan />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
