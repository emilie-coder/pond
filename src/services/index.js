/* eslint-disable no-unused-vars */
const express = require('express');
const { google } = require('googleapis');

const app = express();

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', async (req, res) => {
  const { email } = req.body;
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const spreadsheetId = '1InDIdABaUDS7AYQ4zsJr44bLX2Mv8B0NgMOId1-1w6k';
  const client = await auth.getClient();

  // Creating client instance for authorization
  const googleSheets = google.sheets({ version: 'v4', auth: client });

  // getting metta data
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // reading rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: 'Emails',
  });

  // write rows to a sheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: 'Emails',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        [email],
      ],
    },
  });

  res.send('success');
});

app.listen(1337, (req, res) => console.log('running on 1337'));
