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
import CustomSoftware from '../pages/CustomSoftware.jsx';
import MobileApps from '../pages/MobileApps.jsx';
import Websites from '../pages/Websites.jsx';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/services" element={<Services />} />
					<Route path="/customsoftware" element={<CustomSoftware />} />
					<Route path="/mobileapps" element={<MobileApps />} />
					<Route path="/websites" element={<Websites />} />

					<Route path="/therevolution" element={<TheRevolution />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/freeestimate" element={<FreeEstimate />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
