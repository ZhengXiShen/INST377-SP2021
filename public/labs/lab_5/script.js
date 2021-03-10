function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
   
    
    const request = await fetch(endpoint)
      //.then((blob) => blob.json())
      //.then((data) => restaurants.push(...data));

    const restaurants = await request.json()
    
    function findMatches(wordToMatch, restaurants) {
      	return restaurants.filter(places => {
        const regex = new RegExp(wordToMatch, 'gi');
        return places.name.match(regex);
      });
    }
    
    
    function displayMatches(event) {
        console.log(event.target.value);
        const matchArray = findMatches(event.target.value, restaurants);
        const html = matchArray.map(places => {
          const regex = new RegExp(event.target.value, 'gi') ;
          const placeName = places.name.replace(regex, `<span class="hl">						${event.target.value}</span>`);
          const placeAddress = places.address_line_1.replace(regex, `<span 					 class="hl">${event.target.value}</span>`);
          const placeCity = places.city.replace(regex, `<span class="hl">						${event.target.value}</span>`);
          
          return  `
            <li>
                <span class= "title">${placeName}</span>
                <span class= "address">${placeAddress}, 
                    ${placeCity}</span>
                <span class= "category">${places.category}</span>
            </li>
            `;
        }).join('');
        
        suggestions.innerHTML = html;
    }
    
    
   
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt) => { displayMatches(evt) 
    
    });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;