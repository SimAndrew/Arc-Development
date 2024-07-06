import { createTheme } from '@mui/material/styles';

export default createTheme({
	palette: {
		primary: {
			main: '#0B72B9',
		},
		secondary: {
			main: '#FFBA60',
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem',
			color: 'white',
		},
	},
});
