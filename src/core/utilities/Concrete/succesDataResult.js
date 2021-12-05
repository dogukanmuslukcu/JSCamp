import DataResult from "./dataResult.js";

export default class SuccesDataResult extends DataResult{
    constructor(data,message){
        super(true,data,message);
    }
}