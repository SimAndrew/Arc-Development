import React from 'react';
import Lottie from 'react-lottie';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import animationData from '../animations/landinganimation/data.js';
import { styled, useTheme } from '@mui/material/styles';

export default function LandingPage() {
	const theme = useTheme();

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
		...theme.typography.estimate,
		borderColor: theme.palette.primary.main,
		color: theme.palette.primary.main,
		borderWidth: 2,
		textTransform: 'none',
		borderRadius: 50,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '0.9rem',
		height: 45,
		width: 145,
	}));

	const StyledHeroGrid = styled(Grid)(({ theme }) => ({
		minWidth: '21.5em',
		marginLeft: '1em',
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
			</Grid>
		</>
	);
}
