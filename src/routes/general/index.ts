import express from 'express';
import { Request, Response } from 'express';
const json2xls = require('json2xls');
// const jsPDF = require('jspdf');
// import * as JSPdf from "jspdf";
import fs from 'fs';
const router = express.Router();

import Donation from '../../models/donation/index.model';
import Volunteer from '../../models/volunteer/index.model';
import AccessCard from '../../models/access-card/index.model';
import SocialCard from '../../models/social-card/index.model';

/**
 *
 */
router.get('/download/:segment/:type', async (req: Request, res: Response) => {
  if (req.params.segment === 'donations') {
    Donation.find().select({ '__v': 0, '_id': 0}).lean().exec(function(err: Error, data: {}) {
      if (err) {
        res.json('error happened');
      } else {
        const xls = json2xls(data);

        fs.writeFileSync(__dirname + '/data.xlsx', xls, 'binary');
        const file = __dirname + '/data.xlsx';
        res.download(file);
      }
    });
  } else if (req.params.segment === 'volunteers') {
    Volunteer.find().select({ '__v': 0, '_id': 0}).lean().exec(function(err: Error, data: {}) {
      if (err) {
        res.json('error happened');
      } else {
        const xls = json2xls(data);

        fs.writeFileSync(__dirname + '/data.xlsx', xls, 'binary');
        const file = __dirname + '/data.xlsx';
        res.download(file);
      }
    });
  } else if (req.params.segment === 'access-card') {
    AccessCard.find().select({ '__v': 0, '_id': 0}).lean().exec(function(err: Error, data: {}) {
      if (err) {
        res.json('error happened');
      } else {
        const xls = json2xls(data);

        fs.writeFileSync(__dirname + '/data.xlsx', xls, 'binary');
        const file = __dirname + '/data.xlsx';
        res.download(file);
      }
    });
  } else if (req.params.segment === 'social-card') {
    SocialCard.find().select({ '__v': 0, '_id': 0}).lean().exec(function(err: Error, data: {}) {
      if (err) {
        res.json('error happened');
      } else {
        const xls = json2xls(data);

        fs.writeFileSync(__dirname + '/data.xlsx', xls, 'binary');
        const file = __dirname + '/data.xlsx';
        res.download(file);
      }
    });
  } else {
    res.json('no such file');
  }

});

// generatePdf = () => {
//   let doc = new JSPdf();
//   doc.text("Hello", 20, 20);
//   doc.save('table.pdf');
// }

module.exports = router;
