import User from "./Users.js";

export default class Controller {
    constructor() {
      this.userList = [
        {
          username: "master-user",
          password: "12345"
        },
        {
          username: "master-user2",
          password:"54321"
        },
        {
          username: "paul-crane",
          password: "password"
        }
      ]
    }

    

    addNewUser(username, password){
        this.userList.push(new User(username, password));
        alert("new user added successfully");
    }

    authenticate(username, password){
      this.userList.forEach((user) => {
        if (user.username == username ){
          if (user.password == password) {
            alert("log in succesful")
          }
        }
      })

        
      
    }
  }



