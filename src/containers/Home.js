import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, Grid, TextField, Select, MenuItem, OutlinedInput, FormControl, InputLabel} from '@material-ui/core';
import '../css/Home.css';
import Store from '../assets/Store.json';
import ContextStore from '../ContextStore';

const images = [
  "https://via.placeholder.com/900x400?text=first+review",
  "https://via.placeholder.com/900x400?text=second+review", 
  "https://via.placeholder.com/900x400?text=third+review"
]

class Home extends Component {
  state = {
    make:'',
    model:'',
    fuelType: '',
    year: '',
    labelWidth1: 0,
    labelWidth2:0,
    labelWidth3: 0,
    reviewNumber: 0
  }

  static contextType = ContextStore;

  componentDidMount() {
    this.setState({
      labelWidth1: ReactDOM.findDOMNode(this.InputLabelRef1).offsetWidth,
      labelWidth2: ReactDOM.findDOMNode(this.InputLabelRef2).offsetWidth,
      labelWidth3: ReactDOM.findDOMNode(this.InputLabelRef3).offsetWidth
    });
  }

  onReviewClick = () => {
    const reviewNumber = this.state.reviewNumber + 1;
    if (reviewNumber >= images.length)
      this.setState({reviewNumber: 0})
    else
      this.setState({reviewNumber});
  }

  getQuotes = () => {
    const {make,model,fuelType,year} = this.state;
    const car = Object.assign({}, car, {make, model, fuelType, year});
    this.context.setCar(car);
    this.props.history.push('/quotes')
  }
  
  render() {
    return (
      <div>
        {/* sidebar */}
        <ul class="sidenav">
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
          <li><img alt="" src="https://via.placeholder.com/50"/></li>
        </ul>
        
        <Grid>
          {/* first section starts */}
          <Grid style={{backgroundColor: "#f88339"}}>
            {/* app bar starts */}
            <AppBar className="navbar" position="static" elevation={0}>
              <Toolbar>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <Typography variant="h6" color="secondary" style={{marginTop: "10px"}}>
                      Settlemycar
                    </Typography>
                  </Grid>
                  <Grid item style={{margin: "10px"}}> 
                    <Button component={Link} to='/login' style={{backgroundColor: "#e05e0d"}} class="button-link-nav">SIGN UP</Button>
                    <Button component={Link} to='/login' class="button-link-nav">SIGN IN</Button>
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
                  <img alt="" src="https://via.placeholder.com/300" class="slide"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* form */}
          <Grid container class="form" direction="row" justify="center" alignItems="center">
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
                    return <MenuItem value={store.make} key={store.make}>{store.make}</MenuItem>
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
            <FormControl variant="outlined" style={{minWidth: "150px", marginRight: "5px"}}>
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
            <TextField label="Year of Buying" variant="outlined" style={{marginRight: "5px"}} onChange={(e) => this.setState({year: e.target.value})} />
            <Button variant="contained" color="primary" style={{color: "#ffffff"}} onClick={this.getQuotes}>
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
                <img alt="" class="review" src={images[this.state.reviewNumber]} onClick={this.onReviewClick}/>
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
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
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
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop: "40px"}}>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
                </Grid>
                <Grid item direction="column" alignItems="center">
                  <img alt="" src="https://via.placeholder.com/150"/>
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
                <img alt="" src="https://via.placeholder.com/200" style={{margin: "40px"}}/>
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
      </div>
    );
  }
}

export default Home;
