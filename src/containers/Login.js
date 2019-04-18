import React,{Component} from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    root: {
        height: "100vh"
    },
    grid: {
        height: "100vh",
        wigth: "100vw",
    },
    sidenav: {
        padding: 0,
        position: "fixed",
        left: 0,
        marginTop: "100px",
    },
    loginGrid: {
        paddingTop: 100,
        height: "100%",
        backgroundColor: "#e3f2fd"
    },
    google: {
        marginTop: 40,
        margin: 20,
        backgroundColor: "#bababa",
        "&:hover": {
            backgroundColor: "#bababa"
        }
    },
    facebook: {
        margin: 20,
        color: "white",
        backgroundColor: "#3C5A99",
        "&:hover": {
            backgroundColor: "#3C5A99",
            color: "white"
        }
    },
    otp: {
        margin: 20,
        color: "white",
        backgroundColor: "#f88339",
        "&:hover": {
            color: "white",
            backgroundColor: "#f88339"
        }
    }
};

class Login extends Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <ul className={classes.sidenav}>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                </ul>
                <Grid className={classes.grid} container direction="row"spacing={24}>
                    <Grid className={classes.loginGrid} container xs={12} sm={5} alignItems="center" direction="column">
                        <Typography variant="h2" style={{fontWeight: "bold"}}>
                            Sign In
                        </Typography>
                        <Button className={classes.google}>Sign in with Google</Button>
                        <Button className={classes.facebook}>Sign in with Facebook</Button>
                        <Button className={classes.otp}>Sign in with OTP</Button>
                    </Grid>
                    <Grid container xs={12} sm={7} style={{padding: "0"}} justify="center" alignItems="center">
                        <img alt="" src="https://via.placeholder.com/400"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Login)