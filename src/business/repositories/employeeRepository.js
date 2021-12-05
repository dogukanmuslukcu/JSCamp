import { users } from "../../data/users.js";

export default class EmployeeRepository{
    constructor(){
        this.employees = users.filter(employee => employee.type === 'employee')
    }

    getAll(){
        return this.employees;
    }
    
    getById(id){
        return this.employees.find(employee => employee.id === id);
    }

    add(employee){
        this.employees.push(employee);
    }
    update(employee){
        const pastEmployee =this.employees.findIndex(employee => employee.id === employee.id);
        this.employees[pastEmployee]=employee;
    }
    
    delete(employeee) {
        this.employees = this.employees.filter(employee => employee.id !== employeee.id);
      }

}