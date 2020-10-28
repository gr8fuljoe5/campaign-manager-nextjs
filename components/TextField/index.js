import Input from "@material-ui/core/Input";
import React from "react";

const TextField = (props) => {
  return (
    <Input
      id="outlined-basic"
      variant="outlined"
      defaultValue={props.value}
      inputProps={{ "aria-label": props.ariaLabel || "" }}
      {...props}
    />
  );
};

export default TextField;
