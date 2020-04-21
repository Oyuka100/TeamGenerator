// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
      
    }
  
    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }

    getEmail(){
       return this.email;
    }

    getId(){
        return this.id
    }
  }

  // we can exporst this 
  module.exports = Employee;
