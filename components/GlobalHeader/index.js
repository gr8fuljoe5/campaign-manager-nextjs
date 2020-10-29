import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme =>
	createStyles({
		AppBar: {
			flexGrow: 1,
			color: theme.palette.primary.contrastText,
			backgroundColor: theme.palette.primary.main,
		},
		title: {
			fontSize: theme.typography.h3.fontSize,
		},
	})
);

const Header = props => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.AppBar}>
			<Toolbar>
				<Typography variant="h1" className={classes.title}>
					{props.title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
