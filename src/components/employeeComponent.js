
import EmployeeRepository from "../business/repositories/employeeRepository.js";
import EmployeeService from "../business/services/employeeService.js";
import { ElasticLogger } from "../core/crossCuttingConserns/logging/elasticLogger.js";




const employeeService = new EmployeeService(new EmployeeRepository(),new ElasticLogger());
console.log(employeeService.getAll());
console.log(employeeService.getById(20));
