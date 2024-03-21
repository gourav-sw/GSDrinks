// store map
document.addEventListener("DOMContentLoaded", async function(){
  const map = createMap();
  const markers = L.layerGroup();
    markers.addTo(map);
  
  document.querySelector("#sgfr").addEventListener("click", async function(){
    renderMap("data/locations/sgfr.json", markers)
  })
  document.querySelector("#seveneleven").addEventListener("click", async function(){
    renderMap("data/locations/seveneleven.json", markers)
  })
  document.querySelector("#cheers").addEventListener("click", async function(){
    renderMap("data/locations/cheers.json", markers)
  })
  document.querySelector("#fairprice").addEventListener("click", async function(){
    renderMap("data/locations/fairprice.json", markers)
  })
  document.querySelector("#giant").addEventListener("click", async function(){
    renderMap("data/locations/giant.json", markers)
  })
})