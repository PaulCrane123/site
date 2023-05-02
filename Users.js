export default class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }

    userList = [
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

    addNewUser(username, password){
        userList.push(new User(username, password));
        alert("new user added successfully");
    }

    authenticate(username, password){
      userList.forEach((user) => {
        if (user.username == username ){
          if (user.password == password) {
            alert("log in succesful")
          }
        }
      })

        
      
    }
  }



