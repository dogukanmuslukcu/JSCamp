import Validator from "../../../core/helpers/validator.js";
import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation{
    constructor(){
        super();
        this.creditCardNumber = [value => Validator.isCreditCardNumber(value),'credit Card Number must be only digit and 16 length'];
    }
}