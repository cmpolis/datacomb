//
//
// Sample data for Datacomb testing, data definitions

var countryColumns = [
  {
    label: 'Name',
    accessor: 'countryName',
    type: 'discrete'
  },
  {
    label: 'Population',
    accessor: 'population',
  },
  {
    label: 'Population Density',
    accessor: function(d) { return d.population / d.areaInSqKm; }
  }
];

// http://peric.github.io/GetCountries/
var countries = [
  {
    "countryName": "Andorra",
    "population": 84000,
    "continent": "EU",
    "areaInSqKm": 468.0
  },
  {
    "countryName": "United Arab Emirates",
    "population": 4975593,
    "continent": "AS",
    "areaInSqKm": 82880.0
  },
  {
    "countryName": "Afghanistan",
    "population": 29121286,
    "continent": "AS",
    "areaInSqKm": 647500.0
  },
  {
    "countryName": "Antigua and Barbuda",
    "population": 86754,
    "continent": "NA",
    "areaInSqKm": 443.0
  },
  {
    "countryName": "Anguilla",
    "population": 13254,
    "continent": "NA",
    "areaInSqKm": 102.0
  },
  {
    "countryName": "Albania",
    "population": 2986952,
    "continent": "EU",
    "areaInSqKm": 28748.0
  },
  {
    "countryName": "Armenia",
    "population": 2968000,
    "continent": "AS",
    "areaInSqKm": 29800.0
  },
  {
    "countryName": "Angola",
    "population": 13068161,
    "continent": "AF",
    "areaInSqKm": 1246700.0
  },
  {
    "countryName": "Antarctica",
    "population": 0,
    "continent": "AN",
    "areaInSqKm": 1.4E7
  },
  {
    "countryName": "Argentina",
    "population": 41343201,
    "continent": "SA",
    "areaInSqKm": 2766890.0
  },
  {
    "countryName": "American Samoa",
    "population": 57881,
    "continent": "OC",
    "areaInSqKm": 199.0
  },
  {
    "countryName": "Austria",
    "population": 8205000,
    "continent": "EU",
    "areaInSqKm": 83858.0
  },
  {
    "countryName": "Australia",
    "population": 21515754,
    "continent": "OC",
    "areaInSqKm": 7686850.0
  },
  {
    "countryName": "Aruba",
    "population": 71566,
    "continent": "NA",
    "areaInSqKm": 193.0
  },
  {
    "countryName": "Åland",
    "population": 26711,
    "continent": "EU",
    "areaInSqKm": 1580.0
  },
  {
    "countryName": "Azerbaijan",
    "population": 8303512,
    "continent": "AS",
    "areaInSqKm": 86600.0
  },
  {
    "countryName": "Bosnia and Herzegovina",
    "population": 4590000,
    "continent": "EU",
    "areaInSqKm": 51129.0
  },
  {
    "countryName": "Barbados",
    "population": 285653,
    "continent": "NA",
    "areaInSqKm": 431.0
  },
  {
    "countryName": "Bangladesh",
    "population": 156118464,
    "continent": "AS",
    "areaInSqKm": 144000.0
  },
  {
    "countryName": "Belgium",
    "population": 10403000,
    "continent": "EU",
    "areaInSqKm": 30510.0
  },
  {
    "countryName": "Burkina Faso",
    "population": 16241811,
    "continent": "AF",
    "areaInSqKm": 274200.0
  },
  {
    "countryName": "Bulgaria",
    "population": 7148785,
    "continent": "EU",
    "areaInSqKm": 110910.0
  },
  {
    "countryName": "Bahrain",
    "population": 738004,
    "continent": "AS",
    "areaInSqKm": 665.0
  },
  {
    "countryName": "Burundi",
    "population": 9863117,
    "continent": "AF",
    "areaInSqKm": 27830.0
  },
  {
    "countryName": "Benin",
    "population": 9056010,
    "continent": "AF",
    "areaInSqKm": 112620.0
  },
  {
    "countryName": "Saint Barthélemy",
    "population": 8450,
    "continent": "NA",
    "areaInSqKm": 21.0
  },
  {
    "countryName": "Bermuda",
    "population": 65365,
    "continent": "NA",
    "areaInSqKm": 53.0
  },
  {
    "countryName": "Brunei",
    "population": 395027,
    "continent": "AS",
    "areaInSqKm": 5770.0
  },
  {
    "countryName": "Bolivia",
    "population": 9947418,
    "continent": "SA",
    "areaInSqKm": 1098580.0
  },
  {
    "countryName": "Bonaire",
    "population": 18012,
    "continent": "NA",
    "areaInSqKm": 328.0
  },
  {
    "countryName": "Brazil",
    "population": 201103330,
    "continent": "SA",
    "areaInSqKm": 8511965.0
  },
  {
    "countryName": "Bahamas",
    "population": 301790,
    "continent": "NA",
    "areaInSqKm": 13940.0
  },
  {
    "countryName": "Bhutan",
    "population": 699847,
    "continent": "AS",
    "areaInSqKm": 47000.0
  },
  {
    "countryName": "Bouvet Island",
    "population": 0,
    "continent": "AN",
    "areaInSqKm": 49.0
  },
  {
    "countryName": "Botswana",
    "population": 2029307,
    "continent": "AF",
    "areaInSqKm": 600370.0
  },
  {
    "countryName": "Belarus",
    "population": 9685000,
    "continent": "EU",
    "areaInSqKm": 207600.0
  },
  {
    "countryName": "Belize",
    "population": 314522,
    "continent": "NA",
    "areaInSqKm": 22966.0
  },
  {
    "countryName": "Canada",
    "population": 33679000,
    "continent": "NA",
    "areaInSqKm": 9984670.0
  },
  {
    "countryName": "Cocos [Keeling] Islands",
    "population": 628,
    "continent": "AS",
    "areaInSqKm": 14.0
  },
  {
    "countryName": "Democratic Republic of the Congo",
    "population": 70916439,
    "continent": "AF",
    "areaInSqKm": 2345410.0
  },
  {
    "countryName": "Central African Republic",
    "population": 4844927,
    "continent": "AF",
    "areaInSqKm": 622984.0
  },
  {
    "countryName": "Republic of the Congo",
    "population": 3039126,
    "continent": "AF",
    "areaInSqKm": 342000.0
  },
  {
    "countryName": "Switzerland",
    "population": 7581000,
    "continent": "EU",
    "areaInSqKm": 41290.0
  },
  {
    "countryName": "Ivory Coast",
    "population": 21058798,
    "continent": "AF",
    "areaInSqKm": 322460.0
  },
  {
    "countryName": "Cook Islands",
    "population": 21388,
    "continent": "OC",
    "areaInSqKm": 240.0
  },
  {
    "countryName": "Chile",
    "population": 16746491,
    "continent": "SA",
    "areaInSqKm": 756950.0
  },
  {
    "countryName": "Cameroon",
    "population": 19294149,
    "continent": "AF",
    "areaInSqKm": 475440.0
  },
  {
    "countryName": "China",
    "population": 1330044000,
    "continent": "AS",
    "areaInSqKm": 9596960.0
  },
  {
    "countryName": "Colombia",
    "population": 47790000,
    "continent": "SA",
    "areaInSqKm": 1138910.0
  },
  {
    "countryName": "Costa Rica",
    "population": 4516220,
    "continent": "NA",
    "areaInSqKm": 51100.0
  },
  {
    "countryName": "Cuba",
    "population": 11423000,
    "continent": "NA",
    "areaInSqKm": 110860.0
  },
  {
    "countryName": "Cape Verde",
    "population": 508659,
    "continent": "AF",
    "areaInSqKm": 4033.0
  },
  {
    "countryName": "Curacao",
    "population": 141766,
    "continent": "NA",
    "areaInSqKm": 444.0
  },
  {
    "countryName": "Christmas Island",
    "population": 1500,
    "continent": "AS",
    "areaInSqKm": 135.0
  },
  {
    "countryName": "Cyprus",
    "population": 1102677,
    "continent": "EU",
    "areaInSqKm": 9250.0
  },
  {
    "countryName": "Czech Republic",
    "population": 10476000,
    "continent": "EU",
    "areaInSqKm": 78866.0
  },
  {
    "countryName": "Germany",
    "population": 81802257,
    "continent": "EU",
    "areaInSqKm": 357021.0
  },
  {
    "countryName": "Djibouti",
    "population": 740528,
    "continent": "AF",
    "areaInSqKm": 23000.0
  },
  {
    "countryName": "Denmark",
    "population": 5484000,
    "continent": "EU",
    "areaInSqKm": 43094.0
  },
  {
    "countryName": "Dominica",
    "population": 72813,
    "continent": "NA",
    "areaInSqKm": 754.0
  },
  {
    "countryName": "Dominican Republic",
    "population": 9823821,
    "continent": "NA",
    "areaInSqKm": 48730.0
  },
  {
    "countryName": "Algeria",
    "population": 34586184,
    "continent": "AF",
    "areaInSqKm": 2381740.0
  },
  {
    "countryName": "Ecuador",
    "population": 14790608,
    "continent": "SA",
    "areaInSqKm": 283560.0
  },
  {
    "countryName": "Estonia",
    "population": 1291170,
    "continent": "EU",
    "areaInSqKm": 45226.0
  },
  {
    "countryName": "Egypt",
    "population": 80471869,
    "continent": "AF",
    "areaInSqKm": 1001450.0
  },
  {
    "countryName": "Western Sahara",
    "population": 273008,
    "continent": "AF",
    "areaInSqKm": 266000.0
  },
  {
    "countryName": "Eritrea",
    "population": 5792984,
    "continent": "AF",
    "areaInSqKm": 121320.0
  },
  {
    "countryName": "Spain",
    "population": 46505963,
    "continent": "EU",
    "areaInSqKm": 504782.0
  },
  {
    "countryName": "Ethiopia",
    "population": 88013491,
    "continent": "AF",
    "areaInSqKm": 1127127.0
  },
  {
    "countryName": "Finland",
    "population": 5244000,
    "continent": "EU",
    "areaInSqKm": 337030.0
  },
  {
    "countryName": "Fiji",
    "population": 875983,
    "continent": "OC",
    "areaInSqKm": 18270.0
  },
  {
    "countryName": "Falkland Islands",
    "population": 2638,
    "continent": "SA",
    "areaInSqKm": 12173.0
  },
  {
    "countryName": "Micronesia",
    "population": 107708,
    "continent": "OC",
    "areaInSqKm": 702.0
  },
  {
    "countryName": "Faroe Islands",
    "population": 48228,
    "continent": "EU",
    "areaInSqKm": 1399.0
  },
  {
    "countryName": "France",
    "population": 64768389,
    "continent": "EU",
    "areaInSqKm": 547030.0
  },
  {
    "countryName": "Gabon",
    "population": 1545255,
    "continent": "AF",
    "areaInSqKm": 267667.0
  },
  {
    "countryName": "United Kingdom",
    "population": 62348447,
    "continent": "EU",
    "areaInSqKm": 244820.0
  },
  {
    "countryName": "Grenada",
    "population": 107818,
    "continent": "NA",
    "areaInSqKm": 344.0
  },
  {
    "countryName": "Georgia",
    "population": 4630000,
    "continent": "AS",
    "areaInSqKm": 69700.0
  },
  {
    "countryName": "French Guiana",
    "population": 195506,
    "continent": "SA",
    "areaInSqKm": 91000.0
  },
  {
    "countryName": "Guernsey",
    "population": 65228,
    "continent": "EU",
    "areaInSqKm": 78.0
  },
  {
    "countryName": "Ghana",
    "population": 24339838,
    "continent": "AF",
    "areaInSqKm": 239460.0
  },
  {
    "countryName": "Gibraltar",
    "population": 27884,
    "continent": "EU",
    "areaInSqKm": 6.5
  },
  {
    "countryName": "Greenland",
    "population": 56375,
    "continent": "NA",
    "areaInSqKm": 2166086.0
  },
  {
    "countryName": "Gambia",
    "population": 1593256,
    "continent": "AF",
    "areaInSqKm": 11300.0
  },
  {
    "countryName": "Guinea",
    "population": 10324025,
    "continent": "AF",
    "areaInSqKm": 245857.0
  },
  {
    "countryName": "Guadeloupe",
    "population": 443000,
    "continent": "NA",
    "areaInSqKm": 1780.0
  },
  {
    "countryName": "Equatorial Guinea",
    "population": 1014999,
    "continent": "AF",
    "areaInSqKm": 28051.0
  },
  {
    "countryName": "Greece",
    "population": 11000000,
    "continent": "EU",
    "areaInSqKm": 131940.0
  },
  {
    "countryName": "South Georgia and the South Sandwich Islands",
    "population": 30,
    "continent": "AN",
    "areaInSqKm": 3903.0
  },
  {
    "countryName": "Guatemala",
    "population": 13550440,
    "continent": "NA",
    "areaInSqKm": 108890.0
  },
  {
    "countryName": "Guam",
    "population": 159358,
    "continent": "OC",
    "areaInSqKm": 549.0
  },
  {
    "countryName": "Guinea-Bissau",
    "population": 1565126,
    "continent": "AF",
    "areaInSqKm": 36120.0
  },
  {
    "countryName": "Guyana",
    "population": 748486,
    "continent": "SA",
    "areaInSqKm": 214970.0
  },
  {
    "countryName": "Hong Kong",
    "population": 6898686,
    "continent": "AS",
    "areaInSqKm": 1092.0
  },
  {
    "countryName": "Heard Island and McDonald Islands",
    "population": 0,
    "continent": "AN",
    "areaInSqKm": 412.0
  },
  {
    "countryName": "Honduras",
    "population": 7989415,
    "continent": "NA",
    "areaInSqKm": 112090.0
  },
  {
    "countryName": "Croatia",
    "population": 4491000,
    "continent": "EU",
    "areaInSqKm": 56542.0
  },
  {
    "countryName": "Haiti",
    "population": 9648924,
    "continent": "NA",
    "areaInSqKm": 27750.0
  },
  {
    "countryName": "Hungary",
    "population": 9982000,
    "continent": "EU",
    "areaInSqKm": 93030.0
  },
  {
    "countryName": "Indonesia",
    "population": 242968342,
    "continent": "AS",
    "areaInSqKm": 1919440.0
  },
  {
    "countryName": "Ireland",
    "population": 4622917,
    "continent": "EU",
    "areaInSqKm": 70280.0
  },
  {
    "countryName": "Israel",
    "population": 7353985,
    "continent": "AS",
    "areaInSqKm": 20770.0
  },
  {
    "countryName": "Isle of Man",
    "population": 75049,
    "continent": "EU",
    "areaInSqKm": 572.0
  },
  {
    "countryName": "India",
    "population": 1173108018,
    "continent": "AS",
    "areaInSqKm": 3287590.0
  },
  {
    "countryName": "British Indian Ocean Territory",
    "population": 4000,
    "continent": "AS",
    "areaInSqKm": 60.0
  },
  {
    "countryName": "Iraq",
    "population": 29671605,
    "continent": "AS",
    "areaInSqKm": 437072.0
  },
  {
    "countryName": "Iran",
    "population": 76923300,
    "continent": "AS",
    "areaInSqKm": 1648000.0
  },
  {
    "countryName": "Iceland",
    "population": 308910,
    "continent": "EU",
    "areaInSqKm": 103000.0
  },
  {
    "countryName": "Italy",
    "population": 60340328,
    "continent": "EU",
    "areaInSqKm": 301230.0
  },
  {
    "countryName": "Jersey",
    "population": 90812,
    "continent": "EU",
    "areaInSqKm": 116.0
  },
  {
    "countryName": "Jamaica",
    "population": 2847232,
    "continent": "NA",
    "areaInSqKm": 10991.0
  },
  {
    "countryName": "Jordan",
    "population": 6407085,
    "continent": "AS",
    "areaInSqKm": 92300.0
  },
  {
    "countryName": "Japan",
    "population": 127288000,
    "continent": "AS",
    "areaInSqKm": 377835.0
  },
  {
    "countryName": "Kenya",
    "population": 40046566,
    "continent": "AF",
    "areaInSqKm": 582650.0
  },
  {
    "countryName": "Kyrgyzstan",
    "population": 5508626,
    "continent": "AS",
    "areaInSqKm": 198500.0
  },
  {
    "countryName": "Cambodia",
    "population": 14453680,
    "continent": "AS",
    "areaInSqKm": 181040.0
  },
  {
    "countryName": "Kiribati",
    "population": 92533,
    "continent": "OC",
    "areaInSqKm": 811.0
  },
  {
    "countryName": "Comoros",
    "population": 773407,
    "continent": "AF",
    "areaInSqKm": 2170.0
  },
  {
    "countryName": "Saint Kitts and Nevis",
    "population": 51134,
    "continent": "NA",
    "areaInSqKm": 261.0
  },
  {
    "countryName": "North Korea",
    "population": 22912177,
    "continent": "AS",
    "areaInSqKm": 120540.0
  },
  {
    "countryName": "South Korea",
    "population": 48422644,
    "continent": "AS",
    "areaInSqKm": 98480.0
  },
  {
    "countryName": "Kuwait",
    "population": 2789132,
    "continent": "AS",
    "areaInSqKm": 17820.0
  },
  {
    "countryName": "Cayman Islands",
    "population": 44270,
    "continent": "NA",
    "areaInSqKm": 262.0
  },
  {
    "countryName": "Kazakhstan",
    "population": 15340000,
    "continent": "AS",
    "areaInSqKm": 2717300.0
  },
  {
    "countryName": "Laos",
    "population": 6368162,
    "continent": "AS",
    "areaInSqKm": 236800.0
  },
  {
    "countryName": "Lebanon",
    "population": 4125247,
    "continent": "AS",
    "areaInSqKm": 10400.0
  },
  {
    "countryName": "Saint Lucia",
    "population": 160922,
    "continent": "NA",
    "areaInSqKm": 616.0
  },
  {
    "countryName": "Liechtenstein",
    "population": 35000,
    "continent": "EU",
    "areaInSqKm": 160.0
  },
  {
    "countryName": "Sri Lanka",
    "population": 21513990,
    "continent": "AS",
    "areaInSqKm": 65610.0
  },
  {
    "countryName": "Liberia",
    "population": 3685076,
    "continent": "AF",
    "areaInSqKm": 111370.0
  },
  {
    "countryName": "Lesotho",
    "population": 1919552,
    "continent": "AF",
    "areaInSqKm": 30355.0
  },
  {
    "countryName": "Lithuania",
    "population": 2944459,
    "continent": "EU",
    "areaInSqKm": 65200.0
  },
  {
    "countryName": "Luxembourg",
    "population": 497538,
    "continent": "EU",
    "areaInSqKm": 2586.0
  },
  {
    "countryName": "Latvia",
    "population": 2217969,
    "continent": "EU",
    "areaInSqKm": 64589.0
  },
  {
    "countryName": "Libya",
    "population": 6461454,
    "continent": "AF",
    "areaInSqKm": 1759540.0
  },
  {
    "countryName": "Morocco",
    "population": 31627428,
    "continent": "AF",
    "areaInSqKm": 446550.0
  },
  {
    "countryName": "Monaco",
    "population": 32965,
    "continent": "EU",
    "areaInSqKm": 1.95
  },
  {
    "countryName": "Moldova",
    "population": 4324000,
    "continent": "EU",
    "areaInSqKm": 33843.0
  },
  {
    "countryName": "Montenegro",
    "population": 666730,
    "continent": "EU",
    "areaInSqKm": 14026.0
  },
  {
    "countryName": "Saint Martin",
    "population": 35925,
    "continent": "NA",
    "areaInSqKm": 53.0
  },
  {
    "countryName": "Madagascar",
    "population": 21281844,
    "continent": "AF",
    "areaInSqKm": 587040.0
  },
  {
    "countryName": "Marshall Islands",
    "population": 65859,
    "continent": "OC",
    "areaInSqKm": 181.3
  },
  {
    "countryName": "Macedonia",
    "population": 2062294,
    "continent": "EU",
    "areaInSqKm": 25333.0
  },
  {
    "countryName": "Mali",
    "population": 13796354,
    "continent": "AF",
    "areaInSqKm": 1240000.0
  },
  {
    "countryName": "Myanmar [Burma]",
    "population": 53414374,
    "continent": "AS",
    "areaInSqKm": 678500.0
  },
  {
    "countryName": "Mongolia",
    "population": 3086918,
    "continent": "AS",
    "areaInSqKm": 1565000.0
  },
  {
    "countryName": "Macao",
    "population": 449198,
    "continent": "AS",
    "areaInSqKm": 254.0
  },
  {
    "countryName": "Northern Mariana Islands",
    "population": 53883,
    "continent": "OC",
    "areaInSqKm": 477.0
  },
  {
    "countryName": "Martinique",
    "population": 432900,
    "continent": "NA",
    "areaInSqKm": 1100.0
  },
  {
    "countryName": "Mauritania",
    "population": 3205060,
    "continent": "AF",
    "areaInSqKm": 1030700.0
  },
  {
    "countryName": "Montserrat",
    "population": 9341,
    "continent": "NA",
    "areaInSqKm": 102.0
  },
  {
    "countryName": "Malta",
    "population": 403000,
    "continent": "EU",
    "areaInSqKm": 316.0
  },
  {
    "countryName": "Mauritius",
    "population": 1294104,
    "continent": "AF",
    "areaInSqKm": 2040.0
  },
  {
    "countryName": "Maldives",
    "population": 395650,
    "continent": "AS",
    "areaInSqKm": 300.0
  },
  {
    "countryName": "Malawi",
    "population": 15447500,
    "continent": "AF",
    "areaInSqKm": 118480.0
  },
  {
    "countryName": "Mexico",
    "population": 112468855,
    "continent": "NA",
    "areaInSqKm": 1972550.0
  },
  {
    "countryName": "Malaysia",
    "population": 28274729,
    "continent": "AS",
    "areaInSqKm": 329750.0
  },
  {
    "countryName": "Mozambique",
    "population": 22061451,
    "continent": "AF",
    "areaInSqKm": 801590.0
  },
  {
    "countryName": "Namibia",
    "population": 2128471,
    "continent": "AF",
    "areaInSqKm": 825418.0
  },
  {
    "countryName": "New Caledonia",
    "population": 216494,
    "continent": "OC",
    "areaInSqKm": 19060.0
  },
  {
    "countryName": "Niger",
    "population": 15878271,
    "continent": "AF",
    "areaInSqKm": 1267000.0
  },
  {
    "countryName": "Norfolk Island",
    "population": 1828,
    "continent": "OC",
    "areaInSqKm": 34.6
  },
  {
    "countryName": "Nigeria",
    "population": 154000000,
    "continent": "AF",
    "areaInSqKm": 923768.0
  },
  {
    "countryName": "Nicaragua",
    "population": 5995928,
    "continent": "NA",
    "areaInSqKm": 129494.0
  },
  {
    "countryName": "Netherlands",
    "population": 16645000,
    "continent": "EU",
    "areaInSqKm": 41526.0
  },
  {
    "countryName": "Norway",
    "population": 5009150,
    "continent": "EU",
    "areaInSqKm": 324220.0
  },
  {
    "countryName": "Nepal",
    "population": 28951852,
    "continent": "AS",
    "areaInSqKm": 140800.0
  },
  {
    "countryName": "Nauru",
    "population": 10065,
    "continent": "OC",
    "areaInSqKm": 21.0
  },
  {
    "countryName": "Niue",
    "population": 2166,
    "continent": "OC",
    "areaInSqKm": 260.0
  },
  {
    "countryName": "New Zealand",
    "population": 4252277,
    "continent": "OC",
    "areaInSqKm": 268680.0
  },
  {
    "countryName": "Oman",
    "population": 2967717,
    "continent": "AS",
    "areaInSqKm": 212460.0
  },
  {
    "countryName": "Panama",
    "population": 3410676,
    "continent": "NA",
    "areaInSqKm": 78200.0
  },
  {
    "countryName": "Peru",
    "population": 29907003,
    "continent": "SA",
    "areaInSqKm": 1285220.0
  },
  {
    "countryName": "French Polynesia",
    "population": 270485,
    "continent": "OC",
    "areaInSqKm": 4167.0
  },
  {
    "countryName": "Papua New Guinea",
    "population": 6064515,
    "continent": "OC",
    "areaInSqKm": 462840.0
  },
  {
    "countryName": "Philippines",
    "population": 99900177,
    "continent": "AS",
    "areaInSqKm": 300000.0
  },
  {
    "countryName": "Pakistan",
    "population": 184404791,
    "continent": "AS",
    "areaInSqKm": 803940.0
  },
  {
    "countryName": "Poland",
    "population": 38500000,
    "continent": "EU",
    "areaInSqKm": 312685.0
  },
  {
    "countryName": "Saint Pierre and Miquelon",
    "population": 7012,
    "continent": "NA",
    "areaInSqKm": 242.0
  },
  {
    "countryName": "Pitcairn Islands",
    "population": 46,
    "continent": "OC",
    "areaInSqKm": 47.0
  },
  {
    "countryName": "Puerto Rico",
    "population": 3916632,
    "continent": "NA",
    "areaInSqKm": 9104.0
  },
  {
    "countryName": "Palestine",
    "population": 3800000,
    "continent": "AS",
    "areaInSqKm": 5970.0
  },
  {
    "countryName": "Portugal",
    "population": 10676000,
    "continent": "EU",
    "areaInSqKm": 92391.0
  },
  {
    "countryName": "Palau",
    "population": 19907,
    "continent": "OC",
    "areaInSqKm": 458.0
  },
  {
    "countryName": "Paraguay",
    "population": 6375830,
    "continent": "SA",
    "areaInSqKm": 406750.0
  },
  {
    "countryName": "Qatar",
    "population": 840926,
    "continent": "AS",
    "areaInSqKm": 11437.0
  },
  {
    "countryName": "Réunion",
    "population": 776948,
    "continent": "AF",
    "areaInSqKm": 2517.0
  },
  {
    "countryName": "Romania",
    "population": 21959278,
    "continent": "EU",
    "areaInSqKm": 237500.0
  },
  {
    "countryName": "Serbia",
    "population": 7344847,
    "continent": "EU",
    "areaInSqKm": 88361.0
  },
  {
    "countryName": "Russia",
    "population": 140702000,
    "continent": "EU",
    "areaInSqKm": 1.71E7
  },
  {
    "countryName": "Rwanda",
    "population": 11055976,
    "continent": "AF",
    "areaInSqKm": 26338.0
  },
  {
    "countryName": "Saudi Arabia",
    "population": 25731776,
    "continent": "AS",
    "areaInSqKm": 1960582.0
  },
  {
    "countryName": "Solomon Islands",
    "population": 559198,
    "continent": "OC",
    "areaInSqKm": 28450.0
  },
  {
    "countryName": "Seychelles",
    "population": 88340,
    "continent": "AF",
    "areaInSqKm": 455.0
  },
  {
    "countryName": "Sudan",
    "population": 35000000,
    "continent": "AF",
    "areaInSqKm": 1861484.0
  },
  {
    "countryName": "Sweden",
    "population": 9555893,
    "continent": "EU",
    "areaInSqKm": 449964.0
  },
  {
    "countryName": "Singapore",
    "population": 4701069,
    "continent": "AS",
    "areaInSqKm": 692.7
  },
  {
    "countryName": "Saint Helena",
    "population": 7460,
    "continent": "AF",
    "areaInSqKm": 410.0
  },
  {
    "countryName": "Slovenia",
    "population": 2007000,
    "continent": "EU",
    "areaInSqKm": 20273.0
  },
  {
    "countryName": "Svalbard and Jan Mayen",
    "population": 2550,
    "continent": "EU",
    "areaInSqKm": 62049.0
  },
  {
    "countryName": "Slovakia",
    "population": 5455000,
    "continent": "EU",
    "areaInSqKm": 48845.0
  },
  {
    "countryName": "Sierra Leone",
    "population": 5245695,
    "continent": "AF",
    "areaInSqKm": 71740.0
  },
  {
    "countryName": "San Marino",
    "population": 31477,
    "continent": "EU",
    "areaInSqKm": 61.2
  },
  {
    "countryName": "Senegal",
    "population": 12323252,
    "continent": "AF",
    "areaInSqKm": 196190.0
  },
  {
    "countryName": "Somalia",
    "population": 10112453,
    "continent": "AF",
    "areaInSqKm": 637657.0
  },
  {
    "countryName": "Suriname",
    "population": 492829,
    "continent": "SA",
    "areaInSqKm": 163270.0
  },
  {
    "countryName": "South Sudan",
    "population": 8260490,
    "continent": "AF",
    "areaInSqKm": 644329.0
  },
  {
    "countryName": "São Tomé and Príncipe",
    "population": 175808,
    "continent": "AF",
    "areaInSqKm": 1001.0
  },
  {
    "countryName": "El Salvador",
    "population": 6052064,
    "continent": "NA",
    "areaInSqKm": 21040.0
  },
  {
    "countryName": "Sint Maarten",
    "population": 37429,
    "continent": "NA",
    "areaInSqKm": 21.0
  },
  {
    "countryName": "Syria",
    "population": 22198110,
    "continent": "AS",
    "areaInSqKm": 185180.0
  },
  {
    "countryName": "Swaziland",
    "population": 1354051,
    "continent": "AF",
    "areaInSqKm": 17363.0
  },
  {
    "countryName": "Turks and Caicos Islands",
    "population": 20556,
    "continent": "NA",
    "areaInSqKm": 430.0
  },
  {
    "countryName": "Chad",
    "population": 10543464,
    "continent": "AF",
    "areaInSqKm": 1284000.0
  },
  {
    "countryName": "French Southern Territories",
    "population": 140,
    "continent": "AN",
    "areaInSqKm": 7829.0
  },
  {
    "countryName": "Togo",
    "population": 6587239,
    "continent": "AF",
    "areaInSqKm": 56785.0
  },
  {
    "countryName": "Thailand",
    "population": 67089500,
    "continent": "AS",
    "areaInSqKm": 514000.0
  },
  {
    "countryName": "Tajikistan",
    "population": 7487489,
    "continent": "AS",
    "areaInSqKm": 143100.0
  },
  {
    "countryName": "Tokelau",
    "population": 1466,
    "continent": "OC",
    "areaInSqKm": 10.0
  },
  {
    "countryName": "East Timor",
    "population": 1154625,
    "continent": "OC",
    "areaInSqKm": 15007.0
  },
  {
    "countryName": "Turkmenistan",
    "population": 4940916,
    "continent": "AS",
    "areaInSqKm": 488100.0
  },
  {
    "countryName": "Tunisia",
    "population": 10589025,
    "continent": "AF",
    "areaInSqKm": 163610.0
  },
  {
    "countryName": "Tonga",
    "population": 122580,
    "continent": "OC",
    "areaInSqKm": 748.0
  },
  {
    "countryName": "Turkey",
    "population": 77804122,
    "continent": "AS",
    "areaInSqKm": 780580.0
  },
  {
    "countryName": "Trinidad and Tobago",
    "population": 1228691,
    "continent": "NA",
    "areaInSqKm": 5128.0
  },
  {
    "countryName": "Tuvalu",
    "population": 10472,
    "continent": "OC",
    "areaInSqKm": 26.0
  },
  {
    "countryName": "Taiwan",
    "population": 22894384,
    "continent": "AS",
    "areaInSqKm": 35980.0
  },
  {
    "countryName": "Tanzania",
    "population": 41892895,
    "continent": "AF",
    "areaInSqKm": 945087.0
  },
  {
    "countryName": "Ukraine",
    "population": 45415596,
    "continent": "EU",
    "areaInSqKm": 603700.0
  },
  {
    "countryName": "Uganda",
    "population": 33398682,
    "continent": "AF",
    "areaInSqKm": 236040.0
  },
  {
    "countryName": "U.S. Minor Outlying Islands",
    "population": 0,
    "continent": "OC",
    "areaInSqKm": 0.0
  },
  {
    "countryName": "United States",
    "population": 310232863,
    "continent": "NA",
    "areaInSqKm": 9629091.0
  },
  {
    "countryName": "Uruguay",
    "population": 3477000,
    "continent": "SA",
    "areaInSqKm": 176220.0
  },
  {
    "countryName": "Uzbekistan",
    "population": 27865738,
    "continent": "AS",
    "areaInSqKm": 447400.0
  },
  {
    "countryName": "Vatican City",
    "population": 921,
    "continent": "EU",
    "areaInSqKm": 0.44
  },
  {
    "countryName": "Saint Vincent and the Grenadines",
    "population": 104217,
    "continent": "NA",
    "areaInSqKm": 389.0
  },
  {
    "countryName": "Venezuela",
    "population": 27223228,
    "continent": "SA",
    "areaInSqKm": 912050.0
  },
  {
    "countryName": "British Virgin Islands",
    "population": 21730,
    "continent": "NA",
    "areaInSqKm": 153.0
  },
  {
    "countryName": "U.S. Virgin Islands",
    "population": 108708,
    "continent": "NA",
    "areaInSqKm": 352.0
  },
  {
    "countryName": "Vietnam",
    "population": 89571130,
    "continent": "AS",
    "areaInSqKm": 329560.0
  },
  {
    "countryName": "Vanuatu",
    "population": 221552,
    "continent": "OC",
    "areaInSqKm": 12200.0
  },
  {
    "countryName": "Wallis and Futuna",
    "population": 16025,
    "continent": "OC",
    "areaInSqKm": 274.0
  },
  {
    "countryName": "Samoa",
    "population": 192001,
    "continent": "OC",
    "areaInSqKm": 2944.0
  },
  {
    "countryName": "Kosovo",
    "population": 1800000,
    "continent": "EU",
    "areaInSqKm": 10908.0
  },
  {
    "countryName": "Yemen",
    "population": 23495361,
    "continent": "AS",
    "areaInSqKm": 527970.0
  },
  {
    "countryName": "Mayotte",
    "population": 159042,
    "continent": "AF",
    "areaInSqKm": 374.0
  },
  {
    "countryName": "South Africa",
    "population": 49000000,
    "continent": "AF",
    "areaInSqKm": 1219912.0
  },
  {
    "countryName": "Zambia",
    "population": 13460305,
    "continent": "AF",
    "areaInSqKm": 752614.0
  },
  {
    "countryName": "Zimbabwe",
    "population": 11651858,
    "continent": "AF",
    "areaInSqKm": 390580.0
  }
];

module.exports = {
  countries: countries,
  countryColumns: countryColumns
};
