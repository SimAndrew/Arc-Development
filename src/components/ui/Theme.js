import { createTheme } from '@mui/material/styles';

export default createTheme({
	palette: {
		primary: {
			main: '#0B72B9',
		},
		secondary: {
			main: '#FFBA60',
		},
		white: {
			main: '#FFFFFF',
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '0.8rem',
			color: '#FFFFFF',
		},
		estimate: {
			fontFamily: 'Pacifico',
			fontSize: '0.8rem',
			textTransform: 'none',
			color: '#FFFFFF',
		},
	},
});
