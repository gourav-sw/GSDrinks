const JSON_BIN_ROOT = "https://api.jsonbin.io/v3"
const BIN_ID = "65338dbd0574da7622bbbaba"

async function loadData() {
  const readData = await axios.get(`${JSON_BIN_ROOT}/${BIN_ID}`);
  return readData.data.record;
}

console.log(loadData())

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