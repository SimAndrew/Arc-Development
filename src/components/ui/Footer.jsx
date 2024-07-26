import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import footerAdornment from '../../assets/FooterAdornment.svg';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledImg = styled('img')(({ theme }) => ({
	width: '25em',
	verticalAlign: 'bottom',
	[theme.breakpoints.down('md')]: {
		width: '21em',
	},
	[theme.breakpoints.down('sm')]: {
		width: '15em',
	},
}));

const StyledGridLink = styled(Grid)(({ theme }) => ({
	color: theme.palette.white.main,
	fontFamily: 'Arial',
	fontSize: '0.75rem',
	fontWeight: 'bold',
	textDecoration: 'none',
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	margin: '1.96em',
}));

export default function Footer(props) {
	const theme = useTheme();
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) => theme.palette.primary.main,
				width: '100%',
				zIndex: 1302,
				position: 'relative',
			}}
		>
			<Grid
				container
				justifyContent="center"
				sx={{
					position: 'absolute',
					display: {
						xs: 'none',
						md: 'flex',
					},
				}}
			>
				<StyledGridItem item>
					<Grid container direction="column" spacing={2}>
						<StyledGridLink item component={Link} to="/">
							Home
						</StyledGridLink>
					</Grid>
				</StyledGridItem>

				<StyledGridItem item>
					<Grid container direction="column" spacing={2}>
						<StyledGridLink item component={Link} to="/services">
							Services
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/customsoftware">
							Custom Software Development
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/mobileapps">
							Mobile App Development
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/websites">
							Website Development
						</StyledGridLink>
					</Grid>
				</StyledGridItem>

				<StyledGridItem item>
					<Grid container direction="column" spacing={2}>
						<StyledGridLink item component={Link} to="/therevolution">
							The Revolution
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/therevolution">
							Vision
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/therevolution">
							Technology
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/therevolution">
							Process
						</StyledGridLink>
					</Grid>
				</StyledGridItem>

				<StyledGridItem item>
					<Grid container direction="column" spacing={2}>
						<StyledGridLink item component={Link} to="/aboutus">
							About Us
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/aboutus">
							History
						</StyledGridLink>
						<StyledGridLink item component={Link} to="/aboutus">
							Team
						</StyledGridLink>
					</Grid>
				</StyledGridItem>

				<StyledGridItem item>
					<Grid container direction="column" spacing={1}>
						<StyledGridLink item component={Link} to="/contactus">
							Contact Us
						</StyledGridLink>
					</Grid>
				</StyledGridItem>
			</Grid>

			<StyledImg alt="black decorative slash" src={footerAdornment} />

			<Grid
				container
				justifyContent="flex-end"
				spacing={1.5}
				style={{
					position: 'relative',
					marginTop: '-6em',
					right: '1.5em',
				}}
			>
				<StyledGridItem item component={Link} to="https://www.facebook.com">
					<FacebookIcon
						style={{ color: theme.palette.white.main, fontSize: 'large' }}
					/>
				</StyledGridItem>

				<StyledGridItem item component={Link} to="https://www.twitter.com">
					<TwitterIcon
						style={{ color: theme.palette.white.main, fontSize: 'large' }}
					/>
				</StyledGridItem>

				<StyledGridItem item component={Link} to="https://www.instagram.com">
					<InstagramIcon
						style={{ color: theme.palette.white.main, fontSize: 'large' }}
					/>
				</StyledGridItem>
			</Grid>
		</Box>
	);
}
