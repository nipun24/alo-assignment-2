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

    render(){
        const {classes} = this.props
        console.log(this.props.match.params.content)
        return(
            <div>
                <div className={classes.divHead}>
                    {this.props.match.params.content}
                </div>
                <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida fringilla orci viverra accumsan. Praesent bibendum dictum diam, a mattis augue. Cras tellus ipsum, mollis non orci et, rhoncus tincidunt dolor. Nunc et dictum quam, nec placerat magna. Nullam faucibus felis turpis, a consectetur nisl pellentesque id. Aenean ultrices dictum lectus in mattis. Aliquam id magna quam.
                </p>
            </div>
        );
    }
}

BlogContent.propTypes ={
    classes: PropTypes.object,
}

export default withStyles(styles)(BlogContent);