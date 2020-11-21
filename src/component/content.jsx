import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

const Content = ({ movies = [], details = [], lastMovie = false }) => {
  const total = movies.length;
  const lastMovieSelector = details[-1 + total];

  if (lastMovie) {
    return (
      <>
        <div>
          <Typography component="p" variant="body2">Last Appear on</Typography>
        </div>
        <Grid container spacing={1}>
          {
            lastMovieSelector ? (
              <Grid item xs={12}>
                <Typography component="h5" variant="h5">
                  {lastMovieSelector.title}
                </Typography>
                <Typography component="p" variant="body1">
                  on {lastMovieSelector.release_date}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography component="h3" variant="h3">
                  <Skeleton animation="wave" />
                </Typography>
                <Typography component="p" variant="body1">
                  <Skeleton animation="wave" />
                </Typography>
              </Grid>
            )
          }
          
        </Grid>
      </>
    )
  }
  
  return (
    <>
      <div>
        <Typography component="p" variant="body2">Movie List</Typography>
      </div>
      <Grid container spacing={1}>
        {!movies.length && (
          <>
            <Grid item xs={12}>
              <Typography component="h3" variant="h3">
                <Skeleton animation="wave" />
              </Typography>
              <Typography component="p" variant="body1">
                <Skeleton animation="wave" />
              </Typography>
            </Grid>
          </>
        )}
        {movies.map((movie, index) =>
          details[index] ? (
            <Grid item key={movie} xs={12}>
              <Typography component="h5" variant="h5">
                {details[index].title}
              </Typography>
              <Typography component="p" variant="body1">
                Directed by: {details[index].director}
              </Typography>
            </Grid>
          ) : (
            <Grid key={movie} xs={12}>
              <Typography component="h3" variant="h3">
                <Skeleton animation="wave" />
              </Typography>
              <Typography component="p" variant="body1">
                <Skeleton animation="wave" />
              </Typography>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default Content;