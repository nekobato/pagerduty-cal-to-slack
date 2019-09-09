#!/usr/bin/env node

const ical = require('ical');

const ICS_URL = process.env.ICS_URL || process.argv[2];
const TARGET_DATE = process.env.TARGET_DATE || process.argv[3];

const now = new Date(TARGET_DATE || Date.now());

ical.fromURL(ICS_URL, {}, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key].type !== 'VEVENT') continue;
      if (new Date(data[key].start) <= now && now < new Date(data[key].end)) {
        console.info(data[key].attendee);
      }
    }
  }
});
