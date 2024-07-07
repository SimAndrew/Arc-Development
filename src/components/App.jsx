import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ui/Header.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme.js';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import TheRevolution from '../pages/TheRevolution.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import ContactUs from '../pages/ContactUs.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import FreeEstimate from '../pages/FreeEstimate.jsx';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="services" element={<Services />} />
					<Route path="theRevolution" element={<TheRevolution />} />
					<Route path="aboutUs" element={<AboutUs />} />
					<Route path="contactUs" element={<ContactUs />} />
					<Route path="freeEstimate" element={<FreeEstimate />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
