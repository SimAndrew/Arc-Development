import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import person from '../assets/person.svg';
import history from '../assets/history.svg';
import yearbook from '../assets/yearbook.jpg';
import puppy from '../assets/puppy.jpg';
import CallToAction from '../components/ui/CallToAction.jsx';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';

const StyledMissionStatement = styled(Grid)(({ theme }) => ({
	fontStyle: 'italic',
	fontWeight: 300,
	fontSize: '1.5rem',
	maxWidth: '50em',
	lineHeight: 1.4,
}));

const StyledGridRowContainer = styled(Grid)(({ theme }) => ({
	paddingLeft: '5em',
	paddingRight: '5em',
	[theme.breakpoints.down('md')]: {
		paddingLeft: '1em',
		paddingRight: '1em',
	},
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	height: '20em',
	width: '20em',
	[theme.breakpoints.down('sm')]: {
		height: '15em',
		width: '15em',
		maxHeight: 300,
		maxWidth: 300,
	},
}));

function AboutUs() {
	const theme = useTheme();
	const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	const StyledBackground = styled('div')(() => ({
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		height: '100%',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url(${mobileBackground})`,
			backgroundAttachment: 'inherit',
		},
	}));

	return (
		<Grid container direction="column">
			<StyledGridRowContainer
				item
				style={{ marginTop: matchesMD ? '1em' : '2em' }}
			>
				<Typography textAlign={matchesMD ? 'center' : undefined} variant="h2">
					About Us
				</Typography>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				justifyContent="center"
				style={{ marginTop: '3em' }}
			>
				<StyledMissionStatement variant="h4" textAlign="center">
					Whether it be person to person, business to consumer, or an individual
					to their interests, technology is meant to bring us closer to what we
					care about in the best way possible. Arc Development will use that
					principle to provide fast, modern, inexpensive, and aesthetic software
					to the Midwest and beyond.
				</StyledMissionStatement>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				justifyContent="space-around"
				style={{ marginTop: '10em', marginBottom: '10em' }}
				direction={matchesMD ? 'column' : 'row'}
				alignItems={matchesMD ? 'center' : undefined}
			>
				<Grid item>
					<Grid
						item
						container
						direction="column"
						lg
						style={{ maxWidth: '35em' }}
					>
						<Grid item>
							<Typography
								textAlign={matchesMD ? 'center' : undefined}
								variant="h4"
								gutterBottom
							>
								History
							</Typography>
						</Grid>

						<Grid item>
							<Typography
								variant="body2"
								paragraph
								textAlign={matchesMD ? 'center' : undefined}
								style={{ fontWeight: 700, fontStyle: 'italic' }}
							>
								We&apos;re the new kid on the block
							</Typography>

							<Typography
								variant="body2"
								paragraph
								textAlign={matchesMD ? 'center' : undefined}
							>
								Founded in 2019, we&apos;re ready to get our hands on the
								world&apos;s business problems.
							</Typography>

							<Typography
								variant="body2"
								paragraph
								textAlign={matchesMD ? 'center' : undefined}
							>
								It all started with one question: Why aren&apos;t all businesses
								using available technology? There are many different answers to
								that question: economic barriers, social barriers, educational
								barriers, and sometimes institutional barriers.
							</Typography>

							<Typography
								variant="body2"
								paragraph
								textAlign={matchesMD ? 'center' : undefined}
							>
								We aim to be a powerful force in overcoming these obstacles.
								Recent developments in software engineering and computing power,
								compounded by the proliferation of smart phones, has opened up
								infinite worlds of possibility. Things that have always been
								done by hand can now be done digitally and automatically, and
								completely new methods of interaction are created daily. Taking
								full advantage of these advancements is the name of the game.
							</Typography>

							<Typography
								variant="body2"
								paragraph
								textAlign={matchesMD ? 'center' : undefined}
							>
								All this change can be a lot to keep up with, and that&apos;s
								where we come in.
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid>
					<Grid item container justifyContent="center" lg>
						<img
							src={history}
							alt="quill pen sitting on top of book"
							style={{ maxHeight: matchesMD ? 200 : '22em' }}
						/>
					</Grid>
				</Grid>
			</StyledGridRowContainer>

			<StyledGridRowContainer
				item
				container
				direction="column"
				alignItems="center"
				style={{ marginBottom: '15em' }}
			>
				<Grid item>
					<Typography textAlign="center" variant="h4" gutterBottom>
						Team
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body2" paragraph textAlign="center">
						Andrei
					</Typography>
					<Typography variant="body2" paragraph textAlign="center">
						I love coding
					</Typography>
				</Grid>
				<Grid item>
					<StyledAvatar alt="avatar" src={person} />
				</Grid>

				<Grid item container justifyContent={matchesMD ? 'center' : undefined}>
					<Grid
						item
						lg
						sx={{
							maxWidth: '45em',
							padding: '1.25em',
							display: { md: 'block', sm: 'block', lg: 'none' },
						}}
					>
						<Typography variant="body1" align="center" paragraph>
							I taught myself basic coding from a library book in third grade,
							and ever since then my passion has solely been set on learning —
							learning about computers, learning mathematics and philosophy,
							studying design, always just learning.
						</Typography>
						<Typography variant="body1" align="center" paragraph>
							Now I’m ready to apply everything I’ve learned, and to help others
							with the intuition I have developed.
						</Typography>
					</Grid>
					<Grid
						item
						container
						direction="column"
						lg
						alignItems={matchesMD ? 'center' : undefined}
						style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
					>
						<Grid item>
							<img
								src={yearbook}
								alt="yearbook"
								style={{ maxWidth: matchesMD ? 300 : undefined }}
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">Coding</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						lg
						sx={{
							maxWidth: '45em',
							padding: '1.25em',
							display: { md: 'none', sm: 'none', lg: 'block' },
						}}
					>
						<Typography variant="body1" align="center" paragraph>
							I taught myself basic coding from a library book in third grade,
							and ever since then my passion has solely been set on learning —
							learning about computers, learning mathematics and philosophy,
							studying design, always just learning.
						</Typography>
						<Typography variant="body1" align="center" paragraph>
							Now I’m ready to apply everything I’ve learned, and to help others
							with the intuition I have developed.
						</Typography>
					</Grid>
					<Grid
						item
						container
						direction="column"
						lg
						alignItems={matchesMD ? 'center' : 'flex-end'}
					>
						<Grid item>
							<img
								src={puppy}
								alt="terrier puppy"
								style={{ maxWidth: matchesMD ? 300 : undefined }}
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">
								Brown and White Boston Terrier Puppy
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</StyledGridRowContainer>

			<Grid item>
				<StyledBackground>
					<CallToAction />
				</StyledBackground>
			</Grid>
		</Grid>
	);
}

export default AboutUs;
