import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography, AppBar, Toolbar, Card, CardActionArea, CardContent, CardMedia, 
    CardActions, Button, CircularProgress } from '@material-ui/core';

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
    const {author, title, date} = props.post
    return(
        <Card style={{maxWidth: "400px", marginRight: "20px", marginBottom: "20px"}}>
            <CardActionArea onClick={() => props.onClick(props.post)}>
                <CardMedia
                    style={{width: "400px", height: "400px"}}
                    image="https://via.placeholder.com/400"
                />
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    <Typography>{date}</Typography>
                    <Typography>{author.first_name + " " + author.last_name}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color="primary" onClick={() => props.onClick(props.post)}>read more</Button>
            </CardActions>
        </Card>
    );
}

class Blog extends Component {

    state = {
        posts: "",
        loading: true
    }

    componentDidMount() {
        fetch("https://public-api.wordpress.com/rest/v1/sites/settlemy.car.blog/posts")
        .then(res => res.json())
        .then(res => {
            this.setState({posts: res.posts, loading: false})
        })
    }

    handleClick = (post) => {
        this.props.history.push(`/blog/${post.ID}`)
    }

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
                {
                    this.state.loading ? (
                        <CircularProgress />
                    ) 
                    :
                    (
                        <div>
                            <img src="https://via.placeholder.com/1000" style={{height: "90vh",width: "100vw"}} />
                            <div className={classes.cardHolder}>
                            {
                                this.state.posts.map(post => {
                                    console.log(post)
                                    return <BlogItem post={post} onClick={this.handleClick}/>
                                })
                            }
                            </div>
                        </div>
                    )
                }
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
            </div>
        )
    }
}

Blog.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Blog)