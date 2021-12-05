import { users } from "../../data/users.js";

export default class CustomerRepository{
    constructor(){
        this.customers = users.filter(customer => customer.type === 'customer')
    }

    getAll(){
        return this.customers;
    }
    
    getById(id){
        return this.customers.find(customer => customer.id === id);
    }

    add(customer){
        this.customers.push(customer);
    }
    update(customer){
        const pastCustomer =this.customers.findIndex(customer => customer.id === customer.id);
        this.customers[pastCustomer]=customer;
    }
    delete(customerr) {
        this.customers = this.customers.filter(customer => customer.id !== customerr.id);
      }
}