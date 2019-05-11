import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Survey3 extends Component {
  state = {
    answer31: '',
    answer321: false,
    answer322: false,
    answer323: false,
    answer324: false,
    answer325: false
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({ [name]: value });
    this.props.onUpdateAnswer(name, value);
  };

  componentWillUnmount(){
    this.props.onUpdateToken(1000);
  }

  _resetCheck = () => {
    this.setState({
      answer321: false,
      answer322: false,
      answer323: false,
      answer324: false,
      answer325: false
    })
  }

  render() {

    const { answer321, answer322, answer323, answer324, answer325 } = this.state;

    return (
      <React.Fragment>
        {/* <Typography variant="h4" gutterBottom>
          Type 3
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 3-1
            </Typography>
            <Typography variant="h6" gutterBottom>
              당신은 지난 한 달 동안 웃은 적이 몇 번이나 있습니까?
            </Typography>
            <TextField
              id="answer31"
              name="answer31"
              label="웃은 횟수를 입력해주세요."
              fullWidth
              onChange={this.handleChange('answer31')}
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 3-2
            </Typography>
            <Typography variant="h6" gutterBottom>
              요즈음 당신은 얼마나 행복합니까?
            </Typography>
            <FormControl component="fieldset">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answer321}
                      onChange={this.handleChange('answer321')}
                      value="1"
                    />
                  }
                  label="불행"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answer322}
                      onChange={this.handleChange('answer322')}
                      value="2"
                    />
                  }
                  label="조금불행"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answer323}
                      onChange={this.handleChange('answer323')}
                      value="3"
                    />
                  }
                  label="보통"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answer324}
                      onChange={this.handleChange('answer324')}
                      value="4"
                    />
                  }
                  label="조금행복"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answer325}
                      onChange={this.handleChange('answer325')}
                      value="5"
                    />
                  }
                  label="행복"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Survey3;
