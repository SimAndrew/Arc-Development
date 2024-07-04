import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const UseStyle = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Header() {
	return (
		<>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h3">Arc Development</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>

			<UseStyle />
		</>
	);
}
