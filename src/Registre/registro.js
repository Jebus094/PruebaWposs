import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';


import useStyles from './style'
import { CardContent } from '@material-ui/core';



export default function Registro() {
  const [env, setEnv] = useState({ nombre: "", cedula: "", correo: "", contrasena: "", comfcontra: "" });
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.ban} position="static">
        <Toolbar>
          <h1 >Registrar</h1>
        </Toolbar>
      </AppBar>
      <CardContent className={classes.contenedor}>

        <Grid className={classes.root} noValidate autoComplete="off" >
          <TextField required id="standard-required" label="Required" name="nombre" id="nombre" label="Nombre" variant="outlined" />
          <TextField required id="standard-required" label="Required" name="cedula" id="cedula" label="Cedula" variant="outlined" value={env.telefono} />
          <TextField name="correo" id="correo" label="Correo Electronico" variant="outlined" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="contrasena" id="contrasena" label="Contraseña" variant="outlined" value={env.ciudad} />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="comfcontra" id="comfcontra" label="Confirme Contraseña" variant="outlined" value={env.asunto} />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          Registrar
        </Button>
      </CardContent>
    </div>

  );

}