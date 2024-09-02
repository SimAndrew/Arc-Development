import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import integrationAnimation from '../animations/integrationAnimation/data.json';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';
import CallToAction from '../components/ui/CallToAction.jsx';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

const StyledButton = styled(IconButton)(({ theme }) => ({
	...theme.typography.learnButton,
	'&:hover': {
		backgroundColor: 'transparent',
	},
}));

const StyledGridRowContainer = styled(Grid)(({ theme }) => ({
	paddingLeft: '5em',
	paddingRight: '5em',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '1em',
		paddingRight: '1em',
	},
}));

function MobileApps() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const documentsOptions = {
		loop: true,
		autoplay: true,
		animationData: integrationAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const StyledBackground = styled('div')(() => ({
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url(${mobileBackground})`,
			backgroundAttachment: 'inherit',
		},
	}));

	return (
		<Grid container direction="column">
			<StyledGridRowContainer
				item
				container
				direction="row"
				justifyContent={matchesLG ? 'center' : undefined}
				style={{ marginTop: matchesSM ? '1em' : '2em' }}
			>
				<Box
					sx={{
						display: {
							xs: 'none',
							lg: 'block',
						},
					}}
				>
					<Grid
						item
						style={{
							marginTop: '0.5em',
							marginRight: '1em',
							marginLeft: '-3.5em',
						}}
					>
						<StyledButton component={Link} to="/customsoftware">
							<ArrowBackIcon />
						</StyledButton>
					</Grid>
				</Box>

				<Grid item container direction="column" style={{ maxWidth: '40em' }} md>
					<Grid item>
						<Typography
							variant="h2"
							textAlign={matchesLG ? 'center' : undefined}
						>
							iOS/Android App Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesLG ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							Mobile apps allow you to take your tools on the go.
						</Typography>
						<Typography
							textAlign={matchesLG ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							Whether you want an app for your customers, employees, or
							yourself, we can build cross-platform native solutions for any
							part of your business process. This opens you up to a whole new
							world of possibilities by taking advantage of phone features like
							the camera, GPS, push notifications, and more.
						</Typography>
						<Typography
							textAlign={matchesLG ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							Convenience. Connection.
						</Typography>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: {
							xs: 'none',
							lg: 'block',
						},
					}}
				>
					<Grid item style={{ marginTop: '0.5em' }}>
						<StyledButton component={Link} to="/websites">
							<ArrowForwardIcon />
						</StyledButton>
					</Grid>
				</Box>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				direction={matchesSM ? 'column' : 'row'}
				style={{ marginTop: '15em', marginBottom: '15em' }}
			>
				<Grid item container direction="column" md>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : undefined}
							variant="h4"
							gutterBottom
						>
							Integration
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							Our technology enables an innate interconnection between web and
							mobile applications, putting everything you need right in one
							convenient place.
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							This allows you to extend your reach, reinvent interactions, and
							develop a stronger relationship with your users than ever before.
						</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					md
					style={{
						maxHeight: 255,
						maxWidth: 255,
					}}
					marginTop={matchesMD ? '4em' : undefined}
					marginBottom={matchesMD ? '6em' : undefined}
					alignItems={matchesMD ? 'center' : undefined}
				>
					<Lottie options={documentsOptions} maxWidth={'20em'} />
				</Grid>

				<Grid item container direction="column" md>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : 'right'}
							variant="h4"
							gutterBottom
						>
							Simultaneous Platform Support
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : 'right'}
							variant="body2"
							paragraph
						>
							Our cutting-edge development process allows us to create apps for
							iPhone, Android, and tablets — all at the same time.
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesSM ? 'center' : 'right'}
							variant="body2"
							paragraph
						>
							This significantly reduces costs and creates a more unified brand
							experience across all devices.
						</Typography>
					</Grid>
				</Grid>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				direction={matchesMD ? 'column' : 'row'}
				style={{ marginBottom: '15em' }}
			>
				<Grid item container direction="column" alignItems="center" md>
					<Grid item>
						<Typography textAlign="center" variant="h4" gutterBottom>
							Extend Functionality
						</Typography>
					</Grid>
					<Grid item>
						<img src={swiss} alt="swiss army knife" />
					</Grid>
				</Grid>

				<Grid
					item
					container
					direction="column"
					alignItems="center"
					style={{
						marginTop: matchesMD ? '10em' : 0,
						marginBottom: matchesMD ? '10em' : 0,
					}}
					md
				>
					<Grid item>
						<Typography textAlign="center" variant="h4" gutterBottom>
							Extend Access
						</Typography>
					</Grid>
					<Grid item>
						<img
							src={access}
							alt="tear-one-off sign"
							style={{ maxWidth: '28em' }}
						/>
					</Grid>
				</Grid>

				<Grid item container direction="column" alignItems="center" md>
					<Grid item>
						<Typography textAlign="center" variant="h4" gutterBottom>
							Increase Engagement
						</Typography>
					</Grid>
					<Grid item>
						<img src={engagement} alt="app with notification" />
					</Grid>
				</Grid>
			</StyledGridRowContainer>

			<Grid item>
				<StyledBackground>
					<CallToAction />
				</StyledBackground>
			</Grid>
		</Grid>
	);
}

export default MobileApps;
