import User from "./user.js";

export default class Customer extends User{
    constructor(id, firstName, lastName, city,age,type,creditCartNumber) {
       super(id,firstName,lastName,city,age,type)
       this.creditCartNumber=creditCartNumber;
      }
}