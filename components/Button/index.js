import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CampaignButton = props => {
	return (
		<Button
			variant="contained"
			color="primary"
			disableRipple
			disableElevation
			size="large"
			onClick={props.onClick}
			{...props}>
			{props.children}
		</Button>
	);
};

CampaignButton.propTypes = {
	children: PropTypes.string,
	handleClick: PropTypes.func,
};

export default CampaignButton;
