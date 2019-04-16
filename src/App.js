import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Toolbar, Typography, Button, Grid, TextField, Select, MenuItem, OutlinedInput, FormControl, InputLabel} from '@material-ui/core';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Store from './Store.json'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#f88339' }, // Purple and green play nicely together.
    secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
  }
});

class App extends Component {
  state = {
    make:'',
    model:'',
    fuelType: '',
    labelWidth1: 0,
    labelWidth2:0,
    labelWidth3: 0
  }

  componentDidMount() {
    this.setState({
      labelWidth1: ReactDOM.findDOMNode(this.InputLabelRef1).offsetWidth,
      labelWidth2: ReactDOM.findDOMNode(this.InputLabelRef2).offsetWidth,
      labelWidth3: ReactDOM.findDOMNode(this.InputLabelRef3).offsetWidth
    });
  }
  
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
        
        <Grid>
          {/* first section starts */}
          <Grid class="contain1" style={{backgroundColor: "#f88339"}}>
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
                  <Button class="work">How it works</Button>
                </Grid>
                <Grid item>
                  <img src="https://via.placeholder.com/300"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* form */}
          <Grid class="form" direction="row" justify="center" alignItems="center">
            <FormControl variant="outlined" style={{minWidth: "150px", marginRight: "5px"}}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef1 = ref;
                }}
              >
                Make
              </InputLabel>
              <Select
                value={this.state.make}
                onChange={e => this.setState({make: e.target.value})}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth1}
                    name="Make"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  Store.map(store => {
                    return <MenuItem value={store.make}>{store.make}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
            <FormControl variant="outlined" style={{minWidth: "200px", marginRight: "5px"}}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef2 = ref;
                }}
              >
                Model
              </InputLabel>
              <Select
                value={this.state.model}
                onChange={e => this.setState({model: e.target.value})}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth2}
                    name="Make"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  Store.map(store => {
                    var m
                    if(store.make === this.state.make)
                      m = store.models.map(model => {
                        return <MenuItem value={model}>{model}</MenuItem>
                    })
                    return m                
                  })
                }
              </Select>
            </FormControl>
            <FormControl variant="outlined" style={{minWidth: "120px", marginRight: "5px"}}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef3 = ref;
                }}
              >
                Fuel Type
              </InputLabel>
              <Select
                value={this.state.fuelType}
                onChange={e => this.setState({fuelType: e.target.value})}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth3}
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="petrol">Petrol</MenuItem>
                <MenuItem value="diesel">Diesel</MenuItem>
                <MenuItem value="cng">CNG</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Year of Buying" variant="outlined" style={{marginRight: "5px"}}/>
            <Button variant="contained" color="primary" style={{color: "#ffffff"}}>
              Get Quotes
            </Button>
          </Grid>
          {/* second section starts */}
          <Grid style={{paddingTop: "50px"}}>
            {/* reviews */}
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item>
                <Typography variant="h3" style={{paddingBottom: "40px"}}>
                  Latest Reviews
                </Typography>
              </Grid>
              <Grid item>
              <img src="https://via.placeholder.com/900x400"/>
              </Grid>
            </Grid>
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
            <Grid style={{backgroundColor: "#f88339", padding:"50px 0 50px 0"}}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h3" color="secondary" style={{marginTop: "40px"}}>
                  About Settlemycar
                </Typography>
                <Typography variant="subtitle1" color="secondary" style={{marginTop: "20px"}}>
                  dummy paragraph
                </Typography>
                <img src="https://via.placeholder.com/200" style={{margin: "40px"}}/>
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
