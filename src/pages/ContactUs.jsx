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
	height: '65em',
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
		<Grid
			container
			direction="row"
			style={{
				marginTop: '-2em',
			}}
		>
			<Grid item container direction="column" justifyContent="center" lg={3}>
				<Grid item>
					<Typography variant="h2" style={{ lineHeight: 1 }}>
						Contact Us
					</Typography>
					<Typography
						variant="body2"
						style={{ color: theme.palette.primary.main }}
					>
						We&apos;re waiting.
					</Typography>
				</Grid>

				<Grid item container>
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
							style={{ color: theme.palette.primary.main, fontSize: '1rem' }}
						>
							(123) 123 456 789
						</Typography>
					</Grid>
				</Grid>

				<Grid item container>
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
							style={{ color: theme.palette.primary.main, fontSize: '1rem' }}
						>
							arcdev@gmail.com
						</Typography>
					</Grid>
				</Grid>

				<Grid item container>
					<Grid item>
						<TextField
							label="Name"
							id="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</Grid>

					<Grid item>
						<TextField
							label="Email"
							id="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</Grid>

					<Grid item>
						<TextField
							label="Phone"
							id="phone"
							value={phone}
							onChange={(event) => setPhone(event.target.value)}
						/>
					</Grid>
				</Grid>

				<Grid>
					<TextField
						value={message}
						multiline
						id="message"
						rows={10}
						onChange={(event) => setMessage(event.target.value)}
					/>
				</Grid>

				<Grid item>
					<Button variant="contained">
						Send Message <SendIcon />
					</Button>
				</Grid>
			</Grid>

			<Grid item container lg={9}>
				<StyledBackground>
					<Grid
						item
						style={{
							marginLeft: matchesSM ? 0 : '5em',
							textAlign: matchesSM ? 'center' : 'inherit',
						}}
					>
						<Grid container direction="column">
							<Grid item>
								<Typography variant="h2">
									Simple Software.
									<br />
									Revolutionary Results.
								</Typography>

								<Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
									Take advantage of the 21st Century.
								</Typography>

								<Grid
									container
									justifyContent={matchesSM ? 'center' : undefined}
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
