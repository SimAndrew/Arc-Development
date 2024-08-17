import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';

const StyledButton = styled(IconButton)(({ theme }) => ({
	...theme.typography.learnButton,
	'&:hover': {
		backgroundColor: 'transparent',
	},
}));

function CustomSoftware() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid
			container
			direction="column"
			style={{
				paddingLeft: '5em',
				paddingRight: '5em',
				paddingTop: '2em',
				paddingBottom: '10em',
			}}
		>
			<Grid item container direction="row">
				<Grid
					item
					style={{
						marginTop: '0.5em',
						marginRight: '1em',
						marginLeft: '-3.5em',
					}}
				>
					<StyledButton component={Link} to="/services">
						<ArrowBackIcon />
					</StyledButton>
				</Grid>

				<Grid item container direction="column" style={{ maxWidth: '40em' }}>
					<Grid item>
						<Typography variant="h2">Custom software development</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body2" paragraph>
							Whether we’re replacing old software or inventing new solutions,
							Arc Development is here to help your business tackle technology.
						</Typography>
						<Typography variant="body2" paragraph>
							Using regular commercial software leaves you with a lot of stuff
							you don’t need, without some of the stuff you do need, and
							ultimately controls the way you work. Without using any software
							at all you risk falling behind competitors and missing out on huge
							savings from increased efficiency.
						</Typography>
						<Typography variant="body2" paragraph>
							Our custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography variant="body2" paragraph>
							We create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>

				<Grid item style={{ marginTop: '0.5em' }}>
					<StyledButton component={Link} to="/mobileapps">
						<ArrowForwardIcon />
					</StyledButton>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction="row"
				justifyItems="center"
				style={{ marginTop: '15em', marginBottom: '20em' }}
			>
				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: '40em' }}
				>
					<Grid item>
						<Typography variant="h4">Save Energy</Typography>
					</Grid>
					<Grid item>
						<img src={lightbulb} alt="lightbulb" />
					</Grid>
				</Grid>

				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: '40em' }}
				>
					<Grid item>
						<Typography variant="h4">Save Time</Typography>
					</Grid>
					<Grid item>
						<img src={stopwatch} alt="stopwatch" />
					</Grid>
				</Grid>

				<Grid
					item
					container
					direction="column"
					md
					alignItems="center"
					style={{ maxWidth: '40em' }}
				>
					<Grid item>
						<Typography variant="h4">Save Money</Typography>
					</Grid>
					<Grid item>
						<img src={cash} alt="cash" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CustomSoftware;
