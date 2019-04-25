import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './containers/Home';
import Login from './containers/Login';
import Quotes from './containers/Quotes';
import ContextStore from './ContextStore';
import Verify from './containers/Verify';
import Garages from  './containers/Garages';
import Blog from './containers/Blog';
import BlogContent from './containers/BlogContent';

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
  state = {
    car: {
      make: "",
      model: "",
      fuelType: "",
      year: ""
    },
    quote: {
      pin: "",
      type: {
        what: "",
        info: ""
      },
    }
  }

  setCar = (car) => {
    this.setState({car});
  }

  setQuotes = (quote) => {
    console.log(quote)
    this.setState({quote})
  }

  render() {
    return(
      <ContextStore.Provider value={{
        car: this.state.car,
        quote: this.state.quote,
        setCar: this.setCar,
        setQuotes: this.setQuotes
      }}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/quotes" component={Quotes} />
              <Route exact path="/verify" component={Verify} />
              <Route exact path="/garages" component={Garages} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:content" component={BlogContent} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
        </ContextStore.Provider>
    );
  }
}

export default App;