// shop.html
// store map

document.addEventListener("DOMContentLoaded", async function(){
  const map = createMap();
  const markers = L.layerGroup();
    markers.addTo(map);
  
  document.querySelector("#sgfr").addEventListener("click", async function(){
    renderMap("data/locations/sgfr.json", markers)
  })
})

function createMap() {
  const map = L.map("map");
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  map.setView([1.3521, 103.8198], 11);
  return map;
}

async function loadData(filePath){
  const readData = await axios.get(filePath);
  return readData.data.locations;
}

async function renderMap(filePath, layerGroup){
  layerGroup.clearLayers();
  const locations = await loadData(filePath);
  for (let l of locations) {
    const marker = L.marker([l.latitude, l.longitude]);
    marker.addTo(layerGroup);
  }
}