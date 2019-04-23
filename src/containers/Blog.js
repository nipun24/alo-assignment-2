import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography, AppBar, Toolbar, Card, CardActionArea, CardContent, CardMedia, 
    CardActions, Button } from '@material-ui/core';

const styles = {
    navItem: {
        marginRight: 32,
        "&:hover": {
            cursor: "pointer",
            color: "black",
            textDecoration: "underline",
        }
    },
    sidenav: {
        padding: 0,
        position: "fixed",
        left: 0,
        marginTop: 100,
    },
    cardHolder: {
        marginLeft: 60,
        display: "flex",
        flexWrap: "wrap",
    },
    cardMedia: {
        maxWidth: 400
    }
}

const topics = [
    {
        heading: "Car maintenance guide",
        img: "https://via.placeholder.com/400",
        date: "8th March 2019",
        name: "Louis butcher"
    },
    {
        heading: "Car maintenance guide",
        img: "https://via.placeholder.com/400",
        date: "8th March 2019",
        name: "Louis butcher"
    },
    {
        heading: "Car maintenance guide",
        img: "https://via.placeholder.com/400",
        date: "8th March 2019",
        name: "Louis butcher"
    },
    {
        heading: "Car maintenance guide",
        img: "https://via.placeholder.com/400",
        date: "8th March 2019",
        name: "Louis butcher"
    },
    {
        heading: "Car maintenance guide",
        img: "https://via.placeholder.com/400",
        date: "8th March 2019",
        name: "Louis butcher"
    }
]

const BlogItem = (props) => {
    const {heading, img, name, date} = props.topic
    return(
        <Card style={{maxWidth: "400px", marginRight: "20px", marginBottom: "20px"}}>
            <CardActionArea>
                <CardMedia
                    style={{width: "400px", height: "400px"}}
                    image={img}
                />
                <CardContent>
                <Typography variant="h5">{heading}</Typography>
                <Typography>{date}</Typography>
                <Typography>{name}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color="primary">read more</Button>
            </CardActions>
        </Card>
    );
}

class Blog extends Component {
    render() {

        const {classes} = this.props

        return(
            <div>
                <ul className={classes.sidenav}>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                    <li><img alt="" src="https://via.placeholder.com/50"/></li>
                </ul>
                <AppBar elevation={0} position="static">
                    <Toolbar>
                        <Typography variant="h5" color="secondary">Settlemycar</Typography>
                        <Grid container style={{marginLeft: "40px"}} alignItems="flex-end" justify="flex-start">
                            <Typography className={classes.navItem} variant="subtitle1" color="secondary">Visit Settlemycar</Typography>
                            <Typography className={classes.navItem} variant="subtitle1" color="secondary">Garage Success</Typography>
                            <Typography className={classes.navItem} variant="subtitle1" color="secondary">Maintenance</Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <img src="https://via.placeholder.com/1000" style={{height: "90vh",width: "100vw"}} />
                <div className={classes.cardHolder}>
                {
                    topics.map(topic => {
                        return <BlogItem topic={topic} />
                    })
                }
                </div>
            </div>
        )
    }
}

Blog.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Blog)