import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledBackground = styled('div')(({ theme }) => ({
	backgroundImage: `url(${background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '60em',
	width: '100%',
	paddingBottom: '10em',
	paddingTop: 0,
	[theme.breakpoints.down('md')]: {
		backgroundImage: `url(${mobileBackground})`,
	},
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const StyledButtonLearn = styled(Button)(({ theme }) => ({
	...theme.typography.learnButton,
	fontSize: '0.9rem',
	height: 45,
	width: 145,
	[theme.breakpoints.down('md')]: {
		marginBottom: '2em',
	},
}));

const StyledButtonEstimate = styled(Button)(({ theme }) => ({
	...theme.typography.estimate,
	borderRadius: 50,
	height: 80,
	width: 205,
	backgroundColor: theme.palette.secondary.main,
	fontSize: '1.5rem',
	marginRight: '5em',
	marginLeft: '2em',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light,
	},
	[theme.breakpoints.down('md')]: {
		marginLeft: 0,
		marginRight: 0,
	},
}));

function ContactUs() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	return (
		<Grid container direction="row">
			<Grid
				item
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				lg={4}
				xl={3}
				style={{
					marginBottom: matchesMD ? '50em' : 0,
					marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
				}}
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography
								textAlign={matchesMD ? 'center' : 0}
								variant="h2"
								style={{ lineHeight: 1 }}
							>
								Contact Us
							</Typography>
							<Typography
								textAlign={matchesMD ? 'center' : 0}
								variant="body2"
								style={{ color: theme.palette.primary.main }}
							>
								We&apos;re waiting.
							</Typography>
						</Grid>

						<Grid item container style={{ marginTop: '2em' }}>
							<Grid item>
								<PhoneIcon
									style={{
										color: theme.palette.primary.main,
										marginRight: '0.5em',
										verticalAlign: 'center',
									}}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body2"
									style={{
										color: theme.palette.primary.main,
										fontSize: '1rem',
									}}
								>
									(123) 123 456 789
								</Typography>
							</Grid>
						</Grid>

						<Grid item container style={{ marginBottom: '2em' }}>
							<Grid item>
								<MailIcon
									style={{
										color: theme.palette.primary.main,
										marginRight: '0.5em',
										verticalAlign: 'center',
									}}
								/>
							</Grid>
							<Grid item>
								<Typography
									variant="body2"
									style={{
										color: theme.palette.primary.main,
										fontSize: '1rem',
									}}
								>
									arcdev@gmail.com
								</Typography>
							</Grid>
						</Grid>

						<Grid
							item
							container
							direction="column"
							style={{ maxWidth: '20em' }}
						>
							<Grid item style={{ marginBottom: '0.5em' }}>
								<TextField
									fullWidth
									variant="standard"
									label="Name"
									id="name"
									value={name}
									onChange={(event) => setName(event.target.value)}
								/>
							</Grid>

							<Grid item style={{ marginBottom: '0.5em' }}>
								<TextField
									fullWidth
									variant="standard"
									label="Email"
									id="email"
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</Grid>

							<Grid item style={{ marginBottom: '0.5em' }}>
								<TextField
									fullWidth
									variant="standard"
									label="Phone"
									id="phone"
									value={phone}
									onChange={(event) => setPhone(event.target.value)}
								/>
							</Grid>
						</Grid>

						<Grid item style={{ maxWidth: '20em' }}>
							<TextField
								fullWidth
								variant="standard"
								value={message}
								multiline
								id="message"
								rows={10}
								onChange={(event) => setMessage(event.target.value)}
								InputProps={{ disableUnderline: true }}
								sx={{
									border: '2px solid #0B72B9',
									marginTop: '5em',
									borderRadius: 1,
								}}
							/>
						</Grid>

						<Grid
							item
							container
							justifyContent="center"
							style={{ marginTop: '2em' }}
						>
							<Button
								variant="contained"
								sx={{
									...theme.typography.estimate,
									borderRadius: 50,
									height: 45,
									width: 245,
									fontSize: '1rem',
									backgroundColor: theme.palette.secondary.main,
									'&:hover': {
										backgroundColor: theme.palette.secondary.light,
									},
								}}
							>
								Send Message <SendIcon style={{ marginLeft: '1em' }} />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				item
				container
				lg={8}
				xl={9}
				direction={matchesMD ? 'column' : 'row'}
				justifyContent={matchesMD ? 'center' : undefined}
				alignItems="center"
			>
				<StyledBackground>
					<Grid
						item
						style={{
							marginLeft: matchesMD ? 0 : '3em',
							textAlign: matchesMD ? 'center' : 'inherit',
						}}
					>
						<Grid container direction="column">
							<Grid item>
								<Typography
									variant="h2"
									alignItems={matchesMD ? 'center' : undefined}
								>
									Simple Software.
									<br />
									Revolutionary Results.
								</Typography>

								<Typography
									variant="subtitle2"
									textAlign={matchesMD ? 'center' : undefined}
									style={{ fontSize: '1.5rem' }}
								>
									Take advantage of the 21st Century.
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							justifyContent={matchesMD ? 'center' : undefined}
							item
						>
							<StyledButtonLearn
								variant="outlined"
								component={Link}
								to="/therevolution"
							>
								Learn More
								<ArrowForwardIcon />
							</StyledButtonLearn>
						</Grid>
					</Grid>

					<Grid item>
						<StyledButtonEstimate
							variant="contained"
							component={Link}
							to="/freeestimate"
						>
							Free Estimate
						</StyledButtonEstimate>
					</Grid>
				</StyledBackground>
			</Grid>
		</Grid>
	);
}

export default ContactUs;
