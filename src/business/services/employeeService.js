import ErrorDataResult from "../../core/utilities/Concrete/errorDataResult.js";
import SuccesDataResult from "../../core/utilities/Concrete/succesDataResult.js";
import ErrorResult from "../../core/utilities/Concrete/errorResult.js";
import SuccesResult from "../../core/utilities/Concrete/succesResult.js";
import EmployeeValidation from "../validationRules/instantValidation/employeeValidation.js";

export default class EmployeeService {
  constructor(employeeRepository, loggerService) {
    this.employeeRepository = employeeRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const employees = this.employeeRepository.getAll();
    return new SuccesDataResult(employees, "Data başarıyla getirilmiştir.");
  }

  add(employee) {
    const errors = EmployeeValidation.validate(employee);
    if (errors == false) {
      return new ErrorResult("Kullanıcı eklenemedi"+" => "+ employee);
    } else {
      this.employeeRepository.add(employee);
      this.loggerService.log(employee);
      return new SuccesResult("Kullanıcı eklendi" +" => "+employee.firstName);
    }
  }

  getById(id) {
    const employee = this.employeeRepository.getById(id);
    if(!employee){
      return new ErrorDataResult("Bu id'ye sahip kişi bulunamadı.");
    }else{
      return new SuccesDataResult(employee,"Data başarıyla getirilmiştir.");
    }
    
  }

}
