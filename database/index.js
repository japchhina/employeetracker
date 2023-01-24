const { createPromptModule } = require("inquirer");
const connection = require("./connection");

class database {
    constructor (connection) {
        this.connection = connection;
    }
findAllEmployees() {
    return this.connection.promise().query(
        SELECT * FROM employee 
    )
}
findAllPossibleManagers(employeeID){
    return this.connection.promise().query(
        SELECT * FROM employee WHERE id != ?,
        employeeID
    )
}
createEmployee(employee) {
    return this.connection.promise().query(
        INSERT INTO employee SET ?,
        employee
    )
}
removeEmployee(employeeID) {
    return this.connection.promise().query(
        DELETE FROM employee WHERE id = ?,
        employeeID
    )
}
updateEmployeeRole(employeeID, roleID)
    return this.connection.promise().query(
        UPDATE employee SET role_id = ? WHERE id = ?,
        [roleID, employeeID]
    )
}
updateEmployeeManager(employeeID, managerID) {
    return this.connection.promise().query(
        UPDATE employee SET manager_id = ? WHERE id = ?,
        [managerID, employeeID]
    )   
}
findAllRoles() {
    return this.connection.promise().query(
        SELECT * FROM role
    )
}
createRole(role) {
    return this.connection.promise().query(
        INSERT INTO role SET ?,
        role
    )
}
createPromptModule.createPromptModule();
const db = new database(connection);

module.exports = new database(connection);
