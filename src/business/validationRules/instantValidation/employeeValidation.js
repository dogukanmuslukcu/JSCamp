import Validator from "../../../core/helpers/validator.js";
import UserValidation from "./userValidation.js";

export default class EmployeeComponent extends UserValidation{
    constructor(){
        super();
        this.salary=[value =>Validator.isNumber(value),'salary must be a number']
    }
}