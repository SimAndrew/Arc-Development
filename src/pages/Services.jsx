import React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

export default function Services(props) {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('md'));

	const StyledButtonSoftware = styled(Button)(({ theme }) => ({
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
	}));

	const StyledCustomSoftwareIcon = styled('img')(() => ({
		marginLeft: '2em',
	}));

	return (
		<Grid container direction="column">
			<Grid
				item
				style={{
					marginLeft: matchesSM ? 0 : '5em',
					marginTop: matchesSM ? '1em' : '2em',
				}}
			>
				<Typography
					textAlign={matchesSM ? 'center' : undefined}
					variant="h2"
					gutterBottom
				>
					Services
				</Typography>
			</Grid>

			<Grid item>
				<Grid
					container
					direction="row"
					justifyContent={matchesSM ? 'center' : 'flex-end'}
					sx={{
						marginTop: matchesSM ? '1em' : '5em',
						[theme.breakpoints.down('sm')]: {
							padding: '0.5em',
						},
					}}
				>
					<Grid
						item
						style={{
							textAlign: matchesSM ? 'center' : undefined,
							width: matchesSM ? undefined : '35em',
						}}
					>
						<Typography variant="h4">IOS/Android App Development</Typography>
						<Typography variant="subtitle1" style={{ marginBottom: '1em' }}>
							Extend Functionality. Extend Access. Increase Engagement.
						</Typography>
						<Typography variant="subtitle1">
							Integrate your web experience or create a standalone standalone
							app {matchesSM ? null : <br />}with either mobile platform.
						</Typography>

						<StyledButtonSoftware
							variant="outlined"
							component={Link}
							to="/mobileapps"
						>
							Learn More
							<ArrowForwardIcon />
						</StyledButtonSoftware>
					</Grid>

					<Grid item style={{ marginRight: matchesSM ? '1em' : '5em' }}>
						<StyledCustomSoftwareIcon
							alt="mobile phone icon"
							src={mobileAppsIcon}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid
					container
					direction="row"
					justifyContent={matchesSM ? 'center' : undefined}
					sx={{
						marginTop: '5em',
						[theme.breakpoints.down('sm')]: {
							padding: '0.5em',
						},
					}}
				>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? '1em' : '5em',
							textAlign: matchesSM ? 'center' : undefined,
							width: matchesSM ? undefined : '35em',
						}}
					>
						<Typography variant="h4">Custom software development</Typography>
						<Typography variant="subtitle1" style={{ marginBottom: '1em' }}>
							Save Energy. Save Time. Save Money.
						</Typography>
						<Typography variant="subtitle1">
							Complete digital solutions, from investigation to{' '}
							<span
								style={{
									fontFamily: 'Pacifico',
									color: theme.palette.secondary.main,
								}}
							>
								celebration
							</span>
						</Typography>

						<StyledButtonSoftware
							variant="outlined"
							component={Link}
							to="/customsoftware"
						>
							Learn More
							<ArrowForwardIcon />
						</StyledButtonSoftware>
					</Grid>

					<Grid item>
						<StyledCustomSoftwareIcon
							alt="custom software icon"
							src={customSoftwareIcon}
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<Grid
					container
					direction="row"
					justifyContent={matchesSM ? 'center' : 'flex-end'}
					sx={{
						marginTop: '5em',
						marginBottom: '5em',
						[theme.breakpoints.down('sm')]: {
							padding: '0.5em',
						},
					}}
				>
					<Grid
						item
						style={{
							textAlign: matchesSM ? 'center' : undefined,
							width: matchesSM ? undefined : '35em',
						}}
					>
						<Typography variant="h4">Website Development</Typography>
						<Typography variant="subtitle1" style={{ marginBottom: '1em' }}>
							Reach More. Discover More. Sell More.
						</Typography>

						<Typography variant="subtitle1">
							Optimized for Search Engines, built for speed.
						</Typography>

						<StyledButtonSoftware
							variant="outlined"
							component={Link}
							to="/websites"
						>
							Learn More
							<ArrowForwardIcon />
						</StyledButtonSoftware>
					</Grid>

					<Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
						<StyledCustomSoftwareIcon
							alt="website icon"
							src={websiteIcon}
							style={{ width: '19em' }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
