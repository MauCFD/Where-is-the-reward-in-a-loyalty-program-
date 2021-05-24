let myMap = L.map("map", {
  center: [24.439722, -102.374444],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

let sales = [
  {
    name: "Aguascalientes",
    location: [21.8818, -102.291],
    sales: 5160525
  },
  {
    name: "Campeche",
    location: [19.8454, -90.523],
    sales: 2826854
  },
  {
    name: "Chiapas",
    location: [16.75, -93.1167],
    sales: 3677551
  },
  {
    name: "Ciudad de Mexico",
    location: [19.4978, -99.1269],
    sales: 55335657
  },
  {
    name: "Coahuila",
    location: [25.4333, -101],
    sales: 112267
  },
  {
    name: "Colima",
    location: [19.2433, -103.725],
    sales: 1337989
  },
  {
    name: "Estado de Mexico",
    location: [19.4978, -99.1269],
    sales: 34213834
  },
  {
    name: "Guanajuato",
    location: [21.0181, -101.258],
    sales: 19559793
  },
  {
    name: "Guerrero",
    location: [28.5551, -107.492],
    sales: 17180333
  },
  {
    name: "Hidalgo",
    location: [19.57, -100.755],
    sales: 9288140
  },
  {
    name: "Jalisco",
    location: [20.6736, -103.344],
    sales: 28069547
  },
  {
    name: "Michoacan",
    location: [19.7006, -101.186],
    sales: 13420563
  },
  {
    name: "Morelos",
    location: [19.6097, -99.06],
    sales: 798534
  },
  {
    name: "Nayarit",
    location: [21.5039, -104.895],
    sales: 5475248
  },
  {
    name: "Nuevo Leon",
    location: [25.6714, -100.309],
    sales: 10225037
  },
  {
    name: "Oaxaca",
    location: [17.0669, -96.7203],
    sales: 12734661
  },
  {
    name: "Puebla",
    location: [19.0413, -98.2062],
    sales: 9192154
  },
  {
    name: "Queretaro",
    location: [20.5931, -100.392],
    sales: 2970323
  },
  {
    name: "Quintana Roo",
    location: [20.212, -87.466],
    sales: 19070
  },
  {
    name: "San Luis Potosi",
    location: [22.1565, -100.986],
    sales: 5830029
  },
  {
    name: "Sinaloa",
    location: [25.8257, -108.214],
    sales: 4056563
  },
  {
    name: "Tabasco",
    location: [17.9892, -92.9281],
    sales: 4047994
  },
  {
    name: "Tamaulipas",
    location: [23.7369, -99.1411],
    sales: 2131063
  },
  {
    name: "Tlaxcala",
    location: [19.3122, -98.2394],
    sales: 2626145
  },
  {
    name: "Veracruz",
    location: [19.1727, -96.1333],
    sales: 19048586
  },
  {
    name: "Yucatan",
    location: [20.97, -89.62],
    sales: 5915304
  },
  {
    name: "Zacatecas",
    location: [22.7709, -102.583],
    sales: 1408694
  }
];
  

let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

for (var i = 0; i < sales.length; i++) {

  var color = "";
  if (sales[i].sales > 50000000) {
    color = "green";
  }
  else if (sales[i].sales > 37500000) {
    color = "orange";
  }
  else if (sales[i].sales > 25000000) {
    color = "yellow";
  }
  else if (sales[i].sales > 12500000) {
    color = "purple";
  }
  else {
    color = "red";
  }

  L.circle(sales[i].location, {
    fillOpacity: 0.5,
    color: "white",
    fillColor: color,
    radius: sales[i].sales * 0.005
  }).bindPopup("<h1>" + sales[i].name + "</h1> <hr> <h3>Sales - " + formatter.format(sales[i].sales) + "</h3>").addTo(myMap);
}