import React, { useState } from 'react';

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
	height: '6em',
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
	color: '#FFFFFF',
	'&.Mui-selected': {
		color: theme.palette.secondary.main,
		borderBottom: `2px solid ${theme.palette.secondary.main}`,
	},
	'&:hover': {
		color: theme.palette.secondary.light,
		opacity: 1,
	},
	'&:focus': {
		color: theme.palette.secondary.main,
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
		console.log('Tab changed to:', newValue);

		setValue(newValue);
	};

	return (
		<>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<StyledLogo
							alt="company logo"
							src={logo}
							indicatorColor="primary"
						/>

						<StyledTabs value={value} onChange={handleChange}>
							<StyledTab label="Home" />
							<StyledTab label="Services" />
							<StyledTab label="The revolution" />
							<StyledTab label="About Us" />
							<StyledTab label="Contact Us" />
						</StyledTabs>

						<StyledButton variant="contained" color="secondary">
							Free Estimate
						</StyledButton>
					</Toolbar>
				</AppBar>
			</ElevationScroll>

			<StyledDiv />
		</>
	);
}
