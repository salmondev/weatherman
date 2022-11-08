// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Capital = {
  name: string;
};

// const Capital = [
//   { name: "New York" },
//   { name: "Tokyo" },
//   { name: "Bangkok" },
//   { name: "London" },
//   { name: "Sydney" },
// ];

const Capital = [
  {
    name: "Abu Dhabi",
  },
  {
    name: "Abuja",
  },
  {
    name: "Accra",
  },
  {
    name: "Adamstown",
  },
  {
    name: "Addis Ababa",
  },
  {
    name: "Algiers",
  },
  {
    name: "Alofi",
  },
  {
    name: "Amman",
  },
  {
    name: "Amsterdam",
  },
  {
    name: "Andorra la Vella",
  },
  {
    name: "Ankara",
  },
  {
    name: "Antananarivo",
  },
  {
    name: "Apia",
  },
  {
    name: "Ashgabat",
  },
  {
    name: "Asmara",
  },
  {
    name: "Astana",
  },
  {
    name: "Asuncion",
  },
  {
    name: "Athens",
  },
  {
    name: "Avarua",
  },
  {
    name: "Baghdad",
  },
  {
    name: "Baku",
  },
  {
    name: "Bamako",
  },
  {
    name: "Bandar Seri Begawan",
  },
  {
    name: "Bangkok",
  },
  {
    name: "Bangui",
  },
  {
    name: "Banjul",
  },
  {
    name: "Basse-Terre",
  },
  {
    name: "Basseterre",
  },
  {
    name: "Beijing",
  },
  {
    name: "Beirut",
  },
  {
    name: "Belgrade",
  },
  {
    name: "Belmopan",
  },
  {
    name: "Berlin",
  },
  {
    name: "Berne",
  },
  {
    name: "Bishkek",
  },
  {
    name: "Bissau",
  },
  {
    name: "Bogota",
  },
  {
    name: "Brasilia",
  },
  {
    name: "Bratislava",
  },
  {
    name: "Brazzaville",
  },
  {
    name: "Bridgetown",
  },
  {
    name: "Brussels",
  },
  {
    name: "Bucharest",
  },
  {
    name: "Budapest",
  },
  {
    name: "Buenos Aires",
  },
  {
    name: "Bujumbura",
  },
  {
    name: "Cairo",
  },
  {
    name: "Canberra",
  },
  {
    name: "Caracas",
  },
  {
    name: "Castries",
  },
  {
    name: "Charlotte Amalie",
  },
  {
    name: "Chisinau",
  },
  {
    name: "Cockburn Town",
  },
  {
    name: "Colombo",
  },
  {
    name: "Conakry",
  },
  {
    name: "Copenhagen",
  },
  {
    name: "Dakar",
  },
  {
    name: "Damascus",
  },
  {
    name: "Dhaka",
  },
  {
    name: "Diego Garcia",
  },
  {
    name: "Dili",
  },
  {
    name: "Djibouti",
  },
  {
    name: "Dodoma",
  },
  {
    name: "Doha",
  },
  {
    name: "Douglas, Isle of Man",
  },
  {
    name: "Dublin",
  },
  {
    name: "Dushanbe",
  },
  {
    name: "East Jerusalem",
  },
  {
    name: "El-Aaiun",
  },
  {
    name: "Flying Fish Cove",
  },
  {
    name: "Fort-de-France",
  },
  {
    name: "Freetown",
  },
  {
    name: "Funafuti",
  },
  {
    name: "Gaborone",
  },
  {
    name: "George Town",
  },
  {
    name: "Georgetown",
  },
  {
    name: "Gibraltar",
  },
  {
    name: "Grytviken",
  },
  {
    name: "Guatemala City",
  },
  {
    name: "Gustavia",
  },
  {
    name: "Hagatna",
  },
  {
    name: "Hamilton",
  },
  {
    name: "Hanoi",
  },
  {
    name: "Harare",
  },
  {
    name: "Havana",
  },
  {
    name: "Helsinki",
  },
  {
    name: "Hong Kong",
  },
  {
    name: "Honiara",
  },
  {
    name: "Islamabad",
  },
  {
    name: "Jakarta",
  },
  {
    name: "Jamestown",
  },
  {
    name: "Jerusalem",
  },
  {
    name: "Juba",
  },
  {
    name: "Kabul",
  },
  {
    name: "Kampala",
  },
  {
    name: "Kathmandu",
  },
  {
    name: "Khartoum",
  },
  {
    name: "Kiev",
  },
  {
    name: "Kigali",
  },
  {
    name: "Kingston",
  },
  {
    name: "Kingstown",
  },
  {
    name: "Kinshasa",
  },
  {
    name: "Kuala Lumpur",
  },
  {
    name: "Kuwait City",
  },
  {
    name: "Libreville",
  },
  {
    name: "Lilongwe",
  },
  {
    name: "Lima",
  },
  {
    name: "Lisbon",
  },
  {
    name: "Ljubljana",
  },
  {
    name: "Lome",
  },
  {
    name: "London",
  },
  {
    name: "Longyearbyen",
  },
  {
    name: "Luanda",
  },
  {
    name: "Lusaka",
  },
  {
    name: "Luxembourg",
  },
  {
    name: "Macao",
  },
  {
    name: "Madrid",
  },
  {
    name: "Majuro",
  },
  {
    name: "Malabo",
  },
  {
    name: "Male",
  },
  {
    name: "Mamoudzou",
  },
  {
    name: "Managua",
  },
  {
    name: "Manama",
  },
  {
    name: "Manila",
  },
  {
    name: "Maputo",
  },
  {
    name: "Mariehamn",
  },
  {
    name: "Marigot",
  },
  {
    name: "Maseru",
  },
  {
    name: "Mata Utu",
  },
  {
    name: "Mbabane",
  },
  {
    name: "Melekeok",
  },
  {
    name: "Mexico City",
  },
  {
    name: "Minsk",
  },
  {
    name: "Mogadishu",
  },
  {
    name: "Monaco",
  },
  {
    name: "Monrovia",
  },
  {
    name: "Montevideo",
  },
  {
    name: "Moroni",
  },
  {
    name: "Moscow",
  },
  {
    name: "Muscat",
  },
  {
    name: "N'Djamena",
  },
  {
    name: "Nairobi",
  },
  {
    name: "Nassau",
  },
  {
    name: "Nay Pyi Taw",
  },
  {
    name: "New Delhi",
  },
  {
    name: "Niamey",
  },
  {
    name: "Nicosia",
  },
  {
    name: "Nouakchott",
  },
  {
    name: "Noumea",
  },
  {
    name: "Nuku'alofa",
  },
  {
    name: "Nuuk",
  },
  {
    name: "Oranjestad",
  },
  {
    name: "Oslo",
  },
  {
    name: "Ottawa",
  },
  {
    name: "Ouagadougou",
  },
  {
    name: "Pago Pago",
  },
  {
    name: "Palikir",
  },
  {
    name: "Panama City",
  },
  {
    name: "Papeete",
  },
  {
    name: "Paramaribo",
  },
  {
    name: "Paris",
  },
  {
    name: "Philipsburg",
  },
  {
    name: "Phnom Penh",
  },
  {
    name: "Plymouth",
  },
  {
    name: "Podgorica",
  },
  {
    name: "Port Louis",
  },
  {
    name: "Port Moresby",
  },
  {
    name: "Port Vila",
  },
  {
    name: "Port of Spain",
  },
  {
    name: "Port-au-Prince",
  },
  {
    name: "Port-aux-Francais",
  },
  {
    name: "Porto-Novo",
  },
  {
    name: "Prague",
  },
  {
    name: "Praia",
  },
  {
    name: "Pretoria",
  },
  {
    name: "Pristina",
  },
  {
    name: "Pyongyang",
  },
  {
    name: "Quito",
  },
  {
    name: "Rabat",
  },
  {
    name: "Reykjavik",
  },
  {
    name: "Riga",
  },
  {
    name: "Riyadh",
  },
  {
    name: "Road Town",
  },
  {
    name: "Rome",
  },
  {
    name: "Roseau",
  },
  {
    name: "Saint Helier",
  },
  {
    name: "Saint-Denis",
  },
  {
    name: "Saint-Pierre",
  },
  {
    name: "Saipan",
  },
  {
    name: "San Jose",
  },
  {
    name: "San Juan",
  },
  {
    name: "San Marino",
  },
  {
    name: "San Salvador",
  },
  {
    name: "Sanaa",
  },
  {
    name: "Santiago",
  },
  {
    name: "Santo Domingo",
  },
  {
    name: "Sao Tome",
  },
  {
    name: "Sarajevo",
  },
  {
    name: "Seoul",
  },
  {
    name: "Singapur",
  },
  {
    name: "Skopje",
  },
  {
    name: "Sofia",
  },
  {
    name: "St Peter Port",
  },
  {
    name: "St. George's",
  },
  {
    name: "St. John's",
  },
  {
    name: "Stanley",
  },
  {
    name: "Stockholm",
  },
  {
    name: "Sucre",
  },
  {
    name: "Suva",
  },
  {
    name: "Taipei",
  },
  {
    name: "Tallinn",
  },
  {
    name: "Tarawa",
  },
  {
    name: "Tashkent",
  },
  {
    name: "Tbilisi",
  },
  {
    name: "Tegucigalpa",
  },
  {
    name: "Tehran",
  },
  {
    name: "The Valley",
  },
  {
    name: "Thimphu",
  },
  {
    name: "Tirana",
  },
  {
    name: "Tokyo",
  },
  {
    name: "Torshavn",
  },
  {
    name: "Tripolis",
  },
  {
    name: "Tunis",
  },
  {
    name: "Ulan Bator",
  },
  {
    name: "Vaduz",
  },
  {
    name: "Valletta",
  },
  {
    name: "Vatican City",
  },
  {
    name: "Victoria",
  },
  {
    name: "Vienna",
  },
  {
    name: "Vientiane",
  },
  {
    name: "Vilnius",
  },
  {
    name: "Warsaw",
  },
  {
    name: "Washington",
  },
  {
    name: "Wellington",
  },
  {
    name: "West Island",
  },
  {
    name: "Willemstad",
  },
  {
    name: "Windhoek",
  },
  {
    name: "Yamoussoukro",
  },
  {
    name: "Yaounde",
  },
  {
    name: "Yaren",
  },
  {
    name: "Yerevan",
  },
  {
    name: "Zagreb",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Capital);
}
