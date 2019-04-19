import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, TextField, Grid, Card, CardMedia, CardContent, 
    Typography, CardActionArea, Button, FormControlLabel, Radio, RadioGroup, Paper} from '@material-ui/core';
import ContextStore from '../ContextStore';

const styles = {
    root: {
        height: "100vh"
    },
    media: {
        height: 150,
        width: 150
    },
    card: {
        margin: 10,
    },
    paper: {
        padding: 50
    },
    confirm: {
        margin: 10,
        width: 300,
        padding: 20
    }
}

class Quotes extends Component {
    state = {
        activeStep: 0,
        selected1: {
            state: false,
            color: "white"
        },
        selected2: {
            state: false,
            color: "white"
        },
        next: "next",
        pin: "",
        type: {
            what: "",
            info: ""
        },
    }

    static contextType = ContextStore;

    onSelect1 = () => {
        const selected1 = this.state.selected1.state;
        if(selected1){
            this.setState({selected1: {state: false, color: "white"}})
        }
        else {
            this.setState({selected1: {state: true, color: "#f88339"},selected2: {state: false, color: "white"}})
        }
    }

    onSelect2 = () => {
        const selected2 = this.state.selected2.state;
        if(selected2){
            this.setState({selected2: {state: false, color: "white"}})
        }
        else {
            this.setState({selected2: {state: true, color: "#f88339"}, selected1: {state: false, color: "white"}})
        }
    }

    handleNext = () => {
        var activeStep = this.state.activeStep;
        if(activeStep === 1){
            activeStep++;
            this.setState({next: "finish", activeStep})
        } 
        else if(activeStep === 2){
            this.props.history.push('/verify')
        }
        else{
            activeStep++;
            this.setState({activeStep})
        }
    }

    handleBack = () => {
        var activeStep = this.state.activeStep;
        activeStep--;
        this.setState({activeStep, next: "next"});
    }

    setService = (e) => {
        const what = "Service", info = e.target.value, {pin} = this.state
        this.setState({type:{what, info}})
        var quote = Object.assign({}, quote, {pin, type:{what, info}})
        this.context.setQuotes(quote)
    }

    setRepair = (e) => {
        const what = "Repair", info = e.target.value, {pin} = this.state
        this.setState({type:{what: "Repair", info: e.target.value}})
        var quote = Object.assign({}, quote, {pin, type:{what, info}})
        this.context.setQuotes(quote)
    }

    renderView = () => {
        const {classes} = this.props;
        if(this.state.activeStep === 0){
            return(
                <Grid container direction="column" alignItems="center" style={{marginTop: "50px", height: "70%"}}>
                    <TextField 
                        variant="outlined"
                        label="Enter PIN code"
                        onChange={(e) => this.setState({pin: e.target.value})}
                    />
                    <Grid container direction="row" justify="center" style={{marginTop: "40px"}}>
                        <Card className={classes.card} style={{backgroundColor: `${this.state.selected1.color}`}}>
                            <CardActionArea onClick={this.onSelect1}>
                                <CardMedia
                                    className={classes.media}
                                    image={"https://via.placeholder.com/150"}
                                />
                                <CardContent>
                                    <Typography variant="h5" align="center">Servicing</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.card} style={{backgroundColor: `${this.state.selected2.color}`}}>
                            <CardActionArea onClick={this.onSelect2}>
                                <CardMedia
                                    className={classes.media}
                                    image={"https://via.placeholder.com/150"}
                                />
                                <CardContent>
                                    <Typography variant="h5" align="center">Repairs</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            );
        }
        else if(this.state.activeStep === 1){
            const services = ["Full Service", "Oil Change", "Interim Service"];
            const repairs = ["repair 1", "reapair 2", "repair 3"];
            if(this.state.selected1.state){
                return(
                    <Grid container direction="column" alignItems="center" style={{marginBottom: "40px", marginTop: "40px"}}>
                        <Paper className={classes.paper}>
                            <RadioGroup
                                value={this.state.value}
                                onChange={e => this.setService(e)}
                            >
                                {
                                    services.map(service => {
                                        return <FormControlLabel value={service} control={<Radio color="primary" />} label={service} />
                                    })
                                }
                            </RadioGroup> 
                        </Paper>                   
                    </Grid>
                    
                );
            }
            else{
                return(
                    <Grid container direction="column" alignItems="center" style={{marginBottom: "40px", marginTop: "40px"}}>
                        <Paper className={classes.paper}>
                            <RadioGroup
                                onChange={e => this.setRepair(e)}
                            >
                                {
                                    repairs.map(repair => {
                                        return <FormControlLabel value={repair} control={<Radio color="primary" />} label={repair} style={{color: "white"}} />
                                    })
                                }
                            </RadioGroup>   
                        </Paper>                 
                    </Grid>
                    
                );
            }
        }
        else if(this.state.activeStep === 2){
            return(
                <Grid container direction="column" alignItems="center">
                    <Paper className={classes.confirm}>
                        <Grid container direction="row">
                            <img alt="" src="https://via.placeholder.com/50"></img>
                            <Typography variant="h6" style={{marginLeft: "20px"}}>
                                {this.context.car.make} - {this.context.car.model}
                            </Typography>
                        </Grid>
                    </Paper>
                    <Paper className={classes.confirm}>
                    <Grid container direction="row">
                        <img alt="" src="https://via.placeholder.com/50"></img>
                        <Grid style={{marginLeft: "20px"}}>
                            <Typography variant="body2">
                                Your PIN Code
                            </Typography>
                            <Typography variant="h6">
                                {this.context.quote.pin}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Paper>
                    <Paper className={classes.confirm}>
                    <Grid item>
                        <Typography variant="body2">
                            What are you looking for?
                        </Typography>
                        <Typography variant="h6">
                            {this.context.quote.type.what} - {this.context.quote.type.info}
                        </Typography>
                    </Grid>
                    </Paper>
                </Grid>
            );
        }

    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Stepper activeStep={this.state.activeStep}>
                    <Step >
                        <StepLabel>Enter PIN code</StepLabel>
                    </Step>
                    <Step >
                        <StepLabel>Service</StepLabel>
                    </Step>
                    <Step >
                        <StepLabel>Confirm</StepLabel>
                    </Step>
                </Stepper>
                {this.renderView()}
                <Grid container direction="row" justify="center" alignItems="flex-end">
                        <Button    
                        disabled={this.state.activeStep === 0} 
                        color="primary"
                        onClick={this.handleBack}
                        >
                            back
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{color: "white"}}
                            onClick={this.handleNext}
                        >
                            {this.state.next}
                        </Button>
                </Grid>
            </div>
        );
    }
}

Quotes.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(styles)(Quotes);