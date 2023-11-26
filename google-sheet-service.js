// Import the googleapis npm module
const { google } = require('googleapis');
const sheets = google.sheets('v4');

// Define the needed scope for reading and editing spreadsheets
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Create auth token using googleAPIs
async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
  });
  const authToken = await auth.getClient();
  return authToken;
}

// Get metadata about the spreadsheet
async function getSpreadSheet({ spreadsheetId, auth }) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

// Return data inside the spreadsheet
async function getSpreadSheetValues(
  { spreadsheetId, auth, sheetName },
  startCell,
  endCell
) {
  let range = sheetName;
  if (startCell && endCell) {
    range += `!${startCell}:${endCell}`;
  }

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range,
  });
  return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
};
