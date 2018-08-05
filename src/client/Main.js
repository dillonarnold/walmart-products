import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { SearchBar, SearchResults } from './components';

const Main = () => (
  <React.Fragment>
    <CssBaseline />
    <Grid container justify="center" spacing={24}>
      <Grid item md={8} xs={11}>
        <SearchBar/>
        <SearchResults/>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default Main;
