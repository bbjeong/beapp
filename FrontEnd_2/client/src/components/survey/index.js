import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Intro from './Intro';
import Survey1 from './Survey1';
import Survey2 from './Survey2';
import Survey3 from './Survey3';
import Survey4 from './Survey4';
import Survey5 from './Survey5';
import Survey6 from './Survey6';
import Ending from './Ending';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

// const steps = ['Intro', '1', '2', '3', '4', '5', '6', 'Finish'];
const steps = ['Intro', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Ending'];

@inject('surveyStore')
@observer
class Survey extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  _getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Intro onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />
      case 1:
        return <Survey1 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 2:
        return <Survey2 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 3:
        return <Survey3 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 4:
        return <Survey4 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 5:
        return <Survey5 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 6:
        return <Survey6 onUpdateAnswer={this._onUpdateAnswer} onUpdateToken={this._onUpdateToken} />;
      case 7:
        return <Ending />;
      default:
        throw new Error('Unknown step');
    }
  }

  _onUpdateAnswer = (key, value) => {
    this.props.surveyStore.setAnswer(key, value);
  }

  _onUpdateToken = (value) => {
    this.props.surveyStore.setTokens(value);
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              행동경제학 설문지
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    행동경제학 설문조사
                  </Typography>
                  <Typography variant="subtitle1">
                    설문참여에 감사드립니다.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this._getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'End Survey' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Survey);