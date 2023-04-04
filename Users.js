export class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }

    userList = [];

    addNewUser(username, password){
        userList.push(new User(username, password));
        alert("new user added successfully");
    } 
  }



  