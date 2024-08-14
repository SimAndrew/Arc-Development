import React from 'react';
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import animationData from '../animations/landinganimation/data.js';
import { styled, useTheme } from '@mui/material/styles';
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

export default function LandingPage() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

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

	const StyledRevolutionBackground = styled('div')(() => ({
		backgroundImage: `url(${revolutionBackground})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%',
	}));

	const StyledRevolutionCard = styled(Card)(({ theme }) => ({
		position: 'absolute',
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		padding: '10em',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '8em',
			paddingBottom: '8em',
			paddingLeft: 0,
			paddingRight: 0,
			borderRadius: 0,
			width: '100%',
		},
	}));

	const StyledInformationBackground = styled('div')(() => ({
		backgroundImage: `url(${infoBackground})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%',
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
						justifyContent={matchesSM ? 'center' : undefined}
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
								marginLeft: matchesSM ? '1em' : '5em',
								textAlign: matchesSM ? 'center' : undefined,
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
						justifyContent={matchesSM ? 'center' : 'flex-end'}
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
								textAlign: matchesSM ? 'center' : undefined,
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

							<StyledButtonSoftware variant="outlined">
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
							marginTop: '12em',
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
							}}
						>
							<Typography variant="h4">Website Development</Typography>
							<Typography variant="subtitle1" style={{ marginBottom: '1em' }}>
								Reach More. Discover More. Sell More.
							</Typography>

							<Typography variant="subtitle1">
								Optimized for Search Engines, built for speed.
							</Typography>

							<StyledButtonSoftware variant="outlined">
								Learn More
								<ArrowForwardIcon />
							</StyledButtonSoftware>
						</Grid>

						<Grid item>
							<StyledCustomSoftwareIcon alt="website icon" src={websiteIcon} />
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<StyledRevolutionBackground>
						<Grid
							container
							style={{ height: '100em', marginTop: '12em' }}
							alignItems="center"
							justifyContent="center"
						>
							<StyledRevolutionCard>
								<CardContent>
									<Grid
										container
										direction="column"
										style={{ textAlign: 'center' }}
									>
										<Grid item>
											<Typography variant="h3" gutterBottom>
												The Revolution
											</Typography>
										</Grid>

										<Grid item style={{ textAlign: 'center' }}>
											<Typography variant="subtitle1">
												Visionary insights coupled with cutting-edge technology
												is a recipe for revolution.
											</Typography>
											<StyledButtonSoftware variant="outlined">
												Learn More
												<ArrowForwardIcon />
											</StyledButtonSoftware>
										</Grid>
									</Grid>
								</CardContent>
							</StyledRevolutionCard>
						</Grid>
					</StyledRevolutionBackground>
				</Grid>

				<Grid item>
					<StyledInformationBackground>
						<Grid
							container
							style={{ height: '80em' }}
							alignItems="center"
							direction="row"
						>
							<Grid
								item
								container
								style={{
									position: 'absolute',
									textAlign: matchesXS ? 'center' : 'inherit',
								}}
								direction={matchesXS ? 'column' : 'row'}
								spacing={matchesXS ? 10 : 0}
							>
								<Grid
									item
									sm
									style={{
										marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
									}}
								>
									<Grid container direction="column">
										<Typography
											variant="h2"
											style={{ color: theme.palette.white.main }}
										>
											About Us
										</Typography>
										<Typography variant="subtitle2">
											Let&apos;s get personal.
										</Typography>
										<Grid item>
											<StyledButtonSoftware
												variant="outlined"
												style={{
													color: theme.palette.white.main,
													borderColor: theme.palette.white.main,
												}}
											>
												Learn More
												<ArrowForwardIcon
													style={{ color: theme.palette.white.main }}
												/>
											</StyledButtonSoftware>
										</Grid>
									</Grid>
								</Grid>

								<Grid
									item
									sm
									style={{
										marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
										textAlign: matchesXS ? 'center' : 'right',
									}}
								>
									<Grid container direction="column">
										<Typography
											variant="h2"
											style={{ color: theme.palette.white.main }}
										>
											Contact Us
										</Typography>
										<Typography variant="subtitle2">Say hello!</Typography>
										<Grid item>
											<StyledButtonSoftware
												variant="outlined"
												style={{
													color: theme.palette.white.main,
													borderColor: theme.palette.white.main,
												}}
											>
												Learn More
												<ArrowForwardIcon
													style={{ color: theme.palette.white.main }}
												/>
											</StyledButtonSoftware>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</StyledInformationBackground>
				</Grid>
			</Grid>
		</>
	);
}
