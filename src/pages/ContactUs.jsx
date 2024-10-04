import React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';

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
}));

function ContactUs() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
			</Grid>

			<Grid item container lg={9} direction="column">
				<StyledBackground />
			</Grid>
		</Grid>
	);
}

export default ContactUs;
