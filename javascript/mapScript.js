// shop.html
// store map

document.addEventListener("DOMContentLoaded", function(){
  createMap();
})

function createMap() {
  const map = L.map("map");
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  map.setView([1.3521, 103.8198], 11);
}

async function loadData(filePath){
  const readData = await axios.get(filePath);
  return readData.data.locations;
}

const markers = L.layerGroup();

async function renderMap(filePath){
  markers.clearLayers();
  const locations = await loadData(filePath);
  for (let l of locations) {
    const marker = L.marker([l.latitude, l.longitude]);
    marker.addTo(markers);
  }
}

document.querySelector("#sgfr").addEventListener("click", function(){
  renderMap("data/locations/sgfr.json");
})
