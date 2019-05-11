import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Survey1 extends Component {

  handleChange = name => ({target: {value}}) => {
    this.setState({ [name]: value });
    this.props.onUpdateAnswer(name, value);
  };

  componentWillUnmount(){
    this.props.onUpdateToken(1000);
  }

  render() {

    return (
      <React.Fragment>
        {/* <Typography variant="h4" gutterBottom>
          Type 1
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 1
            </Typography>
            <Typography variant="h6" gutterBottom>
            영어 알파벳 R를 떠올려 보십시오.
            </Typography>
            <Typography variant="h6" gutterBottom>
            R는 영어 단어의 첫 번째와 세 번째 중, 어느 위치에 더 자주 사용되는 철자일까요?
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name="answer1"
                onChange={this.handleChange('answer1')}
              >
                <FormControlLabel value="1" control={<Radio />} label="첫번째" />
                <FormControlLabel value="3" control={<Radio />} label="세번째" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Survey1
