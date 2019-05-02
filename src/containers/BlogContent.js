import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {withStyles} from '@material-ui/core/styles'

const styles = {
    divHead: {
        height: "80vh",
        display : "flex",
        backgroundImage: "url(\"https://via.placeholder.com/2000\")",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px"
    },
    content: {
        margin: 20
    }
}

class BlogContent extends Component {

    state = {
        post: ""
    }

    componentDidMount() {
        fetch("https://public-api.wordpress.com/rest/v1/sites/settlemy.car.blog/posts")
        .then(res => res.json())
        .then(res => {
            res.posts.map(post => {
                if(post.ID.toString() === this.props.match.params.content){
                    this.setState({post})
                }
            })
        })
    }
    
    render(){
        const {classes} = this.props;
        return(
            <div>
                <div className={classes.divHead}>
                    {this.state.post.title}
                </div>
                <div style={{margin: "20px"}} dangerouslySetInnerHTML={{ __html: this.state.post.content}} />
            </div>
        );
    }
}

BlogContent.propTypes ={
    classes: PropTypes.object,
}

export default withStyles(styles)(BlogContent);