import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={24}>
        <Grid item md={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

ReactDOM.render(
  <App
    title="Welcome to the Mullet Stack."
    subtitle="Facebook in a asdf. adfawerewrwerf in the back."
  />,
  document.getElementById('root')
);
