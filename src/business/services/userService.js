import ErrorDataResult from "../../core/utilities/Concrete/errorDataResult.js";
import SuccesDataResult from "../../core/utilities/Concrete/succesDataResult.js";
import ErrorResult from "../../core/utilities/Concrete/errorResult.js";
import SuccesResult from "../../core/utilities/Concrete/succesResult.js";
import UserValidation from "../validationRules/instantValidation/userValidation.js";

export default class UserService {
  constructor(userRepository, loggerService) {
    this.userRepository = userRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const users = this.userRepository.getAll();
    return new SuccesDataResult(users, "Data başarıyla getirilmiştir.");
  }

  add(user) {
    const errors = UserValidation.validate(user);
    if (errors == false) {
      return new ErrorResult("Kullanıcı eklenemedi"+" => "+ user);
    } else {
      this.userRepository.add(user);
      this.loggerService.log(user);
      return new SuccesResult("Kullanıcı eklendi" +" => "+user.firstName);
    }
  }

  getById(id) {
    const user = this.userRepository.getById(id);
    if(!user){
      return new ErrorDataResult("Bu id'ye sahip kişi bulunamadı.");
    }else{
      return new SuccesDataResult(user,"Data başarıyla getirilmiştir.");
    }
    
  }

}
