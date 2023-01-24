const {prompt} = require ("inquirer");
const {addDepartment, addRole, addEmployee, viewDepartments, viewRoles, viewEmployees, updateEmployeeRole} = require ("./lib/queries");

function loadMainPrompts() {
    prompt({
        type: "list",
        name: "choice"
        message: "How do you want to view employees"
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
        ]
    })
    .then(function({choice}) {
        switch(choice) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
        }
    }
}
function viewEmployees() {
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    })
}
function viewDepartments (){
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    })
}
function viewRoles (){
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.table(res);
        loadMainPrompts();
    })
}
function quit(){
    connection.end();
}