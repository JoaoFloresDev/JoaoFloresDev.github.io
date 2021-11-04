import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import useStyles from './subscribe-style';

export default function Pricing() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">Sua pesquisa não pode parar!</Typography>

        <center>O Solidariedade à Pesquisa é uma plataforma de compartilhamento de insumos, materiais e equipamentos, unindo pesquisadores em todo o Brasil.</center>

        <form className={classes.container} noValidate autoComplete="off">
        
          <Grid container spacing={0} alignItems="flex-end">
            <Grid item xs={12}>
              <TextField
                id="standard-email"
                label="O que você procura?"
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item md={6} xs={12}>
            <TextField
                id="standard-email"
                label="Universidade"
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
            <Grid item md={3} xs={12}>
            <TextField
                id="standard-email"
                label="Área"
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
            <Grid item md={3} xs={12}>
            <TextField
                id="standard-email"
                label="Tipo de item"
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
              />
            </Grid>
          </Grid>
        </form>
        
        <pre class="tab"></pre>
        <center>
        <Grid item md={9} xs={12} class="tab">
          <Button variant="contained" color="primary" className={classes.button}>
            Procurar insumos
          </Button>
        </Grid>

        <pre class="tab"></pre>
        <Typography align="center" variant="h10">Compartilhe um item</Typography>
        </center>
      </Paper>
  );
}
