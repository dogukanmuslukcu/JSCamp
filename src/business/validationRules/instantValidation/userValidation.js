import BaseValidator from "../../../core/crossCuttingConserns/validition/baseValidation.js";
import Validator from "../../../core/helpers/validator.js";

export default class UserValidation extends BaseValidator {
  constructor() {
    super();
    this.id = [(value) => Validator.isNumber(value), "id must be a number."];
    this.firstName = [(value) => Validator.isName(value)];
    this.lastName = [(value) => Validator.isName(value)];
    this.city = [(value) => Validator.isName(value)];
    this.age = [(value) => Validator.isNumber(value), "age must be a number."];
  }
}
