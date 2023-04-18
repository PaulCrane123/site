export class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }

    userList = [
      {
        username: "Master-User",
        password: "12345"
      },
      {
        username: "Master-User2",
        password:"54321"
      },
      {
        username: "PaulCrane",
        password: "password"
      }
    ];

    addNewUser(username, password){
        userList.push(new User(username, password));
        alert("new user added successfully");
    } 
  }



  