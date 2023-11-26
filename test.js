const {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
} = require('./google-sheet-service');
const { googleSheetId, googleSheetName } = require('./config');

// const spreadsheetId = process.argv[2];
// const sheetName = process.argv[3];

const sheetName = googleSheetName;
const spreadsheetId = googleSheetId;

async function testGetSpreadSheet() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheet({
      spreadsheetId,
      auth,
    });
    console.log(
      'output for getSpreadSheet',
      JSON.stringify(response.data, null, 2)
    );
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

async function getGoogleSheetData(startCell, endCell) {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues(
      {
        spreadsheetId,
        sheetName,
        auth,
      },
      startCell,
      endCell
    );

    const { values } = response.data;

    console.log('Data retrieved');
    console.log('###########################');
    return values;

    // console.log(
    //   'output for getSpreadSheetValues',
    //   JSON.stringify(response.data, null, 2)
    // );
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

module.exports = {
  getGoogleSheetData,
};
