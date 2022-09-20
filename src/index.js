"use strict";

function getJsonFile() {
  try {
    var data = require("./CAC.json");
    return data;
  } catch (err) {
    console.log("Error reading file from fisk: ".concat(err));
  }
}
function convertFromCountryNameToAbbr(countryName) {
  var jsonFile = getJsonFile();
  var abbr = "";
  jsonFile.forEach(function (item) {
    if (item["country"].toLowerCase() === countryName.toLowerCase()) {
      abbr = item["abbreviation"];
      return;
    }
  });
  return abbr;
}
function convertFromCountryNameToContinent(countryName) {
  var jsonFile = getJsonFile();
  var continent = "";
  jsonFile.forEach(function (item) {
    if (item["country"].toLowerCase() === countryName.toLowerCase()) {
      continent = item["continent"];
      return;
    }
  });
}
function convertFromAbbrToCountry(abbr) {
  var jsonFile = getJsonFile();
  var country = "";
  jsonFile.forEach(function (item) {
    if (item["abbreviation"].toLowerCase() === abbr.toLowerCase()) {
      country = item["country"];
      return;
    }
  });
  return country;
}
function convertFromAbbrToContinent(abbr) {
  var jsonFile = getJsonFile();
  var continent = "";
  jsonFile.forEach(function (item) {
    if (item["abbreviation"].toLowerCase() === abbr.toLowerCase()) {
      continent = item["continent"];
      return;
    }
  });
  return continent;
}
function convertFromContinentToCountryList(continent) {
  var jsonFile = getJsonFile();
  var countryList = [];
  jsonFile.forEach(function (item) {
    if (item["continent"].toLowerCase() === continent.toLowerCase()) {
      countryList.push(item["country"]);
    }
  });
  return countryList;
}
function exportAllContinent() {
  let li = [];
  const jsonFile = getJsonFile();
  jsonFile.forEach((item) => {
    if (!li.includes(item["continent"])) {
      li.push(item["continent"]);
    }
  });
  return li;
}
function exportAllCountries() {
  let li = [];
  const jsonFile = getJsonFile();
  jsonFile.forEach((item) => {
    li.push(item["country"]);
  });
  return li;
}
function getStructuredGeo() {
  const li = exportAllContinent();
  // const jsonFile = getJsonFile();
  const structuredGeo = [];
  // console.log(li);

  li.forEach((item) => {
    const geo = {};
    geo[`${item}`] = convertFromContinentToCountryList(item);
    structuredGeo.push(geo);
  });
  // console.log(structuredGeo);
  return structuredGeo;
}
module.exports = {
  convertFromContinentToCountryList,
  convertFromAbbrToContinent,
  convertFromAbbrToCountry,
  convertFromCountryNameToContinent,
  convertFromCountryNameToAbbr,
  exportAllContinent,
  exportAllCountries,
  getStructuredGeo,
};
