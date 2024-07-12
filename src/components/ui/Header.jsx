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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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

const StyledLogo = styled('img')(({ theme }) => ({
	height: '5rem',
	transition: 'all .2s ease-out',

	[theme.breakpoints.down('md')]: {
		height: '4.6rem',
		transition: 'all .2s ease-out',
	},
	[theme.breakpoints.down('sm')]: {
		height: '4.2rem',
		transition: 'all .2s ease-out',
	},
}));

const StyledDiv = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
	marginBottom: '3em',
	[theme.breakpoints.down('md')]: {
		marginBottom: '2em',
	},
	[theme.breakpoints.down('sm')]: {
		marginBottom: '1.25em',
	},
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
	...theme.typography.tabs,
	marginLeft: 'auto',
}));

const StyledTab = styled(Tab)(({ theme }) => ({
	...theme.typography.tab,
	minWidth: 10,
	marginLeft: '5px',
	[theme.breakpoints.up('lg')]: {
		marginLeft: '25px',
		fontSize: '1rem',
	},

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
	marginLeft: '4px',
	marginRight: '4px',
	height: '45px',

	[theme.breakpoints.up('lg')]: {
		borderRadius: '50px',
		marginLeft: '25px',
		marginRight: '25px',
		height: '45px',
		fontSize: '1rem',
	},
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

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	...theme.typography.iconButton,
	marginLeft: 'auto',
	'&:hover': {
		backgroundColor: 'transparent',
	},
}));

export default function Header() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const iOS =
		typeof navigator !== 'undefined' &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	};

	const menuOptions = [
		{ name: 'Services', link: '/services' },
		{ name: 'Custom Software Development', link: '/customsoftware' },
		{ name: 'Mobile App Development', link: '/mobileapps' },
		{ name: 'Website Development', link: '/websites' },
	];

	const tabs = (
		<>
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
				open={openMenu}
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
		</>
	);

	const drawer = (
		<>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
			>
				Example Drawer
			</SwipeableDrawer>

			<StyledIconButton
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon style={{ height: '50px', width: '50px' }} />
			</StyledIconButton>
		</>
	);

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

						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>

			<StyledDiv />
		</>
	);
}
