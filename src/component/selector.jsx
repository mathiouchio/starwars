import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({}));

const Selector = (props) => {
  const classes = useStyles();
  const { character, setCharacter } = props;

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id="select-label">Character</InputLabel>
      <Select
        labelId="select-label"
        id="character-select"
        value={character}
        onChange={handleChange}
      >
        <MenuItem value={1}>Luke Parkwalker</MenuItem>
        <MenuItem value={2}>Darth Farter</MenuItem>
        <MenuItem value={3}>RWD40</MenuItem>
      </Select>
      <FormHelperText>Select something, please!</FormHelperText>
    </FormControl>
  );
};

export default Selector;