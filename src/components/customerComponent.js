import CustomerRepository from "../business/repositories/customerRepository.js";
import CustomerService from "../business/services/customerService.js";
import { ElasticLogger } from "../core/crossCuttingConserns/logging/elasticLogger.js";




const customerService = new CustomerService(new CustomerRepository(),new ElasticLogger());
console.log(customerService.getAll());
console.log(customerService.getById(1));
