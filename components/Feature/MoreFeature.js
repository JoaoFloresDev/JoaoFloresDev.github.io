import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Blog from '../Blog';
import conhecaSolidariedade from '~/public/images/conhecaSolidariedade.png';
import insumosMateriais from '~/public/images/insumosMateriais.png';

function MainFeature() {
  const classes = useStyles();
  const align = useTextAlign();
  return (
    <div className={clsx(classes.featureMore)}>
      
      <Grid container spacing={6} className={classes.backgroundd}>
        <Grid md={6} >
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.5s" duration="0.6s">
                <img src={conhecaSolidariedade} />
            </ReactWOW>
        </Grid>
        <Grid md={6} item>
            <ReactWOW animation="fadeInRight" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
              Conheça o Solidariedade
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              O Solidariedade à Pesquisa é a plataforma que facilita a comunicação entre alunos e professores das instituições   de   ensino   superior,   com o   objetivo de otimizar  o uso de recursos públicos para o desenvolvimento de pesquisas.

A colaboração entre os participantes é a essência do Solidariedade à Pesquisa, aproximando quem tem com quem precisa de insumos
              </Typography>
            </ReactWOW>
        </Grid>
      </Grid>
      
      <section className={clsx(classes.spaceBottom, classes.spaceBottom)} id="blog">
        <Blog />
      </section>

      <Grid container className={classes.background}>
        <Grid md={6} item>
            <ReactWOW animation="fadeInLeft" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
              INSUMOS E MATERIAIS
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              As ofertas podem variar de acordo com a disponibilidade dos pesquisadores de cada instituição. É possível encontrar livros e reagentes até papel e toner para impressão.
              </Typography>
            </ReactWOW>
        </Grid>
        <Grid md={6} >
            <ReactWOW animation="fadeInRight" delay="0.5s" duration="0.6s">
                <img src={insumosMateriais} />
            </ReactWOW>
        </Grid>
      </Grid>

    </div>
  );
}

export default MainFeature;
