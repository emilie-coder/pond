/* eslint-disable no-unused-vars */
const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('./credentials.json');

const doc = new GoogleSpreadsheet('1InDIdABaUDS7AYQ4zsJr44bLX2Mv8B0NgMOId1-1w6k');

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log(sheet.title);
  console.log(sheet.rowCount);

  const temp = await sheet.getRows();
  console.log(temp);
}

async function addEmail() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

  await sheet.addRow('posting from index.js!');
}

accessSpreadsheet();
