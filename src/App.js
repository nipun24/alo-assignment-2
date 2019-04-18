import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './containers/Home';
import Login from './containers/Login';
import Quotes from './containers/Quotes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: '#f88339' }, 
    secondary: { main: '#ffffff' },
  }
});

class App extends Component {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quotes" component={Quotes} />
        </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;