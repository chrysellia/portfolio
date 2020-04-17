import React,{ Component} from 'react';
import { Router } from 'react-router';
import { Route, Switch} from 'react-router-dom';
import history from './history';
import HomePage from './components/HomePage';

class App extends Component {
  render(){
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
      </Router>
    )
  }
}

export default App;
