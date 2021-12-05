import User from "./user.js";

export default class Employee extends User{
    constructor(id,firstName,lastName,city,age,type,salary){
        super(id,firstName,lastName,city,age,type)
        this.salary=salary
    }
}