const express = require("express");
const add = require("date-fns/add");
const app = express();

app.get("/", (Request, Response) => {
  const date = new Date();
  let day = date.getDate();
  day = Number(day < 10 ? "0" + day : day);

  let month = date.getMonth() + 1;
  month = Number(month < 10 ? "0" + month : month);
  let year = date.getFullYear();
  let result = add(new Date(year, month - 1, day, 0, 0, 0), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 100,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let opDay = result.getDate();
  opDay = opDay < 10 ? "0" + opDay : opDay;
  let opMonth = result.getMonth() + 1;
  opMonth = opMonth < 10 ? "0" + opMonth : opMonth;

  let opYear = result.getFullYear();
  Response.send(`${opDay}/${opMonth}/${opYear}`);
});

module.exports = app;
