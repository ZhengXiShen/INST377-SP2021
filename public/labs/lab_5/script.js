function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  
  const mymap = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoienhzaGVuIiwiYSI6ImNrbTVxNWF3YjBncG8yb3MzbGcxY2NlbmYifQ.8uaOpmh7OkEOtbUi3QYq2Q'
  }).addTo(mymap);
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  const searchForm = document.querySelector('.search-form');


  const request = await fetch(endpoint)
  const results = await request.json()

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const zipFilter = results.filter((record) => record.zip.includes(searchInput.value) && record.geocoded_column_1);
    const firstFive = zipFilter.slice(0, 5);
    const fFiveLon = firstFive[0].geocoded_column_1.coordinates[0];
    const fFiveLat = firstFive[0].geocoded_column_1.coordinates[1];
    mapObjectFromFunction.setView(new L.LatLng(fFiveLat, fFiveLon), 8);
    mapObjectFromFunction.setZoom(13);

    suggestions.innerHTML = ''; 
    
    firstFive.forEach((item) => {
      const marker = L.marker([item.geocoded_column_1.coordinates[1], item.geocoded_column_1.coordinates[0]]).addTo(mapObjectFromFunction);

      const appendObj = document.createElement('li');
      appendObj.classList.add('block');
      appendObj.classList.add('list-item');
      appendObj.classList.add('box');
      appendObj.classList.add('has-background-info');
      appendObj.classList.add('has-text-warning');
      appendObj.classList.add('mt-10');
      appendObj.innerHTML = `<div class="list-header is-size-4">${item.name}</div> 
      		<address class="is-size-6"> ${item.address_line_1} </address>`;
      suggestions.append(appendObj);

    });

  });


}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;
//window.onload = dataHandler;
