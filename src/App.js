import React, { Component } from 'react';
import {AppBar, Toolbar, Typography, Button, Grid, TextField, Divider} from '@material-ui/core';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#f88339' }, // Purple and green play nicely together.
    secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* sidebar */}
        <ul class="sidenav">
          <li><img src="https://via.placeholder.com/50"/></li>
          <li><img src="https://via.placeholder.com/50"/></li>
          <li><img src="https://via.placeholder.com/50"/></li>
          <li><img src="https://via.placeholder.com/50"/></li>
          <li><img src="https://via.placeholder.com/50"/></li>
          <li><img src="https://via.placeholder.com/50"/></li>
        </ul>
        <Grid class="container">
          {/* first section starts */}
          <Grid class="container" style={{backgroundColor: "#f88339"}}>
            {/* app bar starts */}
            <AppBar class="navbar" position="static" color="default">
              <Toolbar>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <Typography variant="h6" color="secondary" style={{marginTop: "10px"}}>
                      Settlemycar
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button style={{backgroundColor: "#e05e0d"}}>Sign up</Button>
                    <Button>Sign in</Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            {/* information */}
            <Grid class="container1">
              <Grid container direction="row" justify="space-around" style={{marginTop: "70px"}}>
                <Grid item>
                  <Typography variant="h3" color="secondary">
                    Settlemycar
                  </Typography>
                  <Typography variant="h5" color="secondary" style={{marginTop: "20px"}}>
                    dummy text
                  </Typography>
                  <Button class="work"> How it works</Button>
                </Grid>
                <Grid item>
                  <img src="https://via.placeholder.com/300"/>
                </Grid>
              </Grid>
              {/* form */}
              <Grid class="form" direction="row" justify="center" alignItems="center">
                <TextField label="Make" margin="normal" variant="outlined" style={{marginRight: "5px"}}/>
                <TextField label="Model" margin="normal" variant="outlined" style={{marginRight: "5px"}}/>
                <TextField label="Fuel Type" margin="normal" variant="outlined" style={{marginRight: "5px"}}/>
                <TextField label="Year of Buying" margin="normal" variant="outlined" style={{marginRight: "5px"}}/>
                <Button variant="contained" color="primary" style={{color: "#ffffff"}}>
                  Get Quotes
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* second section starts */}
          <Grid class="container">
            {/* how we work */}
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item style={{marginTop: "40px"}}>
                <Typography variant="h3">
                  How We Work?
                </Typography>
              </Grid>
              <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop: "40px"}}>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
              </Grid>
            </Grid>
            {/* why? */}
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item style={{marginTop: "40px"}}>
                <Typography variant="h3">
                  Why Settlemycar?
                </Typography>
              </Grid>
              <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop: "40px"}}>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop: "40px"}}>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img src="https://via.placeholder.com/150"/>
                </Grid>
              </Grid>
            </Grid>
            {/* about */}
            <Grid class="container2" style={{backgroundColor: "#f88339"}}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h3" color="secondary" style={{marginTop: "40px"}}>
                  About Settlemycar
                </Typography>
                <Typography variant="subtitle1" color="secondary" style={{marginTop: "20px"}}>
                  dummy paragraph
                </Typography>
                <img src="https://via.placeholder.com/200" style={{marginTop: "40px"}}/>
              </Grid>
            </Grid>
            {/* join now */}
            <Grid style={{marginBottom: "70px"}}>
              <Grid container direction="column" justify="center" alignItems="center" style={{marginTop: "50px"}}> 
                <Typography variant="h4">
                  Join Now!!
                </Typography>
                <Button variant="contained" color="primary" style={{color: "#ffffff", marginTop: "40px"}}>
                  Get Quotes
                </Button>              
              </Grid>
            </Grid>
            {/* footer */}
            <hr/>
            <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{paddingTop: "50px", paddingBottom: "50px"}}>
              <Grid item>
                <Typography variant="subtitle2" style={{marginBottom: "10px"}}>
                  Top Locations
                </Typography>
                <Typography variant="body1">
                  Locations
                </Typography>
                <Typography variant="body1">
                  Locations
                </Typography>
                <Typography variant="body1">
                  Locations
                </Typography>
                <Typography variant="body1">
                  Locations
                </Typography>
              </Grid>
              <Grid item>
              <Typography variant="subtitle2" style={{marginBottom: "10px"}}>
                  Top Services
                </Typography>
                <Typography variant="body1">
                  Services
                </Typography>
                <Typography variant="body1">
                  Services
                </Typography>
                <Typography variant="body1">
                  Services
                </Typography>
                <Typography variant="body1">
                  Services
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
