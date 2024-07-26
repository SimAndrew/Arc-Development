import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ui/Header.jsx';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme.js';
import LandingPage from './LandingPage.jsx';
import Services from '../pages/Services.jsx';
import TheRevolution from '../pages/TheRevolution.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import ContactUs from '../pages/ContactUs.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import FreeEstimate from '../pages/FreeEstimate.jsx';
import CustomSoftware from '../pages/CustomSoftware.jsx';
import MobileApps from '../pages/MobileApps.jsx';
import Websites from '../pages/Websites.jsx';
import Footer from './ui/Footer.jsx';
import { useState } from 'react';

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>

				<Routes>
					<Route path="/" element={<LandingPage />} />

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

				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
