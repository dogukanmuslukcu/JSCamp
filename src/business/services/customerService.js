import ErrorDataResult from "../../core/utilities/Concrete/errorDataResult.js";
import SuccesDataResult from "../../core/utilities/Concrete/succesDataResult.js";
import ErrorResult from "../../core/utilities/Concrete/errorResult.js";
import SuccesResult from "../../core/utilities/Concrete/succesResult.js";
import CustomerValidation from "../validationRules/instantValidation/customerValidation.js";

export default class CustomerService {
  constructor(customerRepository, loggerService) {
    this.customerRepository = customerRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const customers = this.customerRepository.getAll();
    return new SuccesDataResult(customers, "Data başarıyla getirilmiştir.");
  }

  add(customer) {
    const errors = CustomerValidation.validate(customer);
    if (errors == false) {
      return new ErrorResult("Kullanıcı eklenemedi"+" => "+ customer);
    } else {
      this.customerRepository.add(customer);
      this.loggerService.log(customer);
      return new SuccesResult("Kullanıcı eklendi" +" => "+customer.firstName);
    }
  }

  getById(id) {
    const customer = this.customerRepository.getById(id);
    if(!customer){
      return new ErrorDataResult("Bu id'ye sahip kişi bulunamadı.");
    }else{
      return new SuccesDataResult(customer,"Data başarıyla getirilmiştir.");
    }
    
  }

}
