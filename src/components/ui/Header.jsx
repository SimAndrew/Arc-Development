import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const StyledLogo = styled('img')({
	height: '5em',
});

const StyledDiv = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
	marginBottom: '3em',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
	...theme.typography.tabs,
	marginLeft: 'auto',
}));

const StyledTab = styled(Tab)(({ theme }) => ({
	...theme.typography.tab,
	minWidth: 10,
	marginLeft: '25px',

	'&.Mui-selected': {
		color: theme.palette.white.main,
	},
	'&:hover': {
		color: theme.palette.white.main,
	},
	'&:focus': {
		color: theme.palette.white.main,
	},
}));

const StyledButton = styled(Button)(({ theme }) => ({
	...theme.typography.estimate,
	borderRadius: '50px',
	marginLeft: '25px',
	marginRight: '50px',
	height: '45px',
}));

export default function Header() {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Link to="/" style={{ display: 'flex' }}>
							<StyledLogo
								disableRipple
								component={Link}
								to="/"
								alt="company logo"
								src={logo}
								indicatorColor="primary"
							/>
						</Link>

						<StyledTabs value={value} onChange={handleChange}>
							<StyledTab label="Home" component={Link} to="/" />
							<StyledTab label="Services" component={Link} to="/services" />
							<StyledTab
								label="The revolution"
								component={Link}
								to="/theRevolution"
							/>
							<StyledTab label="About Us" component={Link} to="/aboutUs" />
							<StyledTab label="Contact Us" component={Link} to="/contactUs" />
						</StyledTabs>

						<StyledButton
							label="freeEstimate"
							component={Link}
							to="/freeEstimate"
							variant="contained"
							color="secondary"
						>
							Free Estimate
						</StyledButton>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<StyledDiv />
		</>
	);
}
