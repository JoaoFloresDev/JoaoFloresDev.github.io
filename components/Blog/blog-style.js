import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  blogWrap: {
    marginTop: theme.spacing(5)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', 
    borderRadius: "100%"
  },
  cardContent: {
    flexGrow: 1,
  },
  pageSection: {
    marginBottom: theme.spacing(15)
  }
}));

export default useStyles;
