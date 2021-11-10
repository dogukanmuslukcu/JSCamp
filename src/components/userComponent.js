import { BaseLogger, ElasticLogger } from "../crossCuttingConserns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component loaded");
let logger1 = new ElasticLogger
let userService = new UserService(logger1)

let user1 =new User(1,"doğukan","muslukçu","istanbul")
let user2 =new User(2,"berfin","muslukçu","istanbul")
userService.add(user1)
userService.add(user2)

console.log(userService.list());

//userService.getById(1)
//userService.list()

let customer={id:1,firstName:"Doğukan"}
customer.lastName="Muslukçu"