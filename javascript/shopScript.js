// store map
document.addEventListener("DOMContentLoaded", async function(){
  const map = createMap();
  const markers = L.layerGroup();
    markers.addTo(map);
  
  document.querySelector("#sgfr").addEventListener("click", async function(){
    renderMap("data/locations/sgfr.json", markers)
  })
})