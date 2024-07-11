import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

const StyledMenu = styled(Menu)(({ theme }) => ({
	...theme.typography.menu,
	'& .MuiPaper-root': {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
	},
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	...theme.typography.menuItem,
	opacity: 0.7,
	'&:hover': {
		opacity: 1,
	},
}));

export default function Header() {
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	};

	const menuOptions = [
		{ name: 'Services', link: '/services' },
		{ name: 'Custom Software Development', link: '/customsoftware' },
		{ name: 'Mobile App Development', link: '/mobileapps' },
		{ name: 'Website Development', link: '/websites' },
	];

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
							<StyledTab
								aria-owns={anchorEl ? 'simple-menu' : undefined}
								aria-haspopup={anchorEl ? 'true' : undefined}
								onMouseOver={(event) => handleClick(event)}
								label="Services"
								component={Link}
								to="/services"
							/>
							<StyledTab
								label="The revolution"
								component={Link}
								to="/therevolution"
							/>
							<StyledTab label="About Us" component={Link} to="/aboutus" />
							<StyledTab label="Contact Us" component={Link} to="/contactus" />
						</StyledTabs>

						<StyledButton
							label="freeEstimate"
							component={Link}
							to="/freeestimate"
							variant="contained"
							color="secondary"
						>
							Free Estimate
						</StyledButton>

						<StyledMenu
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
						>
							{menuOptions.map((option, i) => (
								<StyledMenuItem
									key={option}
									component={Link}
									to={option.link}
									onClick={(event) => {
										handleMenuItemClick(event, i);
										handleClose();
									}}
									selected={i === selectedIndex}
								>
									{option.name}
								</StyledMenuItem>
							))}
						</StyledMenu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<StyledDiv />
		</>
	);
}
