import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, Button, AppBar, Toolbar } from '@material-ui/core';

const styles = {
    root: {
        height: "100vh",
        width: "100vw"
    }
}

class Verify extends Component {

    handleBack = () =>{
        this.props.history.push('/quotes');
    }

    handleGetQuotes = () => {
        this.props.history.push('/garages');
    }

    render() {

        const {classes} = this.props;

        return(
            <div>
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
            <Grid className={classes.root} container justify="center" alignItems="center" direction="column">
                <Grid item>
                    <Paper style={{padding: "40px", maxWidth: "400px"}} >
                        <Typography variant="h5">
                            Your Details
                        </Typography>
                        <Typography>
                            Please enter your mobile number and we will check if you have an account with us
                        </Typography>
                        <TextField label="Mobile Number" style={{marginTop: "20px"}} />
                        <Grid container justify="space-between" style={{paddingTop: "40px"}}>
                            <Button variant="contained" onClick={this.handleBack}>back</Button>
                            <Button variant="contained" color="primary" style={{color: "white"}} onClick={this.handleGetQuotes}>
                                get my quotes
                            </Button>
                        </Grid>
                    </Paper>
                </Grid> 
                {/* footer */}
                <hr style={{marginTop: "40px",width: "100%"}}/>
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
            </div>
        );
    }

}

Verify.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Verify);