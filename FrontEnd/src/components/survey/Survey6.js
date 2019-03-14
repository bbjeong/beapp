import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Survey6 extends Component {
  state = {
    answer6: ''
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({ [name]: value });
    this.props.onUpdateAnswer(name, value);
  };

  componentWillUnmount(){
    this.props.onUpdateToken(500);
  }

  render() {
    const { answer6 } = this.state;

    return (
      <React.Fragment>
        {/* <Typography variant="h4" gutterBottom>
          Type 3
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Question 6
            </Typography>
            <Typography variant="h6" gutterBottom>
            반반(50%)의 확률로 BET를 얻거나 잃는 마지막 ‘찬스’가 있다고 가정해 봅시다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            토큰을 잃게 된다면 1,000 BET를 잃게 될 것입니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            ‘얻는 BET’ 토큰이 얼마나 되어야 이 찬스에 참여하시겠습니까?
            </Typography>
            <Typography variant="h6" gutterBottom>
            아래 빈 칸에 토큰량을 적어 주세요.
            </Typography>
            <Typography variant="h6" gutterBottom>
            적어 주시면 감사의 의미로 500 BET가 지급됩니다.
            </Typography>

            <TextField
              id="answer6"
              name="answer6"
              label="원하시는 토큰량을 입력해주세요."
              fullWidth
              autoComplete="billing address-line2"
              value={answer6}
              onChange={this.handleChange('answer6')}
            />
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}

export default Survey6;
