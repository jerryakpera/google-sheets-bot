require('dotenv').config();

const { env } = process;

module.exports = {
  token: env.TOKEN,
  botName: env.BOT_NAME,
  googleSheetId: env.GOOGLE_SHEET_ID,
  googleSheetServiceAccount: env.GOOGLE_SHEET_SERVICE_ACCOUNT,
  gCloudProject: env.GCLOUD_PROJECT,
  googleApplicationCredentials: env.GOOGLE_APPLICATION_CREDENTIALS,
  googleSheetName: env.GOOGLE_SHEET_NAME,
};
