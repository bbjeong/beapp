import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Emoji from 'a11y-react-emoji'

class Survey2 extends Component {

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
          Type 2
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 2
            </Typography>
            <Typography variant="h6" gutterBottom>
            롯데리아에서 기본 햄버거(데리버거)<Emoji symbol="🍔" label="햄버거" />와 바닐라 아이스크림<Emoji symbol="🍦" label="아이스크림" />을 각각 주문하면 전체 가격은 3,800원입니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            햄버거의 가격은 바닐라 아이스크림 가격보다 3,000원 더 비쌉니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            그렇다면 바닐라 아이스크림의 가격은 얼마일까요
            </Typography>
            <TextField
              name="answer2"
              label="가격을 입력해주세요."
              fullWidth
              onChange={this.handleChange('answer2')}
              autoComplete="billing address-line2"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Survey2
