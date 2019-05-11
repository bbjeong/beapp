import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Emoji from 'a11y-react-emoji'

class Intro extends Component {

  state = {
    token: 1000
  }

  handleChange = name =>({target: {value}}) => {
    this.setState({[name]: value});
    this.props.onUpdateAnswer(name, value);

  };

  componentWillUnmount(){
    this.props.onUpdateToken(this.state.token);
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Intro
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              먼저 설문조사에 응해주셔서 감사합니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
              본격적인 설문조사에 앞서 여러분의 인적상황을 파악하기 위한 다음의
              간단한 질문들에 답해 주시면 감사하겠습니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
              (여러분의 개인정보는 암호화되어 보관됩니다?)
            </Typography>
            <Typography variant="h6" gutterBottom>
              응답을 마치시면 기본 1,000 BET 토큰을 획득하실 수 있습니다.
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom>
              귀하의 성별을 선택해 주십시요?
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name='gender'
                row
                onChange={this.handleChange('gender')}
              >
                <FormControlLabel value="1" control={<Radio />} label="남자" />
                <FormControlLabel value="2" control={<Radio />} label="여자" />
              </RadioGroup>
            </FormControl>
            <Divider />
            <Typography variant="h6" gutterBottom>
              귀하의 연령대를 선택해 주십시요?
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                name='age'
                row
                onChange={this.handleChange('age')}
              >
                <FormControlLabel value="1" control={<Radio />} label="20대" />
                <FormControlLabel value="2" control={<Radio />} label="30대" />
                <FormControlLabel value="3" control={<Radio />} label="40대" />
                <FormControlLabel value="4" control={<Radio />} label="50대" />
              </RadioGroup>
            </FormControl>
            <Divider />
            <TextField
              id="email"
              name="email"
              label="설문결과를 받으실 이메일을 등록해주세요."
              fullWidth
              autoComplete="billing address-line3"
              onChange={this.handleChange('email')}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              이어지는 모든 설문 문항들에 대한 응답을 완료하시는 분들 중, 가장 많은 토큰을 획득하신 분께는 모바일 쿠폰<Emoji symbol="🥤" lable="커피" />을 지급해 드리겠습니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
              참여해 주셔서 감사합니다!
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Intro;
