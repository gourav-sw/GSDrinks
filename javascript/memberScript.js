document.addEventListener("DOMContentLoaded", async function(){
  // placeholder for future revisions of loadData() and renderList()
  async function loadData(){
    users = [];
    users = await loadUserData();
    renderList(users);
  };
  loadData();
})

// function for the add button
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
        saveUserData(users);
        return;
      }
    }
  });

// // function for the load button
// const loadButton = document.querySelector("#load-btn");
//   loadButton.addEventListener("click", async function() {
//     users = [];
//     users = await loadUserData();
//     renderList(users);
//   });

// // function for the save button
// const saveButton = document.querySelector("#save-btn");
//   saveButton.addEventListener("click", async function() {
//     saveUserData(users);
//   });

// function for rendering the list
function renderList(users){
  // function for generating a list
  const userListElement = document.querySelector("#userList");
  userListElement.innerHTML = "";
  for (let u of users) {
    const listItem = document.createElement('li');
    listItem.className = "list-item";
    listItem.innerHTML = `${u.name}` 
    // `(${u.email})
    //   <button class="btn btn-primary btn-sm edit-btn">Edit</button>
    //   <button class="btn btn-danger btn-sm delete-btn">Delete</button>`;
    
    // // function for the edit button
    // const editButton = listItem.querySelector(".edit-btn");
    // editButton.addEventListener("click", function(){
    //   let newUserName = prompt("Please enter the new name");
    //   let newUserEmail = prompt("Please enter the new email");
    //   for (let u of users) {
    //     if (newUserEmail == u.email) {
    //       alert("Email is already registered, please use another email.");
    //       return;
    //     }
    //   }
    //   while (true) {
    //     if (newUserName == null || newUserEmail == null) {
    //       alert("Incorrect details entered, please try again.");
    //       return;
    //     }
    //     else if (newUserName == "" || newUserEmail == "") {
    //       alert("Details can't be blank, please try again.");
    //       return;
    //     }
    //     else {
    //       editUser(users, u.userid, newUserName, newUserEmail);
    //       renderList(users);
    //       alert("Edited Successfully.");
    //       return;
    //     }
    //   }
    // });
    
    // // function for the delete button
    // const deleteButton = listItem.querySelector(".delete-btn")
    //   deleteButton.addEventListener("click", function(){
    //     deleteUser(users, u.userid);
    //     renderList(users);
    //   });

    // call for adding to the list
    userListElement.appendChild(listItem);  
  }
}