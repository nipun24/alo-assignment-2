import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import Shops from '../assets/Garages.json';
import StarRatings from 'react-star-ratings';

const styles = {
    root: {
        height: "100vh",
        width: "100vw",
        overflow: "auto",
        flexDirection: "column",
        display: "flex",
        backgroundColor: "#f88339"
    },
    paper: {
        margin: "10px 10px 0px 10px",
        padding: "10px"
    },
    shopName: {
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
            color: "#f88339"
        }
    }
}

class Garages extends Component {

    handleGarage = (garage) => {
        console.log(garage)
    }

    render() {
        const {classes} = this.props;

        return(
            <Grid className={classes.root}>
                {Shops.map(shop => {
                    return(
                        <Paper className={classes.paper} key={shop.name} onClick={() => this.handleGarage(shop)}>
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
                                    <div>
                                        <Typography>Quote Receiver</Typography>
                                        <Typography>The garage has sent a tailoured quote</Typography>
                                    </div>
                                }
                            </Grid>
                        </Paper>
                    );
                })}
            </Grid>
        );
    }
}

Garages.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Garages);