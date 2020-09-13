import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor : '#0CB1C0',
    },
    offset: theme.mixins.toolbar
    
  }));
  export default useStyles