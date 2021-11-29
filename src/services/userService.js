import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService{
    constructor(loggerService){
        this.employees =[]
        this.customers =[]
        this.errors=[]
        this.loggerService = loggerService
    }
    load(){
for (const user of users) {
    switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidtyForErrors(user)){
                this.customers.push(user)
            }
            break;

         case "employee": 
         if(!this.checkEmployeeValidtyForErrors(user)){
             this.employees.push(user)
        }
            break;

        default:
            this.errors.push(new DataError("Wrong User type",user))
            break;
    }
}
    }

    checkCustomerValidtyForErrors(user){
        let requiredFileds="id firstName lastName age city".split(" ");
        let hasErrors = false;
        for (const field of requiredFileds) {
            if(!user[field]){
                hasErrors= true;
                this.errors.push(new DataError(`Validationproblem on ${field} is required`,user))
            }
        }
        if (Number.isNaN( Number.parseInt(user.age))){
    this.errors.push(new DataError(`Validationproblem on ${user.age} is not a number`,user))
}
        return hasErrors
        }

        checkEmployeeValidtyForErrors(user){
            let requiredFileds="id firstName lastName age city salary".split(" ");
            let hasErrors = false;
            for (const field of requiredFileds) {
                if(!user[field]){
                    hasErrors= true;
                    this.errors.push(new DataError(`Validationproblem on ${field} is required`,user))
                }
            }
            if (Number.isNaN( Number.parseInt(user.age))){
                this.errors.push(new DataError(`Validationproblem on ${user.age} is not a number`,user))
            }
            return hasErrors
            }
           


    add(user){
     switch (user.type) {
         case "customer":
            if(!this.checkCustomerValidtyForErrors(user)){
                this.customers.push(user)
            }
             break;
     case "employee":
        if(!this.checkCustomerValidtyForErrors(user)){
            this.employees.push(user)
        }
             break;
             default:
                 this.errors.push(new DataError("This user can not be added. wrong user type",user))
     }
       this.loggerService.log(user)
    }
    list(){
       return this.users
    }
    getById(id){
        return this.users.find(u=>u.id ===id)
    }
    getCustomersSorted(){
       return  this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return  1;
            }
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return  -1;
            }
        })
        
    }
}