import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, Paper } from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

const styles = {
    navButtons: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    navLink: {
        marginRight: 10,
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline"
        }
    },
    secNav: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",      
    },
    secNavButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        padding: 5,
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline"
        }
    }
}

const themeColor = "#f88339";

const Cars = (props) => {
    if(props.display){
        return(
            <Grid container style={{padding: "50px"}}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="h4">My Cars</Typography>
                        <Typography variant="subtitle1">All your cars</Typography>
                        <select>
                            <option value="">All Cars</option>
                        </select>
                        <select style={{marginLeft: "10px"}}>
                            <option value="">All Models</option>
                        </select>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Button color="secondary" style={{backgroundColor: themeColor}}>Create Car</Button>
                            <Grid style={{marginTop: "20px"}}>
                                <select>
                                    <option value="">Recently Added</option>
                                </select>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
                <Paper style={{width: "100%", marginTop: "50px", padding: "20px"}}>
                <Grid container justify="space-around">
                        <img src="https://via.placeholder.com/200"/>
                        <Grid>
                            <Typography variant="h5">No cars</Typography>
                            <Typography>Keep track of all information regarding your car, add your car</Typography>
                            <Button variant="contained" color="primary" style={{color: "white"}}>Create Car</Button>
                        </Grid>
                </Grid>
                </Paper>           
            </Grid>
        );
    }
    else{
        return null
    }
}

const Jobs = (props) => {
    if(props.display){
        return(
            <div>
                jobs
            </div>
        );
    }
    else{
        return null
    }
}

class Account extends Component {

    state = {
        carsTab: {
            backgroundColor: themeColor
        },
        carsDisplay: true,
        jobsTab: {
            backgroundColor: "transparent"
        },
        jobsDisplay: false,
    }

    tabClick = (e) => {
        if(e === "cars"){
            this.setState({
                carsTab: {
                    backgroundColor: themeColor
                },
                jobsTab: {
                    backgroundColor: "transparent"
                },
                carsDisplay: true,
                jobsDisplay: false,
            })
        }
        else if(e === "jobs"){
            this.setState({
                carsTab: {
                    backgroundColor: "transparent"
                },
                jobsTab: {
                    backgroundColor: themeColor
                },
                carsDisplay: false,
                jobsDisplay: true,
            })
        }
    }

    render() {
        const {classes} = this.props
        return(
            <div>
                <AppBar position="static" elevation={0}>
                    <Toolbar>
                        <div className={classes.navButtons}>
                            <Button color="secondary">
                                my Garage
                            </Button>
                            <IconButton color="secondary">
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <AppBar position="static" color="white">
                    <Toolbar>
                        <div className={classes.secNav}>
                            <div className={classes.secNavButton} style={this.state.carsTab} onClick={()=>this.tabClick("cars")}>
                                <img src="https://via.placeholder.com/40" />
                                <Typography variant="caption">Cars</Typography>
                            </div>
                            <div className={classes.secNavButton} style={this.state.jobsTab} onClick={()=>this.tabClick("jobs")}>
                                <img src="https://via.placeholder.com/40" />
                                <Typography variant="caption">Jobs</Typography>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Cars display={this.state.carsDisplay}/>
                <Jobs display={this.state.jobsDisplay}/>
            </div>
        );
    }
}

Account.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Account)