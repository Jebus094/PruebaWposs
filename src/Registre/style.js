import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


  root: {
    '& > *': {
      marginTop: theme.spacing(8),
      display: 'flex',
      marginTop: '1em',
    },
  },
  submit: {
    margin: theme.spacing(1),
    backgroundColor: '#0C919D',
    margin: theme.spacing(3, 0, 2),

  },
  ban: {
    display: 'flex',
    backgroundColor : '#0CB1C0',
    alignItems: 'center',
    marginTop: '1em',

  },
}));
export default useStyles
