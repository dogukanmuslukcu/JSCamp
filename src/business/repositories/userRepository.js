import { users } from "../../data/users.js";


export default class UserRepository{
    constructor(){
        this.users = users.filter(user => user.type === 'user')
    }

    getAll(){
        return this.users;
    }
    
    getById(id){
        return this.users.find(user => user.id === id);
    }

    add(user){
        this.users.push(user);
    }
    update(user){
        const pastUser =this.users.findIndex(user => user.id === user.id);
        this.users[pastUser]=user;
    }
    
    delete(userr) {
        this.users = this.users.filter(user => user.id !== userr.id);
      }

}