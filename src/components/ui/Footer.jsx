import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import footerAdornment from '../../assets/FooterAdornment.svg';

const StyledImg = styled('img')(({ theme }) => ({
	width: '25em',
	verticalAlign: 'bottom',
	[theme.breakpoints.down('md')]: {
		width: '21em',
	},
	[theme.breakpoints.down('sm')]: {
		width: '15em',
	},
}));

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: (theme) => theme.palette.primary.main,
				width: '100%',
				zIndex: 1302,
				position: 'relative',
			}}
		>
			<StyledImg alt="black decorative slash" src={footerAdornment} />
		</Box>
	);
}
