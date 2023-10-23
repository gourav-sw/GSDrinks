document.addEventListener("DOMContentLoaded", async function(){
  
})

let users = [];

const addButton = document.querySelector("#addUser");
  addButton.addEventListener("click", function(){
    const userNameElement = document.querySelector("#userName");
    const userEmailElement = document.querySelector("#userEmail");
    let userName = null;
    let userEmail = null;
    while (true) {
      if (userNameElement.value == "" || userEmailElement.value == "") {
        alert("Your details can't be blank, please try again.");
        return;
      }
      else {
        userName = userNameElement.value;
        userEmail = userEmailElement.value;
        break;
      }
    }
    for (let u of users) {
      if (userEmail == u.email) {
        alert("Email is already registered, please use another email.");
        return;
      }
    }
    while (true) {
      if (userName == null || userEmail == null) {
        alert("Please correctly re-enter the form for a valid entry, Thank you!");
        return;
      }
      else {
        addUser(users, userName, userEmail);
        renderList(users);
        alert(`Thank you ${userName} for registering your GetHealthy membership! Check your email inbox for the 10% offer coupon.`);
        return;
      }
    }
  });

const loadButton = document.querySelector("#load-btn");
  loadButton.addEventListener("click", async function() {
    users = [];
    users = await loadData();
    renderList(users);
  });

const saveButton = document.querySelector("#save-btn");
  saveButton.addEventListener("click", async function() {
    saveData(users);
  });

function renderList(users){
  const userListElement = document.querySelector("#userList");
  userListElement.innerHTML = "";
  for (let u of users) {
    const listItem = document.createElement('li');
    listItem.className = "list-item";
    listItem.innerHTML = `${u.name} (${u.email})
      <button class="btn btn-primary btn-sm edit-btn">Edit</button>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>`;
    const editButton = listItem.querySelector(".edit-btn");
    editButton.addEventListener("click", function(){
      let newUserName = prompt("Please enter the new name");
      let newUserEmail = prompt("Please enter the new email");
      for (let u of users) {
        if (newUserEmail == u.email) {
          alert("Email is already registered, please use another email.");
          return;
        }
      }
      while (true) {
        if (newUserName == null || newUserEmail == null) {
          alert("Incorrect details entered, please try again.");
          return;
        }
        else if (newUserName == "" || newUserEmail == "") {
          alert("Details can't be blank, please try again.");
          return;
        }
        else {
          editUser(users, u.userid, newUserName, newUserEmail);
          renderList(users);
          alert("Edited Successfully.");
          return;
        }
      }
    });
  
    const deleteButton = listItem.querySelector(".delete-btn")
      deleteButton.addEventListener("click", function(){
        deleteUser(users, u.userid);
        renderList(users);
      });
    userListElement.appendChild(listItem);  
  }
}