import Result from "./result.js";

export default class SuccesResult extends Result{
    constructor(message){
        super(true,message)
    }
}