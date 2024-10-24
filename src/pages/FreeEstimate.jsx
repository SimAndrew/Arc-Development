import React, { useState } from 'react';
import { cloneDeep } from 'lodash';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import check from '../assets/check.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import website from '../assets/website.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import people from '../assets/people.svg';
import info from '../assets/info.svg';
import bell from '../assets/bell.svg';
import users from '../assets/users.svg';
import iphone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';
import animationData from '../animations/landinganimation/data.js';

const StyledButton = styled(Button)(({ theme }) => ({
	...theme.typography.estimate,
	borderRadius: 50,
	backgroundColor: theme.palette.secondary.main,
	height: 50,
	width: 225,
	fontSize: '1.25rem',
	marginTop: '5em',
	'&:hover': {
		backgroundColor: theme.palette.secondary.light,
	},
}));

const defaultQuestions = [
	{
		id: 1,
		title: 'Which service are interest in?',
		active: true,
		options: [
			{
				id: 1,
				title: 'Custom Software Development',
				subtitle: null,
				icon: software,
				iconAlt: 'three floating screens',
				selected: false,
				cost: 0,
			},
			{
				id: 2,
				title: 'iOS/Android App Development',
				subtitle: null,
				icon: mobile,
				iconAlt: 'phones and tablets outline',
				selected: false,
				cost: 0,
			},
			{
				id: 3,
				title: 'Website Development',
				subtitle: null,
				icon: website,
				iconAlt: 'computer outline',
				selected: false,
				cost: 0,
			},
		],
	},
];

const softwareQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: 'Which platforms do you need supported?',
		subtitle: 'Select all that apply.',
		options: [
			{
				id: 1,
				title: 'Web Application',
				subtitle: null,
				icon: website,
				iconAlt: 'computer outline',
				selected: false,
				cost: 100,
			},
			{
				id: 2,
				title: 'iOS Application',
				subtitle: null,
				icon: iphone,
				iconAlt: 'outline of iphone',
				selected: false,
				cost: 100,
			},
			{
				id: 3,
				title: 'Android Application',
				subtitle: null,
				icon: android,
				iconAlt: 'outlines of android phone',
				selected: false,
				cost: 100,
			},
		],
		active: true,
	},
	{
		id: 3,
		title: 'Which features do you expect to use?',
		subtitle: 'Select all that apply.',
		options: [
			{
				id: 1,
				title: 'Photo/Video',
				subtitle: null,
				icon: camera,
				iconAlt: 'camera outline',
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: 'GPS',
				subtitle: null,
				icon: gps,
				iconAlt: 'gps pin',
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: 'File Transfer',
				subtitle: null,
				icon: upload,
				iconAlt: 'outline of cloud with arrow pointing up',
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 4,
		title: 'Which features do you expect to use?',
		subtitle: 'Select all that apply.',
		options: [
			{
				id: 1,
				title: 'Users/Authentication',
				subtitle: null,
				icon: users,
				iconAlt: 'outline of a person with a plus sign',
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: 'Biometrics',
				subtitle: null,
				icon: biometrics,
				iconAlt: 'fingerprint',
				selected: false,
				cost: 25,
			},
			{
				id: 3,
				title: 'Push Notifications',
				subtitle: null,
				icon: bell,
				iconAlt: 'outline of a bell',
				selected: false,
				cost: 25,
			},
		],
		active: false,
	},
	{
		id: 5,
		title: 'What type of custom features do you expect to need?',
		subtitle: 'Select one.',
		options: [
			{
				id: 1,
				title: 'Low Complexity',
				subtitle: '(Informational)',
				icon: info,
				iconAlt: "'i' inside a circle",
				selected: false,
				cost: 25,
			},
			{
				id: 2,
				title: 'Medium Complexity',
				subtitle: '(Interactive, Customizable, Realtime)',
				icon: customized,
				iconAlt: 'two toggle switches',
				selected: false,
				cost: 50,
			},
			{
				id: 3,
				title: 'High Complexity',
				subtitle: '(Data Modeling and Computation)',
				icon: data,
				iconAlt: 'outline of line graph',
				selected: false,
				cost: 100,
			},
		],
		active: false,
	},
	{
		id: 6,
		title: 'How many users do you expect?',
		subtitle: 'Select one.',
		options: [
			{
				id: 1,
				title: '0-10',
				subtitle: null,
				icon: person,
				iconAlt: 'person outline',
				selected: false,
				cost: 1,
			},
			{
				id: 2,
				title: '10-100',
				subtitle: null,
				icon: persons,
				iconAlt: 'outline of two people',
				selected: false,
				cost: 1.25,
			},
			{
				id: 3,
				title: '100+',
				subtitle: null,
				icon: people,
				iconAlt: 'outline of three people',
				selected: false,
				cost: 1.5,
			},
		],
		active: false,
	},
];

const websiteQuestions = [
	{ ...defaultQuestions[0], active: false },
	{
		id: 2,
		title: 'Which type of website are you wanting?',
		subtitle: 'Select one.',
		options: [
			{
				id: 1,
				title: 'Basic',
				subtitle: '(Informational)',
				icon: info,
				iconAlt: 'person outline',
				selected: false,
				cost: 100,
			},
			{
				id: 2,
				title: 'Interactive',
				subtitle: "(Users, API's, Messaging)",
				icon: customized,
				iconAlt: 'outline of two people',
				selected: false,
				cost: 200,
			},
			{
				id: 3,
				title: 'E-Commerce',
				subtitle: '(Sales)',
				icon: globe,
				iconAlt: 'outline of three people',
				selected: false,
				cost: 250,
			},
		],
		active: true,
	},
];

function FreeEstimate() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const [questions, setQuestions] = useState(defaultQuestions);
	const [dialogOpen, setDialogOpen] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailHelper, setEmailHelper] = useState('');
	const [phone, setPhone] = useState('');
	const [phoneHelper, setPhoneHelper] = useState('');
	const [message, setMessage] = useState('');

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: estimateAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const nextQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const nextIndex = activeIndex + 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
		newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

		setQuestions(newQuestions);
	};

	const previousQuestion = () => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const nextIndex = activeIndex - 1;

		newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
		newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

		setQuestions(newQuestions);
	};

	const navigationPreviousDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);

		if (currentlyActive[0].id === 1) {
			return true;
		} else {
			return false;
		}
	};

	const navigationNextDisabled = () => {
		const currentlyActive = questions.filter((question) => question.active);

		if (currentlyActive[0].id === questions[questions.length - 1].id) {
			return true;
		} else {
			return false;
		}
	};

	const handleSelect = (id) => {
		const newQuestions = cloneDeep(questions);
		const currentlyActive = newQuestions.filter((question) => question.active);
		const activeIndex = currentlyActive[0].id - 1;
		const newSelected = newQuestions[activeIndex].options[id - 1];
		const previousSelected = currentlyActive[0].options.filter(
			(option) => option.selected,
		);

		switch (currentlyActive[0].subtitle) {
			case 'Select one.':
				if (previousSelected[0]) {
					previousSelected[0].selected = !previousSelected[0].selected;
				}
				newSelected.selected = !newSelected.selected;
				break;
			default:
				newSelected.selected = !newSelected.selected;
				break;
		}

		switch (newSelected.title) {
			case 'Custom Software Development':
				setQuestions(softwareQuestions);
				break;
			case 'iOS/Android App Development':
				setQuestions(softwareQuestions);
				break;
			case 'Website Development':
				setQuestions(websiteQuestions);
				break;
			default:
				setQuestions(newQuestions);
		}
	};

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
			<Grid item container direction="column" lg>
				<Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
					<Typography variant="h2">Estimate</Typography>
				</Grid>
				<Grid item>
					<Lottie options={defaultOptions} height="100%" width="100%" />
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction="column"
				alignItems="center"
				lg
				style={{ marginRight: '2em', marginBottom: '25em' }}
			>
				{questions
					.filter((question) => question.active)
					.map((question, index) => (
						<React.Fragment key={index}>
							<Grid
								item
								style={{
									marginRight: '10em',
									maxWidth: '50em',
									marginTop: '2.5em',
								}}
							>
								<Typography
									variant="h2"
									textAlign="center"
									style={{
										fontWeight: 500,
										fontSize: '2.25rem',
										marginTop: '5em',
										lineHeight: 1.25,
									}}
								>
									{question.title}
								</Typography>

								<Typography
									gutterBottom
									variant="body2"
									align="center"
									style={{ marginBottom: '2.5em' }}
								>
									{question.subtitle}
								</Typography>
							</Grid>

							<Grid item container>
								{question.options.map((option) => (
									<Grid
										item
										container
										md
										component={Button}
										onClick={() => handleSelect(option.id)}
										direction="column"
										key={option.id}
										style={{
											display: 'grid',
											textTransform: 'none',
											borderRadius: 0,
											backgroundColor: option.selected
												? theme.palette.secondary.main
												: null,
										}}
									>
										<Grid item style={{ maxWidth: '14em' }}>
											<Typography
												variant="h6"
												textAlign="center"
												style={{ marginBottom: '1em' }}
											>
												{option.title}
											</Typography>

											<Typography variant="caption" align="center">
												{option.subtitle}
											</Typography>
										</Grid>
										<Grid item>
											<img
												src={option.icon}
												alt={option.iconAlt}
												style={{ width: '12em', height: '10em' }}
											/>
										</Grid>
									</Grid>
								))}
							</Grid>
						</React.Fragment>
					))}

				<Grid
					item
					container
					justifyContent="space-between"
					style={{ width: '18em', marginTop: '3em' }}
				>
					<Grid item>
						<IconButton
							disabled={navigationPreviousDisabled()}
							onClick={previousQuestion}
						>
							<img
								src={
									navigationPreviousDisabled() ? backArrowDisabled : backArrow
								}
								alt="Previous question"
							/>
						</IconButton>
					</Grid>

					<Grid item>
						<IconButton
							disabled={navigationNextDisabled()}
							onClick={nextQuestion}
						>
							<img
								src={
									navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
								}
								alt="Next question"
							/>
						</IconButton>
					</Grid>
				</Grid>

				<Grid item>
					<StyledButton variant="contained" onClick={() => setDialogOpen(true)}>
						Get Estimate
					</StyledButton>
				</Grid>
			</Grid>

			<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
				<Grid container justifyContent="center">
					<Grid item>
						<Typography variant="h2" alignItems="center">
							Estimate
						</Typography>
					</Grid>
				</Grid>

				<DialogContent>
					<Grid item container direction="column">
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

						<Grid item>
							<Typography variant="body2" paragraph>
								We can create this digital solution for an estimated
							</Typography>
							<Typography variant="body2" paragraph>
								Fill out your name, number, and email, place your request, and
								we’ll get back to you with details moving forward and a final
								price.
							</Typography>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</Grid>
	);
}
export default FreeEstimate;
