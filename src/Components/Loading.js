import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});


const Loading = ({
  classes,

}) => {

  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress
        color="secondary"
        className={classes.progress}
      />
    </div>
  );
}


Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Loading);