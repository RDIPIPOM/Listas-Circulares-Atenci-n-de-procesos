export default class Process{
    constructor(code, timeRequired){
        this._timeRequired = timeRequired;
        this._next = null;
    }


    get timeRequired(){
        return this._timeRequired;
    }

    get next(){
        return this._next;
    }

    set timeRequired(timeRequired){
        this._timeRequired = timeRequired;
    }

    set next(next){
        this._next = next;
    }

    toString(){
        return '////***Time Required: ' + this._timeRequired + '////';
    }
}