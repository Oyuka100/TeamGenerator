const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employee = [];


function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Which type of employee would u like to add?",
        choices: ["Manager","Intern", "Engineer", "No"],
        
      },
    ])
    .then((val) => {
      switch (val.choices) {
        case "Intern":
          intern();
          break;

        case "Engineer":
          engineer();
          break;

        case "Manager":
          manager();
          break;
          
        case "No":
        default: 
          findEmployee();
      }
    });
}

function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "what's your manager's name",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "what's your manager's email",
      },

      {
        type: "input",
        name: "managerId",
        message: "what's your manager's id",
      },

      {
        type: "input",
        name: "managerOfficeNumber",
        message: "what's your manager's office  number",
      },
    ])
    .then((val) => {
      var manager = new Manager(
        val.managerName,
        val.managerEmail,
        val.managerId,
        val.managerOfficeNumber
      );
      employee.push(manager);
      start();
    });
  
}

function startMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Which type of employee would u like to add?",
        choices: ["Intern", "Engineer", "No"],
        
      },
    ])
    .then((val) => {
      switch (val.choices) {
        case "Intern":
          intern();
          break;

        case "Engineer":
          engineer();
          break;

        case "No":
        default:
          findEmployee();
      }
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "what's your engineer's name",
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "what's your engineer's email",
      },

      {
        type: "input",
        name: "engineerId",
        message: "what's your engineer's id",
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "what's your engineer's github",
      },
    ])
    .then((val) => {
      var engineer = new Engineer(
        val.engineerName,
        val.engineerEmail,
        val.engineerId,
        val.engineerGithub
      );
      employee.push(engineer);
      startMember();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "what's your intern's name",
      },

      {
        type: "input",
        name: "internEmail",
        message: "what's your intern's email",
      },

      {
        type: "input",
        name: "internId",
        message: "what's your intern's id",
      },

      {
        type: "input",
        name: "internSchool",
        message: "what's your intern's school",
      },
    ])
    .then((val) => {
      var intern = new Intern(
        val.internName,
        val.internEmail,
        val.internId,
        val.internSchool
      );
      employee.push(intern);
      startMember();
    });
}

function findEmployee() {
  console.log("Hello");
  fs.writeFileSync(outputPath, render(employee));
}
start();
