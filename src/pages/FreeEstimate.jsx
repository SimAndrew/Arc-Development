import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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

function FreeEstimate() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: estimateAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
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
				{defaultQuestions
					.filter((question) => question.active)
					.map((question, index) => (
						<React.Fragment key={index}>
							<Grid
								item
								style={{
									marginRight: '10em',
									maxWidth: '50em',
									marginTop: '7.5em',
								}}
							>
								<Typography
									variant="h2"
									textAlign="center"
									style={{
										fontWeight: 500,
										fontSize: '2.25rem',
										marginTop: '5em',
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
									<Grid item container direction="column" md key={option.id}>
										<Grid item style={{ maxWidth: '12em' }}>
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
					style={{ width: '15em', marginTop: '3em' }}
				>
					<Grid item>
						<img src={backArrow} alt="Previous question" />
					</Grid>
					<Grid item>
						<img src={forwardArrow} alt="Next question" />
					</Grid>
				</Grid>

				<Grid item>
					<StyledButton variant="contained">Get Estimate</StyledButton>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default FreeEstimate;
