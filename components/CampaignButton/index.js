import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const CampaignButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      disableRipple
      disableElevation
      size="large"
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};

CampaignButton.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CampaignButton;
