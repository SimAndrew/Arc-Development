import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CallToAction() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('md'));

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

	return (
		<Grid
			container
			alignItems="center"
			justifyContent={matchesSM ? 'center' : 'space-between'}
			style={{ height: '60em' }}
			direction={matchesSM ? 'column' : 'row'}
		>
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
							<StyledButtonLearn variant="outlined">
								Learn More
								<ArrowForwardIcon />
							</StyledButtonLearn>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item>
				<StyledButtonEstimate variant="contained">
					Free Estimate
				</StyledButtonEstimate>
			</Grid>
		</Grid>
	);
}
