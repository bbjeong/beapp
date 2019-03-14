import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Emoji from 'a11y-react-emoji'

export class Ending extends Component {
  state = {
    token: this.props.tokenTotal
  }

  render() {
    return (
      <React.Fragment>
        {/* <Typography variant="h4" gutterBottom>
          Type 3
        </Typography> */}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
            Ending
            </Typography>
            <Typography variant="h6" gutterBottom>
            설문조사가 모두 끝났습니다! 수고하셨습니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            귀하는 총 {this.state.token} 의 BET토큰을 획득하셨습니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            전체 응답이 완료되는 대로, coffee 쿠폰 당첨자와 설문조사 결과를 피드백 해드리겠습니다.
            </Typography>
            <Typography variant="h6" gutterBottom>
            감사합니다! <Emoji symbol="❤️" label="love" />
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Ending
