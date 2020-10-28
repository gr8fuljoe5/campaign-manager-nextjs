import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = (props) => {
  const classes = useStyles();
  const { data, label } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={props.value}
        onChange={props.handleChange}
      >
        {data &&
          data.map((item, idx) => {
            return (
              <MenuItem value={item.id} key={idx}>
                {item.name}
              </MenuItem>
            );
          })}
        {props.children}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
