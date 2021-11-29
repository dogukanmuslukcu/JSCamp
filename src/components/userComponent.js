import { BaseLogger, ElasticLogger } from "../crossCuttingConserns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js";

console.log("user component loaded");
let logger1 = new ElasticLogger
let userService = new UserService(logger1)

let user1 =new User(1,"doğukan","muslukçu","istanbul")
let user2 =new User(2,"berfin","muslukçu","istanbul")
//userService.add(user1)
//userService.add(user2)
console.log(userService.list());

//userService.getById(1)
//userService.list()

let customer={id:1,firstName:"Doğukan"}
customer.lastName="Muslukçu"

console.log("----------------------------------")
userService.load();

let customerToAdd =new Customer(1,"Seda","Yılmaz","Ankara",25);
customerToAdd.type ="customer"
//userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted())