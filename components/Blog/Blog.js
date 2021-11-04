import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './blog-style';
import comoFunciona from '~/public/images/comoFunciona.png';
import paraQuem from '~/public/images/paraQuem.png';
import comoColaborar from '~/public/images/comoColaborar.png';

const cards = [1, 2, 3];

function Blog() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={"123"} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={paraQuem}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  PARA QUEM?
                  </Typography>
                  <Typography>
                  O serviço é destinado à comunidade acadêmico-científica das instituições de ensino superior do Brasil, credenciadas na Comunidade Acadêmica Federada (CAFe).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item key={"123"} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={comoFunciona}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  COMO FUNCIONA?
                  </Typography>
                  <Typography>
                  A plataforma permite trocar, doar ou emprestar materiais e insumos básicos de uma forma muito simples, sendo moderada e gerenciada pelos próprios participantes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item key={"123"} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={comoColaborar}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  COMO COLABORAR?
                  </Typography>
                  <Typography>
                  O acesso para divulgação e visualização das ofertas é feito a partir de login e senha da CAFe, ou seja, as mesmas credenciais utilizadas na sua instituição
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Blog;
