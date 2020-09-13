import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import useStyles from './style';
import SignIn from '../Login/login'
import Registro from '../Registre/registro'



export default function NavBar(theme) {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Grid item md={3} xs={3} sm={3}>
              <Link to="/login" style={{ textDecoration: 'none' }} color="inherit">Ingresar</Link>
            </Grid>
            <Grid item md={3} xs={3} sm={3}>
            <Link to="/registro" style={{ textDecoration: 'none' }} color="inherit">Registrar</Link>
            </Grid>            
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </div>
      <Switch>
        <Route path="/login" exact>
          <SignIn />

        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
      </Switch>
    </Router>
  );
}
