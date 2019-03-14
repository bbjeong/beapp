import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core'

//mobx
import { Provider } from 'mobx-react';
import surveyStore from './stores/surveyStore';
import DevTools from 'mobx-react-devtools';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Provider surveyStore={surveyStore}>
    <MuiThemeProvider theme={theme}>
      <App />
      <DevTools />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
