import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Quotes from './Quotes';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quotes" component={Quotes} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;