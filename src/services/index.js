/* eslint-disable no-unused-vars */
const { GoogleSpreadsheet } = require('google-spreadsheet');

const creds = require('./credentials.json');

const doc = new GoogleSpreadsheet('1InDIdABaUDS7AYQ4zsJr44bLX2Mv8B0NgMOId1-1w6k');

const addEmail = async (email) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,

    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

    await sheet.addRow([`${email}`]);
  } catch (e) {
    console.error('Error: ', e);
  }
};
