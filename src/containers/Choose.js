import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ContextStore from '../ContextStore';
import {Stepper, Step, StepLabel, Grid, Typography, Paper, Button, Dialog, DialogContent,
    DialogActions, DialogTitle, TextField, FormControlLabel, Checkbox, AppBar, Toolbar} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';
import {Call, LocationOn} from '@material-ui/icons';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: { main: '#f88339' }, 
      secondary: { main: '#ffffff' },
    },
    overrides: {
        MuiStepIcon: {
            root: {
                color: '#000000',
                '&$active': {
                    color: '#ffffff',
                },
                '&$completed': {
                    color: '#ffffff',
                },
            },
        },
    }
});

const styles = {
    stepper: {
        width: "100%",
        backgroundColor: "#f88339",
        marginLeft: 50,
        marginRight: 50
    },
    step: {
    },
}

class Choose extends Component {

    state = {
        open: false
    }

    static contextType = ContextStore;

    handleClose = () => {
        this.setState({open: false})
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    render() {
        const {classes} = this.props
        return(
            <MuiThemeProvider theme={theme}>
            <Grid container>
            <AppBar position="static" elevation={0}>
                    <Toolbar>
                        <Grid container direction="row" justify="flex-start">
                            <Grid item>
                                <Typography variant="h6" color="secondary" >
                                Settlemycar
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container style={{backgroundColor: "#f88339"}}>
                    <Grid item style={{padding: "40px"}}>
                        <Typography variant="h4" color="secondary">Thank You, Quote Accepted</Typography>
                        <Typography variant="subtitle1" color="secondary">{this.context.garage.name} will be in touch.</Typography>
                    </Grid>
                    <Grid container>
                        <Stepper activeStep={3} className={classes.stepper}>
                            <Step>
                                <StepLabel>Requested Quotes</StepLabel>
                            </Step>
                            <Step >
                                <StepLabel>Compare Quotes</StepLabel>
                            </Step>
                            <Step >
                                <StepLabel>Choose Garage</StepLabel>
                            </Step>
                            <Step >
                                <StepLabel>Leave a Review</StepLabel>
                            </Step>
                        </Stepper>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between">
                    <Grid item md={8} xs={12}>
                        <Paper style={{margin: "20px"}}>
                            <Grid container direction="row" justify="space-between" style={{padding: "20px"}}>
                                <Grid item>
                                    <Typography variant="h5">Clutch Replacement</Typography>
                                    <Typography variant="subtitle1">Prices inclusive of tax</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5">Rs. 580/-</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Grid container direction="column">
                            <Grid item>
                                <Paper style={{margin: "20px"}}> 
                                    <Grid container style={{padding: "20px"}} direction="column" alignItems="flex-start"> 
                                        <Typography variant="h6">{this.context.garage.name}</Typography>
                                        <StarRatings   
                                            rating={this.context.garage.stars}     
                                            starRatedColor="#f88339" 
                                            numberOfStars={5} 
                                            starDimension="20px"
                                            starSpacing="1px"
                                        />
                                        <Typography variant="body1">{this.context.garage.jobsCompleted} bookings</Typography>
                                        <Typography variant="subtitle1">{this.context.garage.location}</Typography>
                                        <Button variant="contained" color="primary" style={{color: "white"}}>
                                            <Call style={{marginRight: "5px"}} />
                                            call garage
                                        </Button>
                                        <Button variant="contained" color="primary" style={{color: "white", marginTop: "10px"}}>
                                            <LocationOn style={{marginRight: "5px"}} />
                                            View on map
                                        </Button>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper style={{margin: "20px", padding: "20px", marginTop: "-10px"}}>
                                    <Typography variant="h6">Review the service</Typography>
                                    <Typography>Leave a review</Typography>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        style={{color: "white"}}
                                        onClick={this.handleOpen}
                                    >
                                        Leave a review
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <hr style={{width: "100vw"}}/>
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
            <Dialog 
                open={this.state.open}
                onClose={this.handleClose}
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
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            </MuiThemeProvider>
        );
    }
}

Choose.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(Choose)