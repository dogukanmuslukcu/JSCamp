import UserRepository from "../business/repositories/userRepository.js";
import UserService from "../business/services/userService.js";
import { ElasticLogger } from "../core/crossCuttingConserns/logging/elasticLogger.js";
import User from "../models/user.js";



const userService = new UserService(new UserRepository,new ElasticLogger());
console.log(userService.getAll());
console.log(userService.getById(12));//id, firstName, lastName, city,age
//console.log(userService.add(new User(9,"Ahmet","Demir","Zonguldak",40)));