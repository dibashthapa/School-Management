import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    color: '#000',
  },
  cardHeader: {
    marginTop: 0,
    marginBottom: 0,
  },

  gridItem: {
    boxShadow: '4px 9px 15px -6px rgba(13,7,13,0.62)',
    padding: '5%',
  },
}));

export default useStyles;
