import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography, Paper, Button, AppBar, Toolbar } from '@material-ui/core';
import Shops from '../assets/Garages.json';
import StarRatings from 'react-star-ratings';
import ContextStore from '../ContextStore';

const styles = {
    root: {
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
        overflowX: "hidden",
        flexDirection: "column",
        display: "flex",
    },
    paper: {
        margin: "10px 10px 0px 10px",
        padding: "10px",
    },
    shopName: {
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
            color: "#f88339"
        }
    },
    choose: {
        display: "flex",
        justifyContent: "center",
        width: "30%"
    }
}

class Garages extends Component {

    static contextType = ContextStore;

    handleChoose = (s) => {
        this.context.setGarage(s);
        this.props.history.push("/choose");
    }

    render() {
        const {classes} = this.props;

        return(
            <Grid className={classes.root}>
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
                {Shops.map(shop => {
                    return(
                        <Paper className={classes.paper} key={shop.name}>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                                <Grid item direction="row">
                                    <Grid container direction="row">
                                        <img alt="" src={shop.image} />
                                        <Grid style={{marginLeft: "20px"}} >
                                            <Typography variant="h5" className={classes.shopName}>{shop.name}</Typography>
                                            <Typography variant="body2">{shop.location}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {(shop.stars === 0) ? 
                                    <div>
                                        <Typography>Not Yet Rated</Typography>
                                    </div>
                                    :
                                    <div>
                                        <Grid container direction="row">
                                            <StarRatings   
                                                rating={shop.stars}     
                                                starRatedColor="#f88339" 
                                                numberOfStars={5} 
                                                starDimension="20px"
                                                starSpacing="1px"
                                            />
                                            <Typography style={{marginLeft: "10px"}} variant="h6">{shop.stars}</Typography>
                                        </Grid>
                                    </div>
                                }
                                {(shop.status === "waiting") ?
                                    <div style={{maxWidth: "300px"}}>
                                        <Typography variant="h6">Waiting on garage...</Typography>
                                        <Typography>
                                            Your job details are with the garage who are working on a tailoured quote
                                        </Typography>
                                    </div>
                                    :
                                    <div className={classes.choose}>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            style={{color: "white"}}
                                            onClick={() => this.handleChoose(shop)}
                                        >
                                            Choose garage
                                        </Button>
                                    </div>
                                }
                            </Grid>
                        </Paper>
                    );
                })}
                <hr style={{width: "100%", marginTop: "40px"}}/>
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
        );
    }
}

Garages.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Garages);