import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Typography,
    ButtonBase,
    Grid,
    Paper,
    Chip,

} from '@material-ui/core';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: '100%',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    chip: {
      margin: theme.spacing.unit,
    }
});



const Repo = ({ classes }) => {

  return (
    <div className={ classes.root }>
      <Paper className={ classes.paper }>
        <Grid container spacing={ 16 }>
          <Grid item>
            <ButtonBase className={ classes.image }>
              <img className={ classes.img } alt="Owner Avatar" src="" />
            </ButtonBase>
          </Grid>
          <Grid item xs={ 12 } sm container>
            <Grid item xs container direction="column" spacing={ 24 }>
              <Grid item xs>
                <Typography gutterBottom={ true } variant="h3" color='textPrimary'>
                  Repository name
                </Typography>
                <Typography gutterBottom={ true } variant="headline">Repository description</Typography>
                <Chip
                  label="Number of stars"
                  className={ classes.chip }
                  href="#chip"
                  clickable
                  variant="outlined"
                />
                <Chip
                  label="Number of issues"
                  className={ classes.chip }
                  href="#chip"
                  clickable
                  variant="outlined"
                />
                <Typography color="primary"  inline={ true }>Submitted 30 day ago By Tenserflow</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


Repo.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Repo);