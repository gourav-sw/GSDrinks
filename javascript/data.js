// functions for MembersZone
const JSON_BIN_ROOT = "https://api.jsonbin.io/v3/b";
const BIN_ID = "65338dbd0574da7622bbbaba";
const MASTER_KEY = "$2a$10$qBfMlk8JhK5FSGZJaBGgb.wR7mD.ihR.Bg.OaQxLopQWoxzOXvA1S";

let users = [];

async function loadUserData() {
  const readData = await axios.get(`${JSON_BIN_ROOT}/${BIN_ID}/latest`);
  return readData.data.record;
}

async function saveUserData(UserList) {
  const writeData = await axios.put(`${JSON_BIN_ROOT}/${BIN_ID}`, UserList, {
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": MASTER_KEY
    }
  });
  return writeData.data;
}

function addUser(UserList, name, email){
  let newUser = {
    userid: Math.floor(Math.random() * 1000000 + 1),
    name: name,
    email: email
  };
  UserList.push(newUser)
};

function editUser(UserList, userid, newName, newEmail){
  let editedUser = {
    userid: userid,
    name: newName,
    email: newEmail
  }

  const indexToReplace = UserList.findIndex(function(u){
    return u.userid == userid;
  });

  if (indexToReplace > -1) {
    UserList[indexToReplace] = editedUser;
  }
}

function deleteUser(UserList, userid) {
  let indexToDelete = null;
  for (let i = 0; i < UserList.length; i++) {
    if (UserList[i].userid == userid) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    UserList.splice(indexToDelete, 1);
  }
}

// functions for Shop
function createMap() {
  const map = L.map("map");
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  map.setView([1.3521, 103.8198], 11);
  return map;
}

async function loadMapData(filePath){
  const readData = await axios.get(filePath);
  return readData.data.locations;
}

async function renderMap(filePath, layerGroup){
  layerGroup.clearLayers();
  const locations = await loadMapData(filePath);
  for (let l of locations) {
    const marker = L.marker([l.latitude, l.longitude]);
    marker.addTo(layerGroup);
  }
}