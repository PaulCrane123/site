import Controller from "./Controller.js";
const userinput = document.getElementById("userInput");
const passinput = document.getElementById("passInput");
const SignUpbutton = document.getElementById("sign_up");
const Logbutton = document.getElementById("LogIn");


const userController = new Controller;


SignUpbutton.addEventListener("click", (e) => {
  e.preventDefault();
  userController.addNewUser(userinput, passinput);
  alert("added new user and pass successfully");
}
);

Logbutton.addEventListener("click", (e) => {
  e.preventDefault();
  checkInfo();
}
);


function checkInfo() {
 userController.authenticate(userinput, passinput);
  // userList.forEach((user) => {
  //   console.log(user.username);
  //   if (user.username  == userinput.value){
  //     user.password == passinput.value ? alert("good") : alert("pass incorrect");
  //   }else {
  //     alert("user not found");
  //   }
  // })
  }