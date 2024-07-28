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
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: '#0B72B9',
			lineHeight: 1.5,
		},
		h3: {
			fontFamily: 'Pacifico',
			fontSize: '2.5rem',
			color: '#0B72B9',
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: '#0B72B9',
			fontWeight: 700,
		},
		h6: {
			fontWeight: 500,
			fontFamily: 'Raleway',
			color: '#0B72B9',
		},
	},
});
