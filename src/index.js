import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { getStore } from './redux/configureStore'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f4f4f4',
    },
    textColor: {
      dark: "#1a1a1a"
    },
    backgroundColor: {
      main: "#f1f1f1"
    },
    borderColor: {
      main: "#f1f1f1",
      table: "#dcdcdc"
    },
    buttonColor: {
      primary: "#f66623",
      negative: "#f20000"
    }

  },
  overrides: {
    MuiFilledInput: {
      multiline: {
        padding: '5px'
      }
    }
  }
});

const store = getStore();

const app = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
};

ReactDOM.render(
  app(),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
