import Header from './ui/Header.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme.js';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			Arc Development
		</ThemeProvider>
	);
}

export default App;
