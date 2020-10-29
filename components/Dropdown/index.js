import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const CampaignDropDown = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.value);
  const { data, label } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        defaultValue={props.value}
        onChange={(e) => {
          if (props.handleChange) {
            props.handleChange(e);
          }
          setValue(e.target.value);
        }}
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

export default CampaignDropDown;
