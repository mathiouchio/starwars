import React from 'react';
import Grid from '@material-ui/core/Grid';

import Selector from './selector';
import Content from './content';

const Wrapper = (props) => {
  const {
    actions: { setCharacter },
    character,
    details,
    movies
  } = props;
  console.log(props);

  return (
    <Grid className="App" container spacing={2}>
      <Grid item xs={12}>
        StarWars
      </Grid>
      <Grid item xs={12}>
        <Selector 
          character={character} 
          setCharacter={setCharacter}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Content details={details} movies={movies} />
          </Grid>
          <Grid item xs={6}>
            <Content details={details} movies={movies} lastMovie />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Wrapper;
