import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
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

const StyledSendButton = styled(Button)(({ theme }) => ({
	...theme.typography.estimate,
	borderRadius: 50,
	height: 45,
	width: 245,
	fontSize: '1rem',
	backgroundColor: theme.palette.secondary.main,
	'&:hover': {
		backgroundColor: theme.palette.secondary.light,
	},
	[theme.breakpoints.down('sm')]: {
		height: 40,
		width: 225,
	},
}));

function ContactUs() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailHelper, setEmailHelper] = useState('');
	const [phone, setPhone] = useState('');
	const [phoneHelper, setPhoneHelper] = useState('');
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);

	const onChange = (event) => {
		let valid;

		switch (event.target.id) {
			case 'email':
				setEmail(event.target.value);
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
					event.target.value,
				);
				if (!valid) {
					setEmailHelper('Invalid email address');
				} else {
					setEmailHelper('');
				}
				break;

			case 'phone':
				setPhone(event.target.value);
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
					event.target.value,
				);
				if (!valid) {
					setPhoneHelper('Invalid phone number');
				} else {
					setPhoneHelper('');
				}
				break;
			default:
				break;
		}
	};

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
									<a
										href="tel:1231236666"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
										(123) 123 6666
									</a>
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
									<a
										href="mailto:test@gmail.com"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
										test@gmail.com
									</a>
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
									onChange={onChange}
									error={emailHelper.length !== 0}
									helperText={emailHelper}
								/>
							</Grid>

							<Grid item style={{ marginBottom: '0.5em' }}>
								<TextField
									fullWidth
									variant="standard"
									label="Phone"
									id="phone"
									value={phone}
									onChange={onChange}
									error={phoneHelper.length !== 0}
									helperText={phoneHelper}
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
							<StyledSendButton
								onClick={() => setOpen(true)}
								// disabled={
								// 	name.length === 0 ||
								// 	message.length === 0 ||
								// 	email.length === 0 ||
								// 	phone.length === 0
								// }
								variant="contained"
							>
								Send Message <SendIcon style={{ marginLeft: '1em' }} />
							</StyledSendButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						zIndex: 1402,
						paddingTop: matchesMD ? '1em' : '5em',
						paddingBottom: matchesMD ? '1em' : '5em',
						paddingLeft: matchesSM ? 0 : matchesMD ? '4em' : '14em',
						paddingRight: matchesSM ? 0 : matchesMD ? '4em' : '14em',
					},
				}}
			>
				<DialogContent>
					<Grid container direction="column">
						<Grid item>
							<Typography textAlign="center" variant="h4" gutterBottom>
								Confirm Message
							</Typography>
						</Grid>

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
								onChange={onChange}
								error={emailHelper.length !== 0}
								helperText={emailHelper}
							/>
						</Grid>

						<Grid item style={{ marginBottom: '0.5em' }}>
							<TextField
								fullWidth
								variant="standard"
								label="Phone"
								id="phone"
								value={phone}
								onChange={onChange}
								error={phoneHelper.length !== 0}
								helperText={phoneHelper}
							/>
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
									marginTop: '1em',
									borderRadius: 1,
								}}
							/>
						</Grid>
					</Grid>

					<Grid
						item
						container
						direction="column"
						style={{ marginTop: '2em' }}
						alignItems="center"
					>
						<Grid item>
							<Button
								color="primary"
								onClick={() => setOpen(false)}
								style={{ fontWeight: 300 }}
							>
								Cancel
							</Button>
						</Grid>

						<Grid item container>
							<Grid item>
								<StyledSendButton
									onClick={() => setOpen(true)}
									// disabled={
									// 	name.length === 0 ||
									// 	message.length === 0 ||
									// 	email.length === 0 ||
									// 	phone.length === 0
									// }
									variant="contained"
								>
									Send Message <SendIcon style={{ marginLeft: '1em' }} />
								</StyledSendButton>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>

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
					</Grid>
				</StyledBackground>
			</Grid>
		</Grid>
	);
}

export default ContactUs;
