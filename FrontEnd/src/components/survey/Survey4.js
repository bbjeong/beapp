import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Emoji from 'a11y-react-emoji'

class Survey4 extends Component {
  state = {
    answer41: false,
    answer42: false,
    answer43: false
  };

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
            <Typography variant="h6" gutterBottom>
            와우! 당신은 벌써 4,000 BET를 획득하셨습니다! <Emoji symbol="👍" label="good" />
            </Typography>
            <Typography variant="h6" gutterBottom>
            하지만 이제부터는 당신의 선택과 운(확률)에 따라 지급 토큰이 달라집니다!
            </Typography>
            <Typography variant="h6" gutterBottom>
            당신은 다음 두 가지 선택지 중 무엇을 선택하시겠습니까? (양자택일)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 4-1
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" /> 무조건 900 BET 얻기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 1,000 BET 얻기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 얻지 못하는 ‘불운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer41"
                value={this.state.value}
                onChange={this.handleChange('answer41')}
              >
                <FormControlLabel value="1" control={<Radio />} label="1번" />
                <FormControlLabel value="2" control={<Radio />} label="2번" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Question 4-2
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" />무조건 1800 BET 얻기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 2,000 BET 얻기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 얻지 못하는 ‘불운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer42"
                value={this.state.value}
                onChange={this.handleChange('answer42')}
              >
                <FormControlLabel value="1" control={<Radio />} label="1번" />
                <FormControlLabel value="2" control={<Radio />} label="2번" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Question 4-3
            </Typography>
            <Typography variant="h6" gutterBottom>
            <Emoji symbol="1️⃣" lable="1" /> 무조건 2700 BET 얻기 <Emoji symbol="2️⃣" lable="2" /> 90%의 확률로 3,000 BET 얻기
            </Typography>
            <Typography variant="body1" gutterBottom>
            (즉, 10% 확률로 BET 토큰을 하나도 얻지 못하는 ‘불운’을 겪을 수 있습니다)
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="answer43"
                value={this.state.value}
                onChange={this.handleChange('answer43')}
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

export default Survey4
