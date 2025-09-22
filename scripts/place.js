
const yearEl = document.getElementById("year");
const lastModifiedEl = document.getElementById("last-modified");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

// ------------------------------
// Static Weather Data for Netherlands
// ------------------------------
const temperature = 8; // °C
const windSpeed = 20;  // km/h

/**
 * Calculate Wind Chill in Celsius
 * Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
 */
function calculateWindChill(temp, wind) {
  return Math.round(
    13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)
  );
}

// Determine if wind chill calculation is applicable
let windChillDisplay = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay = calculateWindChill(temperature, windSpeed) + " °C";
}

// Display wind chill in the HTML
const windChillEl = document.getElementById("windchill");
if (windChillEl) windChillEl.textContent = windChillDisplay;
