import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Emoji from 'a11y-react-emoji'

class Survey5 extends Component {
  state = {
    answer51: false,
    answer52: false,
    answer53: false
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({ [name]: value });
    this.props.onUpdateAnswer(name, value);
  };

  componentWillUnmount(){
    this.props.onUpdateToken(900);
  }

  render() {

    return (
      <React.Fragment>
        {/* <Typography variant="h4" gutterBottom>
          Type 1
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
            당신은 다음 두 가지 선택지 중 무엇을 선택하시겠습니까? (양자택일)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 5-1
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" /> 무조건 900 BET 잃기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 1,000 BET 잃기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 잃지 않는 ‘행운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer51"
                value={this.state.value}
                onChange={this.handleChange('answer51')}
              >
                <FormControlLabel value="1" control={<Radio />} label="1번" />
                <FormControlLabel value="2" control={<Radio />} label="2번" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Question 5-2
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" /> 무조건 1800 BET 잃기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 2,000 BET 잃기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 잃지않는 ‘행운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer52"
                value={this.state.value}
                onChange={this.handleChange('answer52')}
              >
                <FormControlLabel value="1" control={<Radio />} label="1번" />
                <FormControlLabel value="2" control={<Radio />} label="2번" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Question 5-3
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" /> 무조건 2700 BET 잃기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 3,000 BET 잃기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 잃지 않는 ‘행운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer53"
                value={this.state.value}
                onChange={this.handleChange('answer53')}
              >
                <FormControlLabel value="1" control={<Radio />} label="1번" />
                <FormControlLabel value="2" control={<Radio />} label="2번" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Survey5
