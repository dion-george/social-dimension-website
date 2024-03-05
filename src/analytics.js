// src/analytics.js
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-HJCTZ2GCFZ";

function initializeAnalytics() {
    ReactGA.initialize(GA_MEASUREMENT_ID);
}

export default initializeAnalytics;
