import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

const StyledGridRowContainer = styled(Grid)(({ theme }) => ({
	paddingLeft: '5em',
	paddingRight: '5em',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '1em',
		paddingRight: '1em',
	},
}));

const StyledButton = styled(IconButton)(({ theme }) => ({
	...theme.typography.learnButton,
	'&:hover': {
		backgroundColor: 'transparent',
	},
}));

function Websites() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container direction="column">
			<StyledGridRowContainer
				item
				container
				direction="row"
				justifyContent={matchesLG ? 'center' : undefined}
				style={{ marginTop: matchesSM ? '1em' : '2em' }}
			>
				<Box
					sx={{
						display: {
							xs: 'none',
							lg: 'block',
						},
					}}
				>
					<Grid
						item
						style={{
							marginTop: '0.5em',
							marginRight: '1em',
							marginLeft: '-3.5em',
						}}
					>
						<StyledButton component={Link} to="/mobileapps">
							<ArrowBackIcon />
						</StyledButton>
					</Grid>
				</Box>

				<Grid item container direction="column" style={{ maxWidth: '40em' }} md>
					<Grid item>
						<Typography
							variant="h2"
							textAlign={matchesLG ? 'center' : undefined}
						>
							Website Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							textAlign={matchesLG ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							Having a website is a necessity in today’s business world. They
							give you one central, public location to let people know who you
							are, what you do, and why you’re the best at it.
						</Typography>
						<Typography
							textAlign={matchesLG ? 'center' : undefined}
							variant="body2"
							paragraph
						>
							From simply having your hours posted to having a full fledged
							online store, making yourself as accessible as possible to users
							online drives growth and enables you to reach new customers.
						</Typography>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: {
							xs: 'none',
							lg: 'block',
						},
					}}
				>
					<Grid item style={{ marginTop: '0.5em' }}>
						<StyledButton component={Link} to="/services">
							<ArrowForwardIcon />
						</StyledButton>
					</Grid>
				</Box>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				direction="row"
				alignItems="center"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" gutterBottom>
								Analytics
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={analytics}
								style={{ marginLeft: '-2.75em' }}
								alt="graph with magnifying glass revealing 1's and 0's"
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant="body2" style={{ maxWidth: '30em' }}>
						Knowledge is power, and data is 21st Century gold. Analyzing this
						data can reveal hidden patterns and trends in your business,
						empowering you to make smarter decisions with measurable effects.
					</Typography>
				</Grid>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				direction="row"
				alignItems="center"
			>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h4" gutterBottom>
								E-Commerce
							</Typography>
						</Grid>
						<Grid item>
							<img src={ecommerce} alt="world outline made of dollar signs" />
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Typography
						align={matchesSM ? 'center' : undefined}
						variant="body2"
						paragraph
					>
						It’s no secret that people like to shop online.
					</Typography>
					<Typography
						align={matchesSM ? 'center' : undefined}
						variant="body2"
						paragraph
					>
						In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
						for your slice of that pie.
					</Typography>
				</Grid>
			</StyledGridRowContainer>
		</Grid>
	);
}

export default Websites;
