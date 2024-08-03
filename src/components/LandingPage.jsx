import React from 'react';
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import animationData from '../animations/landinganimation/data.js';
import { styled, useTheme } from '@mui/material/styles';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';

export default function LandingPage() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const StyledButton = styled(Button)(({ theme }) => ({
		...theme.typography.estimate,
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 50,
		borderColor: theme.palette.secondary.main,
		height: 45,
		width: 145,
		marginRight: 40,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
			borderColor: theme.palette.secondary.main,
		},
	}));

	const StyledButtonLearn = styled(Button)(({ theme }) => ({
		...theme.typography.learnButton,
		fontSize: '0.9rem',
		height: 45,
		width: 145,
	}));

	const StyledButtonSoftware = styled(Button)(({ theme }) => ({
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
	}));

	const StyledHeroGrid = styled(Grid)(({ theme }) => ({
		minWidth: '21.5em',
		marginLeft: '1em',
	}));

	const StyledCustomSoftwareIcon = styled('img')(() => ({
		marginLeft: '2em',
	}));

	return (
		<>
			<Grid
				container
				direction="column"
				sx={{
					marginTop: '5em',
				}}
			>
				<Grid item>
					<Grid
						container
						justifyContent="flex-end"
						alignItems="center"
						direction="row"
					>
						<StyledHeroGrid item sm>
							<Typography variant="h2" alignContent="center" component="div">
								Bringing West Coast technology Technology <br /> to the mid
								Midwest
							</Typography>

							<Grid
								container
								justifyContent="center"
								style={{ marginTop: '1em' }}
							>
								<Grid item>
									<StyledButton variant="contained">Free Estimate</StyledButton>
								</Grid>

								<Grid item>
									<StyledButtonLearn variant="outlined">
										Learn More
										<ArrowForwardIcon />
									</StyledButtonLearn>
								</Grid>
							</Grid>
						</StyledHeroGrid>

						<Grid
							item
							sm
							sx={{
								maxWidth: '50em',
								minWidth: '21em',
								marginTop: '2em',
								marginLeft: '10%',
							}}
						>
							<Lottie options={defaultOptions} height={'100%'} width={'100%'} />
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Grid
						container
						direction="row"
						justifyContent={matches ? 'center' : undefined}
						sx={{
							marginTop: '12em',
							[theme.breakpoints.down('sm')]: {
								padding: '0.5em',
							},
						}}
					>
						<Grid
							item
							style={{
								marginLeft: matches ? '1em' : '5em',
								textAlign: matches ? 'center' : undefined,
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

							<StyledButtonSoftware variant="outlined">
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
						justifyContent={matches ? 'center' : 'flex-end'}
						sx={{
							marginTop: '12em',
							[theme.breakpoints.down('sm')]: {
								padding: '0.5em',
							},
						}}
					>
						<Grid
							item
							style={{
								textAlign: matches ? 'center' : undefined,
							}}
						>
							<Typography variant="h4">IOS/Android App Development</Typography>
							<Typography variant="subtitle1" style={{ marginBottom: '1em' }}>
								Extend Functionality. Extend Access. Increase Engagement.
							</Typography>
							<Typography variant="subtitle1">
								Integrate your web experience or create a standalone standalone
								app {matches ? null : <br />}with either mobile platform.
							</Typography>

							<StyledButtonSoftware variant="outlined">
								Learn More
								<ArrowForwardIcon />
							</StyledButtonSoftware>
						</Grid>

						<Grid item style={{ marginRight: matches ? '1em' : '5em' }}>
							<StyledCustomSoftwareIcon
								alt="mobile phone icon"
								src={mobileAppsIcon}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
