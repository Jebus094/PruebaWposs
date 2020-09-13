import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { InputLabel } from '@material-ui/core';
import useStyles from './style';


export default function Banner(theme) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.ban} position="static">
        <Toolbar>
          <h1 >Banco</h1>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}/>
      <div>
      <InputLabel className={classes.lab} >NAME</InputLabel>

      </div>

    </div>


  );
}
