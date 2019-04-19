import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';

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
            <Grid className={classes.root} container justify="center" alignItems="center">
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
            </Grid>
        );
    }

}

Verify.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Verify);