import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, Paper, Chip, Dialog, DialogContent, 
    DialogTitle, DialogActions, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import ContextStore from '../ContextStore';
import StarRatings from 'react-star-ratings';

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
        borderRadius: 3,
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
            <div>
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
                                <Button 
                                    color="secondary" 
                                    style={{backgroundColor: themeColor}}
                                    onClick={props.createCar}
                                >
                                    Create Car
                                </Button>
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
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        style={{color: "white"}}
                                        onClick={props.createCar}
                                    >
                                        Create Car
                                    </Button>
                                </Grid>
                        </Grid>
                    </Paper>           
                </Grid>
            </div>
        );
    }
    else{
        return null
    }
}

const Jobs = (props) => {
    if(props.display){
        return(
            <Grid container>
                <Paper style={{margin: "50px",width: "100%", padding: "20px"}} >
                    <Grid container direction="row" alignItems="center" justify="space-between" >
                        <Typography variant="h4">Latest activity</Typography>
                        <Grid item>
                            <Typography style={{color: "#2196f3", cursor: "pointer"}}>View all jobs</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <Typography 
                                variant="h6" 
                                style={{color: "#2196f3", textDecoration: "underline", cursor: "pointer"}}
                            >
                                Clutch Replacement
                            </Typography>
                            <Typography>Your quote: Rs.580/-</Typography>
                            <Typography>Lion Garage Service Ltd.</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" justify="space-between" alignItems="center">
                                <Chip label="make - model" color="primary" style={{color: "white"}}/>
                                <Grid item style={{marginTop: "10px"}}>
                                    <Button color="primary" style={{marginRight: "10px"}}>View</Button>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        style={{color: "white"}}
                                        onClick={props.openFeedback}
                                    >
                                        Leave Feedback
                                    </Button>
                                </Grid>
                            </Grid>
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
        car: {
            make: "",
            model: "",
            fuelType: "",
            year: ""
        },
        openCar: false,
        openFeedback: false,
    }

    static contextType = ContextStore;

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

    openFeedback = () => {
        this.setState({openFeedback: true})
    }

    handleFeedbackClose = () => {
        this.setState({openFeedback: false})
    }

    createCar = () => {
        this.handleOpen()
    }

    handleOpen = () => {
        this.setState({openCar: true})
    }

    handleClose = () => {
        this.setState({openCar: false})
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
                                <img src="https://via.placeholder.com/40" style={{borderRadius: "3px"}} />
                                <Typography variant="caption">Cars</Typography>
                            </div>
                            <div className={classes.secNavButton} style={this.state.jobsTab} onClick={()=>this.tabClick("jobs")}>
                                <img src="https://via.placeholder.com/40" style={{borderRadius: "3px"}} />
                                <Typography variant="caption">Jobs</Typography>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Cars display={this.state.carsDisplay} createCar={this.createCar}/>
                <Jobs display={this.state.jobsDisplay} openFeedback={this.openFeedback}/>
                <Dialog
                    open={this.state.openCar}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Create Car</DialogTitle>
                </Dialog>
                <Dialog 
                    open={this.state.openFeedback}
                    onClose={this.handleFeedbackClose}
                >
                    <DialogTitle>Submit Feedback</DialogTitle>
                    <DialogContent>
                        <Grid container direction="column" spacing={40} style={{width: "500px", padding: "20px"}}>
                            <Typography>Your Rating out of 5</Typography>
                            <StarRatings   
                                rating={0}     
                                starRatedColor="#f88339" 
                                numberOfStars={5} 
                                starDimension="20px"
                                starSpacing="1px"
                            />
                            <TextField 
                                placeholder="What was the final price?"
                                fullWidth
                                margin="dense"
                            />
                            <TextField 
                                placeholder="Your Feedback"
                                fullWidth
                                margin="dense"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    color="primary"
                                    />
                                }
                                label="I recommended this garage"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    color="primary"
                                    />
                                }
                                label="Share review on Facebook"
                            />
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleFeedbackClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleFeedbackClose} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Account.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Account)