// ========== imports ==========
import './default.js';

// ========== script ==========
// reference
const appKey = '9nmmB1MUGkNFqHusjj7qybPu90aAnj8T';
const locationBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const searchForm = document.querySelector('.search-form');

// get location
class LocationFetcher {
    constructor(location) {
        this.location = location;
        this.locationQuery = `?apikey=${appKey}&q=${this.location}`;
        this.locationEndpoint = locationBase + this.locationQuery;
    }

    async getData() {
        // fetch
        const response = await fetch(this.locationEndpoint);

        // convert json into objects
        const data = await response.json();

        return data[0];
    }
}

// get weatther
class WeatherFetcher {
    constructor(appKey, ) {
        
    }
}

// main
const main = function () {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get location search input
        const location = searchForm.search.value.trim().toLowerCase();

        // fetching location data
        const locationFetcher = new LocationFetcher(location);
        locationFetcher.getData().then(data => {
            const locationKey = data.Key;
            console.log(locationKey);
            // const weatherFetcher = new WeatherFetcher(appKey, locationKey);
        }).catch(err => {
            console.log(err);
        });


        searchForm.reset();
    });
};

main();