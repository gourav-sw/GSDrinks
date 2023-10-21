async function createList(){
  let users = await loadData();
  renderList(users);
  document.querySelector("#addUser").addEventListener("click", function(){
    const userNameElement = document.querySelector("#userName");
    let userName = null;
      while (true) {
        if (userNameElement.value == "") {
          alert("Your name can't be blank!")
          break;
        }
        else {
          userName = userNameElement.value;
          break;
        }
      }
    const userEmailElement = document.querySelector("#userEmail");
    let userEmail = null;
    while (true) {
      if (userEmailElement.value == "") {
        alert("Your email can't be blank!")
        break;
      }
      else {
        userEmail = userEmailElement.value;
        break;
      }
    }
    while (true) {
     if (userName == null || userEmail == null) {
      alert("Please correctly re-enter the form for a valid entry, Thank you!");
      break;
     }
     else {
      addUser(users, userName, userEmail);
      renderList(users);
      break;
     }
    }
  })
}

function renderList(users){
  const userListElement = document.querySelector("#userList");
  userListElement.innerHTML = "";
  for (let u of users) {
    const listItem = document.createElement('li');
    listItem.className = "list-item";
    listItem.innerHTML = `${u.name} (${u.email})
      <button class="btn btn-primary btn-sm edit-btn">Edit</button>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>`;
    listItem.querySelector(".edit-btn").addEventListener("click", function(){
      let newUserName = prompt("Please enter the new name: ");
      while (newUserName == null) {
        newUserName = prompt("Please enter correctly: ");
      }
      let newUserEmail = prompt("Please enter the new email");
      while (newUserEmail == null) {
        newUserEmail = prompt("Please enter correctly: ");
      }
      editUser(users, u.userid, newUserName, newUserEmail);
      renderList(users);
    });
    listItem.querySelector(".delete-btn").addEventListener("click", function(){
      deleteUser(users, u.userid);
      renderList(users);
    });
    userListElement.appendChild(listItem);  
  }
}

document.addEventListener("DOMContentLoaded", function(){
  createList();
})